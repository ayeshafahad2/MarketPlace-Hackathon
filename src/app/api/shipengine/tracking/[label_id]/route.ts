import { shipengine } from "@/lib/helper/shipengine";
import { NextRequest, NextResponse } from "next/server";

// Define route parameters correctly
export async function GET(
  req: NextRequest,
  context: { params: { label_id: string } } // Properly typed context
): Promise<NextResponse> {
  // Accessing the label_id from context
  const label_id = context.params.label_id;

  // Handle missing label_id
  if (!label_id) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // Tracking using label ID
    const label = await shipengine.trackUsingLabelId(label_id);
    
    return NextResponse.json(label, { status: 200 });
  } catch (error) {
    console.error("Error fetching label:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

// Ensure there is no default export
