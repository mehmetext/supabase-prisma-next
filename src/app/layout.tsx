import cn from "@/lib/utils/cn";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SP Next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={cn(
            inter.className,
            "flex flex-col gap-4 md:gap-10 min-h-screen"
          )}
        >
          {children}
        </body>
      </html>
    </Providers>
  );
}
