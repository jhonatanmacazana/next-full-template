import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { ApolloProvider } from "@/apollo/react";
import { DatadogInit } from "@/dd/react";
import StoreProvider from "@/redux/react";

export const metadata: Metadata = {
  title: "Next Full Template",
  description: "next-full-template",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <DatadogInit />
        <ApolloProvider>
          <StoreProvider>{children}</StoreProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
