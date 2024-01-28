import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Polyglot",
  description: "Your passport to global communication!",
  openGraph: {
    title: "Polyglot",
    description: "Your passport to global communication!",
  },
  twitter: {
    title: "Polyglot",
    description: "Your passport to global communication!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + "box-border m-auto"}>{children}</body>
    </html>
  );
}
