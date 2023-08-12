import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import getCurrentUser from "@/lib/getCurrentUser";
import Avatar from "./Avatar";
import LogoutButton from "./LogoutButton";

export default async function Header() {
  const user = await getCurrentUser();

  return (
    <header className="bg-orange-500 text-white py-5">
      <Container
        as="div"
        className="flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <Logo />
        <HeaderMenu user={user} />
        {user ? (
          <div className="flex items-center justify-center gap-4">
            <div className="flex gap-2 items-center justify-center">
              <Avatar src={user.image} alt={user.username} />
              {user.username}
            </div>
            <LogoutButton />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              href="/auth/login"
              className="bg-orange-600 py-2 px-3 font-medium rounded transition hover:bg-orange-700"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="bg-green-600 py-2 px-3 font-medium rounded transition hover:bg-green-700"
            >
              Register
            </Link>
          </div>
        )}
      </Container>
    </header>
  );
}
