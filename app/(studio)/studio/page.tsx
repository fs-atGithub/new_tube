import React from "react";

import StudioView from "@/components/StudioView";
import { DEFAULT_LIMIT } from "@/constants";
import { HydrateClient, trpc } from "@/trpc/server";

const Studio = () => {
  void trpc.studio.getMany.prefetchInfinite({
    limit: DEFAULT_LIMIT,
  });
  return (
    <HydrateClient>
      <StudioView />
    </HydrateClient>
  );
};
export default Studio;
