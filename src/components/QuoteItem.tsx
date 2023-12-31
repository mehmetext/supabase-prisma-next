"use client";

import Link from "next/link";
import Avatar from "./Avatar";
import { User, Quote, QuoteAndVote, VoteType } from "@prisma/client";
import cn from "@/lib/utils/cn";
import { useRouter } from "next/navigation";

export default function QuoteItem({
  quote,
  showUpDown,
  me,
}: {
  quote: Quote & { user: User; quoteAndVote: QuoteAndVote[] };
  showUpDown: boolean;
  me: User | null;
}) {
  const router = useRouter();

  const checkVoteType = (type: VoteType) => {
    if (!quote.quoteAndVote[0]) return false;

    return quote.quoteAndVote[0].type === type;
  };

  const getVoteType = (): VoteType | null => {
    if (!quote.quoteAndVote[0]) return null;

    return quote.quoteAndVote[0].type;
  };

  return (
    <div
      className={cn(
        "bg-orange-100/60 break-inside-avoid rounded-md flex flex-col pt-8 gap-4 overflow-hidden relative border border-orange-200 transition-all hover:scale-105 hover:shadow-md hover:bg-orange-100",
        {
          "pb-4": !showUpDown,
        }
      )}
    >
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
      <div className="flex gap-2 justify-between mx-4 items-center">
        <div className="text-xs text-black/40">
          {quote.createdAt.toLocaleTimeString("en-EN", {
            timeStyle: "short",
            hourCycle: "h23",
          })}{" "}
          -{" "}
          {quote.createdAt.toLocaleDateString("en-EN", { dateStyle: "medium" })}
        </div>
        <Link
          href={`/${quote.user.username}`}
          className="flex items-center gap-2"
        >
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
      </div>
      {showUpDown && (
        <div className="grid grid-cols-2">
          <button
            onClick={async () => {
              await fetch(`/api/quotes/${quote.id}/${me?.id}`, {
                method: "POST",
                body: JSON.stringify({
                  type: "UP",
                  currentType: getVoteType(),
                }),
              });
              router.refresh();
            }}
            className={cn(
              "flex items-center justify-center py-2 text-sm font-medium transition",
              {
                "bg-green-500/30 text-green-700 hover:bg-green-500/50":
                  !checkVoteType("UP"),
                "bg-green-700 text-white hover:bg-green-800":
                  checkVoteType("UP"),
              }
            )}
          >
            {checkVoteType("UP") ? "Upped" : "Up"}
          </button>
          <button
            onClick={async () => {
              await fetch(`/api/quotes/${quote.id}/${me?.id}`, {
                method: "POST",
                body: JSON.stringify({
                  type: "DOWN",
                  currentType: getVoteType(),
                }),
              });
              router.refresh();
            }}
            className={cn(
              "flex items-center justify-center py-2 text-sm font-medium transition",
              {
                "bg-red-500/30 text-red-700 hover:bg-red-500/50":
                  !checkVoteType("DOWN"),
                "bg-red-700 text-white hover:bg-red-800": checkVoteType("DOWN"),
              }
            )}
          >
            {checkVoteType("DOWN") ? "Downed" : "Down"}
          </button>
        </div>
      )}
    </div>
  );
}
