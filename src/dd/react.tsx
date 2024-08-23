"use client";

import { datadogRum } from "@datadog/browser-rum";

import { env } from "../env";

datadogRum.init({
  applicationId: env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
  clientToken: env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
  site: "datadoghq.com",
  service: env.NEXT_PUBLIC_DATADOG_SERVICE_NAME,
  env: env.NEXT_PUBLIC_DATADOG_ENV,
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
  // Specify URLs to propagate trace headers for connection between RUM and backend trace
  allowedTracingUrls: [{ match: "https://example.com/api/", propagatorTypes: ["tracecontext"] }],
});

export function DatadogInit() {
  // Render nothing - this component is only included so that the init code
  // above will run client-side
  return null;
}
