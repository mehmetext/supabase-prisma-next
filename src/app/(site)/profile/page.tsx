import AddQuote from "@/components/AddQuote";
import ProfileAllQuotes from "@/components/ProfileAllQuotes";
import getCurrentUser from "@/lib/getCurrentUser";
import { notFound } from "next/navigation";

export default async function Profile() {
  const user = await getCurrentUser();

  if (!user) notFound();

  return (
    <>
      <AddQuote user={user} />
      <ProfileAllQuotes user={user} />
    </>
  );
}
