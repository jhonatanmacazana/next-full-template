/**
 * This file is responsible for configuring and validating environment variables
 * in a Next.js application using the @t3-oss/env-nextjs package, which leverages zod for
 * schema validation. The purpose of this setup is to ensure that the application is correctly
 * configured with all necessary environment variables before it runs, providing type safety and
 * default values where applicable.
 */

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    AUTH0_SECRET: z.string().optional(),
    AUTH0_BASE_URL: z.string().optional(),
    AUTH0_ISSUER_BASE_URL: z.string().optional(),
    AUTH0_CLIENT_ID: z.string().optional(),
    AUTH0_CLIENT_SECRET: z.string().optional(),
  },

  client: {
    NEXT_PUBLIC_API_URL: z.string().url().default("https://example.com/api/graphql"),
    NEXT_PUBLIC_DATADOG_APPLICATION_ID: z.string().default("default-app-id"),
    NEXT_PUBLIC_DATADOG_CLIENT_TOKEN: z.string().default("default-client-token"),
    NEXT_PUBLIC_DATADOG_ENV: z.string().default("development"),
    NEXT_PUBLIC_DATADOG_SERVICE_NAME: z.string().default("default-service"),
    NEXT_PUBLIC_LD_CLIENT_SDK_KEY: z.string().optional(),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_DATADOG_APPLICATION_ID: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
    NEXT_PUBLIC_DATADOG_CLIENT_TOKEN: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
    NEXT_PUBLIC_DATADOG_ENV: process.env.NEXT_PUBLIC_DATADOG_ENV,
    NEXT_PUBLIC_DATADOG_SERVICE_NAME: process.env.NEXT_PUBLIC_DATADOG_SERVICE_NAME,
    NEXT_PUBLIC_LD_CLIENT_SDK_KEY: process.env.NEXT_PUBLIC_LD_CLIENT_SDK_KEY,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
