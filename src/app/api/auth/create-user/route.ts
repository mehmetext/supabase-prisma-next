import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const user = await prisma.user.create({
      data: {
        name: data.name,
        username: data.username,
        email: data.email,
        hashedPassword: await bcrypt.hash(data.password, 12),
      },
    });

    return NextResponse.json({ status: "ok", user });
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      let message = "";

      if (e.code === "P2002") {
        let targetList: string[] = e.meta?.target as string[];

        targetList.forEach((target, i) => {
          if (target === "username") message += "Username";
          if (target === "email") message += "E-Mail";

          if (i < targetList.length - 1) {
            message += ", ";
          }
        });

        message += " already exists.";
      }
      return NextResponse.json({ status: "error", message: message });
    }
  }
}
