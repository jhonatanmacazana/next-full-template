import type { LDClient as NodeClient } from "@launchdarkly/node-server-sdk";
import { getCookie } from "cookies-next";
import type { LDContext } from "launchdarkly-node-server-sdk";
import { cookies } from "next/headers";

import { env } from "@/env";

export type { LDClient as NodeClient } from "@launchdarkly/node-server-sdk";

const globalForLD = globalThis as unknown as {
  ldNodeClient: NodeClient | undefined;
};

export function getNodeClient() {
  return globalForLD.ldNodeClient;
}

export async function initNodeSdk() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const sdk = await import("@launchdarkly/node-server-sdk");
    const ldNodeClient = sdk.init(env.LAUNCHDARKLY_SDK_KEY ?? "");

    // HACK: save this globally so we can access it from the app
    globalForLD.ldNodeClient = ldNodeClient;

    try {
      await ldNodeClient.waitForInitialization({ timeout: 5 });
    } catch (e) {
      // Log and report errors here.
      // A non-initialized ldClient will be returned which
      // will use defaults for evaluation.

      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      console.log(`LaunchDarkly NodeClient init error: ${e}`);
    }
  }
}

export async function getServerContext() {
  let ldContext: LDContext;
  try {
    const clientContext = getCookie("ldcontext", { cookies });

    if (!clientContext) {
      throw new Error("Cookie not found");
    }

    console.log("Cookie found, using server context");
    const json = decodeURIComponent(clientContext);
    ldContext = JSON.parse(json) as LDContext;
  } catch {
    console.log("Cookie not available, using local context");

    ldContext = {
      kind: "user",
      key: "1",
    };
  }
  return ldContext;
}
