import { Metadata } from "next";
import Link from "next/link";
import Form from "./components/Form";

export const metadata: Metadata = {
  title: "Login - SP Next",
};

export default function Login() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-medium text-center text-xl">LOGIN</h2>
      <Form />
      <p className="self-center">or</p>
      <Link
        className="flex items-center justify-center bg-green-600 py-2 px-3 font-medium rounded transition hover:bg-green-700 text-white"
        href="/auth/register"
      >
        Register
      </Link>
    </div>
  );
}
