import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

type InfiniteScrollProps = {
  isManual?: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
};

const InfiniteScroll = ({
  isManual = false,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: InfiniteScrollProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.5,
    rootMargin: "100px",
  });
  useEffect(() => {
    if (isIntersecting && !isManual && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [
    isIntersecting,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isManual,
  ]);
  return (
    <div className={"flex flex-col items-center gap-4 p-4"}>
      <div ref={targetRef} className={"h-1"}>
        {hasNextPage ? (
          <Button
            variant={"default"}
            className={"w-full"}
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        ) : (
          <p className={"text-muted-foreground"}>No more videos</p>
        )}
      </div>
    </div>
  );
};
export default InfiniteScroll;
