// app/layout.tsx
import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Script from "next/script";
import LegacyScriptReloader from "@/components/LegacyScriptReloader";
import NavbarFooterObserver from "@/components/NavbarFooterObserver";

export const metadata: Metadata = {
  title: "Jokula - Design Agency",
  description: "We craft brands, interfaces and experiences that people love",
};

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-wf-domain="www.jokula.com"
      data-wf-page="6599c0ad1df5a8f2566aa279"
      data-wf-site="6599c0ad1df5a8f2566aa26f"
      className="w-mod-js w-mod-ix"
      style={
        {
          // from the original <html style="--colors--surface: rgba(204,211,218,1);">
          "--colors--surface": "rgba(204, 211, 218, 1)",
        } as React.CSSProperties
      }
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="We craft brands, interfaces and experiences that people love"
        />
        <meta property="og:title" content="Jokula - Design Agency" />
        <meta
          property="og:description"
          content="We craft brands, interfaces and experiences that people love"
        />
        <meta
          property="og:image"
          content="images/68cc251cab460060c54eb9ae_Opengraph%20jokula.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content="Jokula - Design Agency" />
        <meta
          property="twitter:description"
          content="We craft brands, interfaces and experiences that people love"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        {/* The main Jokula CSS + your tweaks */}
        <link
          href="/css/js-exceptional-site-bde31d.shared.6d7f5a206.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="/css/overrides.css" rel="stylesheet" type="text/css" />
      </head>

      {/* IMPORTANT: just use "body" – don’t add extra font classes */}
      <body className="body" suppressHydrationWarning>
        {children}

        {/* Original JS bundles from Jokula */}
        <Script
          src="/js/jquery-3.5.1.min.dc5e7f18c8.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/js-exceptional-site-bde31d.schunk.57d5559d2f0cd9f8.js"
          strategy="lazyOnload"
        />
        <Script
          src="/js/js-exceptional-site-bde31d.schunk.520e363407729244.js"
          strategy="lazyOnload"
        />
        <Script
          src="/js/js-exceptional-site-bde31d.999f510c.f55a2d3d60dafd19.js"
          strategy="lazyOnload"
        />

        {/* Your helper to reload Webflow / legacy scripts on route changes */}
        <LegacyScriptReloader />
        <NavbarFooterObserver />
      </body>
    </html>
  );
}

