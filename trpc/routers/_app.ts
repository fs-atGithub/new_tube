import { categoriesRouter } from "@/lib/server/categories/procedures";
import { studioRouter } from "@/lib/server/studio/procedures";
import { videosRouter } from "@/lib/server/videos/procedures";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: videosRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
