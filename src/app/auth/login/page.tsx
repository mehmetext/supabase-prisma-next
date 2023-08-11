"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-medium text-center text-xl">LOGIN</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="outline-none border rounded-md p-2 transition focus:border-orange-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="outline-none border rounded-md p-2 transition focus:border-orange-500"
      />
      <button
        onClick={() => {
          router.replace("/");
        }}
        className="bg-orange-600 py-2 px-3 font-medium rounded transition hover:bg-orange-700 text-white"
      >
        Login
      </button>
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
