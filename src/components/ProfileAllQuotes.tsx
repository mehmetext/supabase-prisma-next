import { Quote, QuoteAndVote, User } from "@prisma/client";
import React from "react";
import AllQuotes from "./AllQuotes";

export default function ProfileAllQuotes({
  quotes,
  me,
}: {
  quotes: Array<Quote & { user: User; quoteAndVote: QuoteAndVote[] }>;
  me: User | null;
}) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="text-3xl font-bold">Quotes</div>
      <AllQuotes quotes={quotes} me={me} />
    </div>
  );
}
