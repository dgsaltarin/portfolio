"use client";
import Head from "next/head";
import Script from "next/script";
import Hero from "@/app/components/sections/Hero";
import NavigationSection from "./components/sections/Navigation";
import SocialLinks from "./components/sections/SocialLinks";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import About from "./components/sections/Resume";

export default function Home() {
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

  return (
    <>
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
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 flex">
        {/* Two-column layout for large screens */}
        <div className="lg:flex lg:justify-between lg:items-start">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 xl:px-10">
            <div>
              <Hero />
              <NavigationSection />
            </div>
            <div className="flex justify-start">
              <SocialLinks />
            </div>
          </header>
          <main
            id="content"
            className="flex flex-col pt-6 lg:pt-24 lg:w-1/2 lg:py-16 gap-4"
          >
            <About />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </>
  );
}
