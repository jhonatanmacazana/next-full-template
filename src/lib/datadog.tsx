"use client";

import { datadogRum } from "@datadog/browser-rum";

import { env } from "../env";

let isDatadogInitialized = false;

export function DatadogInit() {
  if (!isDatadogInitialized) {
    datadogRum.init({
      applicationId: env.NEXT_PUBLIC_DATADOG_APPLICATION_ID,
      clientToken: env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN,
      site: "datadoghq.com",
      service: env.NEXT_PUBLIC_DATADOG_SERVICE_NAME,
      env: env.NEXT_PUBLIC_DATADOG_ENV,
      version: "1.0.0",
      sessionSampleRate: 100,
      sessionReplaySampleRate: 20,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: "mask-user-input",
      allowedTracingUrls: [
        { match: "https://example.com/api/", propagatorTypes: ["tracecontext"] },
      ],
    });

    datadogRum.startSessionReplayRecording();
    isDatadogInitialized = true;
  }

  // Render nothing - this component is only included to run the init code
  return null;
}
