import getCurrentUser from "@/lib/getCurrentUser";
import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";
import cuid from "cuid";
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();

  if (!user) {
    return NextResponse.json({ status: false, message: "Permission denied" });
  }

  const formData = await req.formData();
  const photo = formData.get("photo") as File;

  const compressed = await sharp(await photo.arrayBuffer())
    .resize(512)
    .toBuffer();

  const fileName = `${cuid()}.${getFileExtension(photo.name)}`;

  const { data, error } = await supabase.storage
    .from("profile_photos")
    .upload(fileName, compressed.buffer);

  if (error) {
    return NextResponse.json({ status: false, message: error?.message });
  }

  const {
    data: { publicUrl: fileUrl },
  } = supabase.storage.from("profile_photos").getPublicUrl(fileName);

  await prisma.user.update({
    where: { id: user.id },
    data: { image: fileUrl },
  });

  return NextResponse.json({ status: true });
}

function getFileExtension(fileName: string): string | null {
  const lastIndex = fileName.lastIndexOf(".");
  if (lastIndex === -1 || lastIndex === fileName.length - 1) {
    return null; // Nokta bulunamadı veya dosya adı noktayla bitti
  }
  return fileName.substring(lastIndex + 1);
}
