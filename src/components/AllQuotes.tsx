"use client";

import { Quote, QuoteAndVote, User } from "@prisma/client";
import QuoteItem from "./QuoteItem";
import Masonry from "react-masonry-css";

export default function AllQuotes({
  quotes,
  me,
}: {
  quotes: Array<Quote & { user: User; quoteAndVote: QuoteAndVote[] }>;
  me: User | null;
}) {
  return (
    <Masonry
      breakpointCols={{
        default: 3,
        1280: 2,
        768: 1,
      }}
      className="flex gap-4"
      columnClassName="flex flex-col gap-4"
    >
      {quotes.map((quote) => (
        <QuoteItem
          key={quote.id}
          quote={quote}
          me={me}
          showUpDown={me != null && me?.id !== quote.user.id}
        />
      ))}
    </Masonry>
  );
}
