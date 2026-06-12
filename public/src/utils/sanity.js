import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-06-11", // Uses the current layout runtime version API
  useCdn: true, // Controls fast edge caching for production asset speed
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
