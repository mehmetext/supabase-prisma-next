import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-orange-500 text-white py-5">
      <Container as="div" className="flex items-center justify-between gap-4">
        <Logo />
        <nav className="flex-1 flex items-center gap-4">
          <Link
            href="/"
            className=" text-white/70 font-medium transition hover:text-white"
          >
            Quotes
          </Link>
          <Link
            href="/"
            className=" text-white/70 font-medium transition hover:text-white"
          >
            My Quotes
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/auth/login"
            className="bg-orange-600 py-2 px-3 font-medium rounded transition hover:bg-orange-700"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="bg-orange-600 py-2 px-3 font-medium rounded transition hover:bg-orange-700"
          >
            Register
          </Link>
        </div>
      </Container>
    </header>
  );
}
