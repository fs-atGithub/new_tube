"use client";

import {
  BellRing,
  Loader2Icon,
  MessageCircleWarning,
  PlusIcon,
} from "lucide-react";
import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";

const StudioUploadModal = () => {
  const utils = trpc.useUtils();
  const create = trpc.videos.create.useMutation({
    onSuccess: async () => {
      toast.success("Video created", {
        duration: 5000,
        icon: <BellRing />,
      });
      await utils.studio.getMany.invalidate();
    },
    onError: (error) => {
      toast.error("", {
        description: error.message,
        duration: 5000,
        icon: <MessageCircleWarning />,
      });
    },
  });

  return (
    <Button
      variant={"secondary"}
      onClick={() => create.mutate()}
      disabled={create.isPending}
    >
      {create.isPending ? (
        <Loader2Icon className={"animate-spin"} />
      ) : (
        <PlusIcon />
      )}
      <span>Create</span>
    </Button>
  );
};
export default StudioUploadModal;
