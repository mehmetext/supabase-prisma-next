import Link from "next/link";
import Avatar from "./Avatar";
import { User, Quote } from "@prisma/client";
import cn from "@/lib/utils/cn";

export default function QuoteItem({
  quote,
}: {
  quote: Quote & { user: User };
}) {
  return (
    <div className="bg-orange-100/60 break-inside-avoid rounded-md flex flex-col pt-8 gap-4 overflow-hidden relative border border-orange-200 transition-all hover:scale-105 hover:shadow-md hover:bg-orange-100">
      <div
        className={cn(
          "absolute right-0 top-0 text-sm font-medium px-2 py-1 rounded-bl-md",
          {
            "bg-red-500/30 text-red-700": quote.score < 0,
            "bg-gray-500/30 text-gray-700": quote.score === 0,
            "bg-green-500/30 text-green-700": quote.score > 0,
          }
        )}
      >
        {quote.score}
      </div>
      <p className="mx-4 font-light">
        <span className="font-bold pr-1">“</span>
        {quote.quote}
        <span className="font-bold pl-1">”</span>
      </p>
      <Link href="/" className="self-end flex items-center gap-2 mx-4">
        <div className="flex flex-col text-right">
          <p className="font-medium line-clamp-1 leading-none">
            {quote.user.name}
          </p>
          <p className="text-xs text-black/40 leading-none">
            {quote.user.username}
          </p>
        </div>
        <div className="shrink-0">
          <Avatar alt={quote.user.username} src={quote.user.image} />
        </div>
      </Link>
      <div className="grid grid-cols-2">
        <button className="flex items-center justify-center py-2 text-sm bg-green-500/30 text-green-700 font-medium transition hover:bg-green-500/50">
          Up
        </button>
        <button className="flex items-center justify-center py-2 text-sm bg-red-500/30 text-red-700 font-medium transition hover:bg-red-500/50">
          Down
        </button>
      </div>
    </div>
  );
}
