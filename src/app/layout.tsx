import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

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
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

  return (
    <html lang="en">
      <Head>
        {/* Google Analytics */}
        {googleTagId && (
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          />
        )}
        {googleTagId && (
          <Script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleTagId}');
              `,
            }}
          />
        )}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
