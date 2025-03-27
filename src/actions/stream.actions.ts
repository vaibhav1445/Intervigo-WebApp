"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

export const streamTokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error("User not authenticated");

  // Ensure the API keys are present
  if (!process.env.NEXT_PUBLIC_STREAM_API_KEY || !process.env.STREAM_SECRET_KEY) {
    throw new Error("Stream API keys are missing in environment variables");
  }

  // Initialize Stream client (only on the server)
  const streamClient = new StreamClient(
    process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    process.env.STREAM_SECRET_KEY!
  );

  // Generate and return a user token
  
  const token = streamClient.generateUserToken({ user_id: user.id });
  return token;
};
