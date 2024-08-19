import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },

  client: {
    // "https://example.com/api/graphql"
    NEXT_PUBLIC_API_URL: z.string().url(),

    NEXT_PUBLIC_DATADOG_APPLICATION_ID: z.string(),
    NEXT_PUBLIC_DATADOG_CLIENT_TOKEN: z.string(),
    NEXT_PUBLIC_DATADOG_ENV: z.string(),
    NEXT_PUBLIC_DATADOG_SERVICE_NAME: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,

    NEXT_PUBLIC_DATADOG_APPLICATION_ID: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
    NEXT_PUBLIC_DATADOG_CLIENT_TOKEN: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
    NEXT_PUBLIC_DATADOG_ENV: process.env.NEXT_PUBLIC_DATADOG_ENV,
    NEXT_PUBLIC_DATADOG_SERVICE_NAME: process.env.NEXT_PUBLIC_DATADOG_SERVICE_NAME,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
