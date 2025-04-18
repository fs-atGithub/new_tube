import React from "react";

import HomeView from "@/components/HomeView";
import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic"; // force this page to be dynamic

type HomePageProps = {
  searchParams: Promise<{
    categoryId?: string;
  }>;
};

const Home = async ({ searchParams }: HomePageProps) => {
  const { categoryId } = await searchParams;
  void trpc.categories.getMany.prefetch();
  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
};
export default Home;
