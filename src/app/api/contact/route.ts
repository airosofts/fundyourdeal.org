import type { NextRequest } from "next/server";
import { EMAIL_RE } from "@/lib/leadSpec";
import { TABLES } from "@/lib/server/airobase";
import { handleInsert, str } from "@/lib/server/forms";

const TOPICS = ["loan", "existing_request", "press", "other"];

export async function POST(req: NextRequest) {
  return handleInsert(req, TABLES.contact, (b) => {
    const e: Record<string, string> = {};
    const name = str(b.name, 200);
    const email = str(b.email, 200).toLowerCase();
    const message = str(b.message, 5000);
    if (!name) e.name = "Required.";
    if (!EMAIL_RE.test(email)) e.email = "Enter a valid email.";
    if (message.length < 10) e.message = "Tell us a little more.";
    if (Object.keys(e).length) return { errors: e };
    const topic = str(b.topic, 40);
    return { row: { name, email, phone: str(b.phone, 40) || null, topic: TOPICS.includes(topic) ? topic : "other", message } };
  });
}
