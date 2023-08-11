"use client";

import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="outline-none border rounded-md p-2 transition focus:border-orange-500"
      />
      <input
        type="email"
        name="email"
        placeholder="E-Mail"
        className="outline-none border rounded-md p-2 transition focus:border-orange-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="outline-none border rounded-md p-2 transition focus:border-orange-500"
      />
      <input
        type="password"
        name="password2"
        placeholder="Password Again"
        className="outline-none border rounded-md p-2 transition focus:border-orange-500"
      />
      <button className="bg-green-600 py-2 px-3 font-medium rounded transition hover:bg-green-700 text-white">
        Register
      </button>
    </>
  );
}
