'use client';
import React from 'react';


import { trpc } from '@/trpc/client';

const VideosSection = () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery({
    limit: 5,
  }, {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
  return (
    <div>{JSON.stringify(data)}</div>
  );
};
export default VideosSection;
