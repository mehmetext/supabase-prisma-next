"use client";

import cn from "@/lib/utils/cn";
import { User } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMenu({ user }: { user?: User | null }) {
  const pathname = usePathname();

  return (
    <nav className="flex-1 flex items-center gap-4">
      <Link
        href="/"
        className={cn(
          "text-white/70 font-medium transition hover:text-white border-b border-b-transparent",
          {
            "border-b-white text-white": pathname === "/",
          }
        )}
      >
        Quotes
      </Link>
    </nav>
  );
}
