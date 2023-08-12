import AddQuote from "@/components/AddQuote";
import AllQuotes from "@/components/AllQuotes";
import getCurrentUser from "@/lib/getCurrentUser";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <>
      {user && <AddQuote user={user} />}
      <AllQuotes />
    </>
  );
}
