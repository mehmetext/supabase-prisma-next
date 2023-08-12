"use client";

import { Quote, User } from "@prisma/client";
import QuoteItem from "./QuoteItem";
import Masonry from "react-masonry-css";

export default function AllQuotes({
  quotes,
  me,
}: {
  quotes: Array<Quote & { user: User }>;
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
          isMine={me?.id === quote.user.id}
        />
      ))}
    </Masonry>
  );
}
