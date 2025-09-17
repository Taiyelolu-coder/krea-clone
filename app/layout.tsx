import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krea AI Clone",
  description: "Krea AI styled page built with Next.js + TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
