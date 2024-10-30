import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bootcamp Sales Page",
  description: "An app where you can find bootcamps and enhance your talents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(plusJakarta.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
