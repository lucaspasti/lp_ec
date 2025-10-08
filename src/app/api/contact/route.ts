// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  // TODO: integrar com sua fila/email/CRM
  console.log("contact-submission", Object.fromEntries(data.entries()));
  return NextResponse.json({ ok: true });
}
