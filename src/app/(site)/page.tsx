import AddQuote from "@/components/AddQuote";
import HomeAllQuotes from "@/components/HomeAllQuotes";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function Home() {
  const user = await getCurrentUser();
  return (
    <>
      {user && <AddQuote />}
      <HomeAllQuotes />
    </>
  );
}
