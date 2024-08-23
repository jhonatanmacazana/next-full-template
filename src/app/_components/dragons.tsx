"use client";

import { useQuery } from "@apollo/client";

import { graphql } from "@/gql";

const DragonsQueryFromClient = graphql(`
  query DragonsWithType {
    dragons {
      id
      name
      type
    }
  }
`);

export function Dragons() {
  const dragonsQuery = useQuery(DragonsQueryFromClient);

  return (
    <div className="w-full max-w-xs">
      {dragonsQuery.data?.dragons?.map((d) => {
        if (!d) return null;
        return (
          <p key={d.name}>
            {d.name} - {d.type}
          </p>
        );
      })}
    </div>
  );
}
