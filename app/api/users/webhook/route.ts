import { WebhookEvent } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { Webhook } from "svix";

import { db } from "@/database";
import { users } from "@/database/schema";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;
  if (!SIGNING_SECRET) {
    throw new Error("Missing Clerk Webhook Signing Secret");
  }

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing Svix headers", { status: 400 });
  }

  const body = await req.text(); // avoid double parsing
  const wh = new Webhook(SIGNING_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Webhook verification failed", { status: 400 });
  }

  const { type: eventType, data } = evt;

  switch (eventType) {
    case "user.created":
      await db.insert(users).values({
        clerkId: data.id,
        name: `${data.first_name} ${data.last_name}`,
        imageUrl: data.image_url,
      });
      break;

    case "user.updated":
      await db
        .update(users)
        .set({
          name: `${data.first_name} ${data.last_name}`,
          imageUrl: data.image_url,
        })
        .where(eq(users.clerkId, data.id));
      break;

    case "user.deleted":
      if (!data.id) {
        return new Response("Missing user ID in deletion event", {
          status: 400,
        });
      }
      await db.delete(users).where(eq(users.clerkId, data.id));
      break;
  }

  return new Response("Webhook received", { status: 200 });
}
