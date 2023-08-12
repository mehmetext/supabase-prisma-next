import Logo from "@/components/Logo";
import React from "react";

export default function AppLoading() {
  return (
    <div className="bg-orange-500 h-screen w-screen flex items-center justify-center text-white flex-col gap-2">
      <Logo />
      <p className="text-lg">Loading...</p>
    </div>
  );
}
