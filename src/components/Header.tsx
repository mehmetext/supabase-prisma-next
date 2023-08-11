import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 flex items-center justify-between bg-orange-500 text-white">
      <Link href="/" className="text-3xl font-bold italic">
        SP-Next
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
    </header>
  );
}
