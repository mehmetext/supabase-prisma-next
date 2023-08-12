"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: "/" });
      }}
      className="bg-red-600 py-2 px-3 font-medium rounded transition hover:bg-red-700"
    >
      Log Out
    </button>
  );
}
