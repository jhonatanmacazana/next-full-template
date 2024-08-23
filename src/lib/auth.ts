import { env } from "@/env";

export const authParams = {
  authorizationParams: {
    audience: env.NEXT_PUBLIC_API_URL,
    scope: "openid profile email offline_access",
  },
};
