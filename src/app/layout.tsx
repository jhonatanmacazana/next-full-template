import "@/styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { ApolloProvider } from "@/apollo/react";
import { DatadogInit } from "@/lib/datadog";
import StoreProvider from "@/redux/react";

export const metadata: Metadata = {
  title: "Next Full Template",
  description: "next-full-template",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const LDProvider = dynamic(() => import("@/lib/launch-darkly").then((c) => c.LDProvider), {
  ssr: false,
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <DatadogInit />
        <UserProvider loginUrl="loginUrl">
          <ApolloProvider>
            <StoreProvider>
              <LDProvider>{children}</LDProvider>
            </StoreProvider>
          </ApolloProvider>
        </UserProvider>
      </body>
    </html>
  );
}
