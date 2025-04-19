"use client";
import Link from "next/link";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import InfiniteScroll from "@/components/InfiniteScroll";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
  TableFooter,
} from "@/components/ui/table";
import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";

export const VideosSection = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <VideosSectionSuspense />
      </ErrorBoundary>
    </Suspense>
  );
};
const VideosSectionSuspense = () => {
  const [videos, query] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    },
  );
  return (
    <div>
      <div className={"border-y"}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={"pl-6 w-[510px]"}>Video</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className={"text-right"}>Views</TableHead>
              <TableHead className={"text-right"}>Comments</TableHead>
              <TableHead className={"text-right pr-6"}>Likes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {videos.pages
              .flatMap((page) => page.items)
              .map((video) => (
                <TableRow
                  key={video.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() =>
                    (window.location.href = `/studio/videos/${video.id}`)
                  }
                >
                  <TableCell>
                    <Link
                      href={`/studio/videos/${video.id}`}
                      className="hover:underline"
                    >
                      {video.title}
                    </Link>
                  </TableCell>
                  <TableCell>Visibility</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Views</TableCell>
                  <TableCell>Comments</TableCell>
                  <TableCell>Likes</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <InfiniteScroll
        isManual
        hasNextPage={query.hasNextPage}
        isFetchingNextPage={query.isFetchingNextPage}
        fetchNextPage={query.fetchNextPage}
      />
    </div>
  );
};
