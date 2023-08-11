import wait from "@/lib/utils/wait";
import QuoteItem from "./QuoteItem";

export default async function AllQuotes() {
  await wait(100);
  return (
    <div className="gap-x-4 space-y-4 sm:columns-2 md:columns-3">
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
    </div>
  );
}
