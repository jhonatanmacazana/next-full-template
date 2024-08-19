import type { CodegenConfig } from "@graphql-codegen/cli";

import { env } from "./src/env";

const config: CodegenConfig = {
  schema: {
    [env.NEXT_PUBLIC_API_URL]: {
      headers: {
        // add if needed
        // Authorization: `Bearer ${env.NEXT_PUBLIC_API_TOKEN}`,
      },
    },
  },
  ignoreNoDocuments: true,
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/gql/": {
      preset: "client",
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
