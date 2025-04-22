import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Saltarin",
  description: "Personal website of Daniel Saltarin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "DEFAULT_ID";

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={googleTagId} />
    </html>
  );
}
