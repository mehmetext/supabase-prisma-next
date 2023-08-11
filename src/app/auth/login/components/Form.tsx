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
    </>
  );
}
