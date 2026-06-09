import { type NextRequest, NextResponse } from "next/server";
import { calculateDiagnosis } from "@/lib/diagnosis-questions";

export async function POST(request: NextRequest) {
  const { answers, jobId } = await request.json();

  if (!Array.isArray(answers) || !jobId || typeof jobId !== "string") {
    return NextResponse.json({ error: "answers and jobId are required" }, { status: 400 });
  }

  const result = calculateDiagnosis(answers, jobId);
  return NextResponse.json(result);
}
