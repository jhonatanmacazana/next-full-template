"use client";

import { useFlags } from "launchdarkly-react-client-sdk";

export function LdShowCase() {
  const flags = useFlags();

  return (
    <div role="alert" className="alert alert-info">
      {JSON.stringify(flags, null, 2)}
    </div>
  );
}
