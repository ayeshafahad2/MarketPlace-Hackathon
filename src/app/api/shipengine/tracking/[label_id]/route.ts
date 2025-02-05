import { shipengine } from "@/lib/helper/shipengine";
import { NextRequest, NextResponse } from "next/server";

// Define the context to match Next.js expectations
interface RouteParams {
  params: Promise<{ label_id: string }>; // ✅ Treating params as a Promise
}

export async function GET(
  req: NextRequest,
  context: RouteParams // ✅ Context parameter as a RouteParams type
): Promise<NextResponse> {
  try {
    // ✅ Awaiting the params since it's treated as a Promise
    const { label_id } = await context.params;

    if (!label_id) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Fetch tracking information using ShipEngine
    const label = await shipengine.trackUsingLabelId(label_id);

    return NextResponse.json(label, { status: 200 });
  } catch (error) {
    console.error("Error tracking label:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
