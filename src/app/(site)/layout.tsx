import Container from "@/components/Container";
import Header from "@/components/Header";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Container as="main">{children}</Container>
    </>
  );
}
