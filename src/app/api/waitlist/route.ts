import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email: string | undefined = body.email?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    if (!supabase) {
      // Fallback: log to console when Supabase is not configured
      console.log(`[waitlist] ${email} signed up (Supabase not configured)`);
      return NextResponse.json({ success: true });
    }

    const { error } = await supabase
      .from("waitlist")
      .insert({ email });

    if (error) {
      // Duplicate email (unique constraint)
      if (error.code === "23505") {
        return NextResponse.json({ success: true });
      }
      console.error("[waitlist] Supabase error:", error);
      return NextResponse.json(
        { error: "Could not save your email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
