import { db } from "@/database";
import { videos } from "@/database/schema";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const videosRouter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    try {
      const { id: userId } = ctx.user;

      const [video] = await db
        .insert(videos)
        .values({
          userId,
          title: "untitled2",
        })
        .returning();

      return {
        video,
      };
    } catch (error) {
      console.error("❌ Error creating video:", error);
      throw new Error("Failed to create video.");
    }
  }),
});
