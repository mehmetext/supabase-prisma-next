import cn from "@/lib/utils/cn";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "text-3xl font-bold italic transition-all hover:scale-110",
        className
      )}
    >
      SP Next
    </Link>
  );
}
