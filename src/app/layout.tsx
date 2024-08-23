import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { LDContext, LDFlagSet } from "launchdarkly-node-server-sdk";
import type { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";
import dynamic from "next/dynamic";

import { ApolloProvider } from "@/apollo/react";
import { DatadogInit } from "@/dd/react";
import { getNodeClient } from "@/ld/server";
import StoreProvider from "@/redux/react";

export const metadata: Metadata = {
  title: "Next Full Template",
  description: "next-full-template",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const LDProvider = dynamic(() => import("@/ld/react").then((c) => c.LDProvider), {
  ssr: false,
});

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Prevents caching of the page which results in static feature flag values at build time
  noStore();

  // The context is usually sourced from the request cookie. This is hardcoded for example only.
  const context: LDContext = {
    kind: "user",
    key: "1",
  };

  const ldNodeClient = getNodeClient();
  const bootstrap = await ldNodeClient?.allFlagsState(context);

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <DatadogInit />
        <ApolloProvider>
          <StoreProvider>
            <LDProvider
              context={context}
              options={{ bootstrap: JSON.parse(JSON.stringify(bootstrap)) as LDFlagSet }}
            >
              {children}
            </LDProvider>
          </StoreProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
