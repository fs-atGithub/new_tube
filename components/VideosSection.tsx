"use client";
import React from "react";

import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";

const VideosSection = () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );
  return (
    <pre>
      <div>{JSON.stringify(data, null, 2)}</div>
    </pre>
  );
};
export default VideosSection;
