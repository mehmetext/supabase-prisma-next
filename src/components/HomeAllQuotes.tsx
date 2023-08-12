import wait from "@/lib/utils/wait";
import AllQuotes from "./AllQuotes";

export default async function HomeAllQuotes() {
  await wait(1000);

  return <AllQuotes />;
}
