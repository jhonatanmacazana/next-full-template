import type { ResultOf } from "@graphql-typed-document-node/core";
import Link from "next/link";

import { query } from "@/apollo/server";
import { Dragons } from "@/app/_components/dragons";
import { LdShowCase } from "@/app/_components/ld-showcase";
import { graphql } from "@/gql";

import { Counter } from "./_components/counter";

const DragonsQueryFromServer = graphql(`
  query Dragons {
    dragons {
      name
      active
    }
  }
`);

export default async function Home() {
  const dragonsQuery = await query<ResultOf<typeof DragonsQueryFromServer>>({
    query: DragonsQueryFromServer,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          next-full-template
        </h1>

        <Link href="/about">About</Link>

        <div className="flex flex-col items-center gap-2">
          {dragonsQuery.data
            ? dragonsQuery.data.dragons?.map((d) => {
                if (!d) return null;
                return (
                  <p key={d.name}>
                    {d.name} - {d.active ? "active" : "inactive"}
                  </p>
                );
              })
            : "Loading Apollo query..."}
        </div>

        <Dragons />
        <Counter />
        <LdShowCase />
      </div>
    </main>
  );
}
