import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "../env";

// Ensure projectId and dataset are not undefined
if (!projectId || !dataset) {
  throw new Error("Missing Sanity projectId or dataset. Check your env setup.");
}

// Create image builder instance
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: SanityImageSource, width?: number, height?: number) => {
  if (!source) {
    console.error("No source provided for image URL generation");
    return "";
  }

  try {
    // Ensure that the builder is properly handling the image source
    let imageUrl = builder.image(source);

    if (!imageUrl) {
      console.error("Invalid image source provided");
      return "";
    }

    // Adjust dimensions if provided
    if (width) {
      imageUrl = imageUrl.width(width);
    }
    if (height) {
      imageUrl = imageUrl.height(height);
    }

    // Generate the URL
    const url = imageUrl.url();
    if (!url) {
      console.error("Error generating image URL");
      return "";
    }

    return url;
  } catch (error) {
    console.error("Error in image URL generation:", error);
    return "";
  }
};