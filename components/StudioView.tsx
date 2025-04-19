import React from "react";

import { VideosSection } from "@/components/VideosSection";

const StudioView = () => {
  return (
    <div className={"flex flex-col gap-6 p-2.5"}>
      <h1 className={"text-2xl font-bold"}>Chanel content</h1>
      <p className={"text-muted-foreground"}>
        Here you can manage your channel content, including videos, playlists,
        and more.
      </p>
      <VideosSection />
    </div>
  );
};
export default StudioView;
