"use client";

import cn from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMenu() {
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
      <Link
        href="/"
        className={cn(
          "text-white/70 font-medium transition hover:text-white border-b border-b-transparent",
          {
            "border-b-white text-white": pathname === "/my-quotes",
          }
        )}
      >
        My Quotes
      </Link>
    </nav>
  );
}
