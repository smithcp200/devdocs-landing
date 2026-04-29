import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevDocs AI — Auto-generate documentation from your codebase",
  description:
    "Always-up-to-date documentation generated directly from your codebase. Works with any repo. Hosted for you.",
  openGraph: {
    title: "DevDocs AI — Auto-generate documentation from your codebase",
    description:
      "Always-up-to-date documentation generated directly from your codebase.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
