import Link from "next/link";
import Form from "./components/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - SP Next",
};

export default function Register() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-medium text-center text-xl">REGISTER</h2>
      <Form />
      <p className="self-center">or</p>
      <Link
        href="/auth/login"
        className="flex items-center justify-center bg-orange-600 py-2 px-3 font-medium rounded transition hover:bg-orange-700 text-white"
      >
        Login
      </Link>
    </div>
  );
}
