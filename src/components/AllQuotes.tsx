"use client";

import QuoteItem from "./QuoteItem";
import Masonry from "react-masonry-css";

export default async function AllQuotes() {
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
      <QuoteItem str="Assumenda deserunt nihil atque nesciunt quas, error tenetur nostrum in enim voluptates accusantium." />
      <QuoteItem str="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
      <QuoteItem str="Lorem ipsum." />
      <QuoteItem str="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
      <QuoteItem str="At blanditiis magnam perspiciatis illum sit reiciendis rerum earum." />
      <QuoteItem str="Lorem, ipsum dolor sit amet consectetur adipisicing elit." />
      <QuoteItem str="Assumenda deserunt nihil atque nesciunt quas, error tenetur nostrum in enim voluptates accusantium." />
      <QuoteItem str="At blanditiis magnam perspiciatis illum sit reiciendis rerum earum." />
      <QuoteItem str="At blanditiis magnam perspiciatis illum sit reiciendis rerum earum." />
      <QuoteItem str="Assumenda deserunt nihil atque nesciunt quas, error tenetur nostrum in enim voluptates accusantium." />
    </Masonry>
  );
}
