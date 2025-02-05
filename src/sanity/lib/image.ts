import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "../env";

// Ensure projectId and dataset are not undefined
if (!projectId || !dataset) {
  throw new Error("Missing Sanity projectId or dataset. Check your env setup.");
}

// Create image builder instance
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: SanityImageSource) => {
  if (!source) return builder.image("").url(); // Prevent undefined errors
  return builder.image(source);
};
