import AddQuote from "@/components/AddQuote";
import HomeAllQuotes from "@/components/HomeAllQuotes";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function Home({
  searchParams: { page },
}: {
  searchParams: { page?: number };
}) {
  const user = await getCurrentUser();

  return (
    <>
      {user && <AddQuote user={user} />}
      <HomeAllQuotes page={page} />
    </>
  );
}
