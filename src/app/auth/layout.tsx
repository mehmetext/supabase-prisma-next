import Container from "@/components/Container";
import Logo from "@/components/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-500">
      <Container className="max-w-lg">
        <div className="bg-white shadow-xl rounded-md flex flex-col gap-4 p-4">
          <Logo className="self-center" />
          {children}
        </div>
      </Container>
    </div>
  );
}
