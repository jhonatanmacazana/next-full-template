// https://github.com/launchdarkly-labs/nextjs-ld-template
"use client";

import type { LDOptions } from "launchdarkly-js-client-sdk";
import type { LDContext } from "launchdarkly-js-sdk-common";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { use, useMemo, type ReactNode } from "react";

import { env } from "@/env";

export function LDProvider({
  children,
  context,
  options,
}: {
  children: ReactNode;
  context: LDContext;
  options: LDOptions;
}) {
  const Provider = useMemo(
    () =>
      asyncWithLDProvider({
        clientSideID: env.NEXT_PUBLIC_LD_CLIENT_SDK_KEY ?? "",
        context,
        options,
        timeout: 5,
      }),
    [context, options],
  );

  const LDClientProvider = use(Provider);

  return <LDClientProvider>{children}</LDClientProvider>;
}
