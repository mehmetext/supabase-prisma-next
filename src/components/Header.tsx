import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="bg-orange-500 text-white py-5">
      <Container as="div" className="flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold italic transition-all hover:tracking-wider"
        >
          SP Next
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="bg-orange-600 py-2 px-3 font-medium rounded transition hover:bg-orange-700"
          >
            Login
          </Link>
          <Link
            href="/"
            className="bg-orange-600 py-2 px-3 font-medium rounded transition hover:bg-orange-700"
          >
            Register
          </Link>
        </div>
      </Container>
    </header>
  );
}
