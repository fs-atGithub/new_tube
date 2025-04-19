"use client";

import { PlusIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";

const StudioUploadModal = () => {
  const utils = trpc.useUtils();
  const create = trpc.videos.create.useMutation();
  return (
    <Button variant={"secondary"} onClick={() => create.mutate()}>
      <PlusIcon />
      <span>Create</span>
    </Button>
  );
};
export default StudioUploadModal;
