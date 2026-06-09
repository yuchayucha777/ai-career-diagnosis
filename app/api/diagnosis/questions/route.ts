import { type NextRequest, NextResponse } from "next/server";
import { getQuestions } from "@/lib/diagnosis-questions";

export async function POST(request: NextRequest) {
  const { jobId } = await request.json();

  if (!jobId || typeof jobId !== "string") {
    return NextResponse.json({ error: "jobId is required" }, { status: 400 });
  }

  const questions = getQuestions(jobId);
  return NextResponse.json({ questions });
}
