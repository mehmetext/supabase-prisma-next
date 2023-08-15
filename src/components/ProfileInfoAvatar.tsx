"use client";

import { User } from "@prisma/client";
import Avatar from "./Avatar";
import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function ProfileInfoAvatar({ user }: { user: User }) {
  const router = useRouter();
  const inputFile = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<File | null>();
  const [photoSrc, setPhotoSrc] = useState<string | null>();

  const handleSelectPhoto: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
      e.target.value = "";
    }
  };

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      const handleReaderLoad = () => {
        setPhotoSrc(reader.result?.toString());
        reader.removeEventListener("load", handleReaderLoad);
      };

      reader.addEventListener("load", handleReaderLoad);
    } else {
      setPhotoSrc(null);
    }
  }, [photo]);

  return (
    <>
      <div className="flex items-center justify-center relative group rounded-full">
        <Avatar alt={user.username} src={photoSrc ?? user.image} size={160} />
        <div className="opacity-0 h-full w-full absolute bg-black/50 rounded-full flex flex-col gap-2 items-center justify-center transition group-hover:opacity-100">
          <div>
            <input
              ref={inputFile}
              hidden
              type="file"
              name="photo"
              id="photo"
              onChange={handleSelectPhoto}
            />
            <button
              onClick={() => {
                inputFile.current?.click();
              }}
              className="bg-orange-600 py-1 px-2 text-sm font-medium rounded transition hover:bg-orange-700 text-white disabled:cursor-wait disabled:bg-orange-600/60"
            >
              Change Photo
            </button>
          </div>
          {!photo && (
            <button className="bg-red-600 py-1 px-2 text-sm font-medium rounded transition hover:bg-red-700 text-white disabled:cursor-wait disabled:bg-red-600/60">
              Delete Photo
            </button>
          )}
        </div>
      </div>
      {photo && (
        <div className="flex gap-2">
          <button
            onClick={async () => {
              await fetch("/api/users/lkj123lkj/photo", {
                method: "POST",
              });
            }}
            className="bg-green-600 py-1 px-2 text-sm font-medium rounded transition hover:bg-green-700 text-white disabled:cursor-wait disabled:bg-green-600/60"
          >
            Save Photo
          </button>
          <button
            onClick={() => {
              setPhoto(null);
            }}
            className="bg-gray-600 py-1 px-2 text-sm font-medium rounded transition hover:bg-gray-700 text-white disabled:cursor-wait disabled:bg-gray-600/60"
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
}
