import { db } from '@/database';
import { videos } from '@/database/schema';
import { createTRPCRouter, protectedProcedure } from '@/trpc/init';

export const videosRouter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const { id: userId } = ctx.user;

    const video = await db.insert(videos).values({
      userId,
      title: 'untitled',

    }).returning();
    return {
      video: video,
    };

  }),
});

