import type { NextRequest } from "next/server";
import { EMAIL_RE } from "@/lib/leadSpec";
import { TABLES } from "@/lib/server/airobase";
import { handleInsert, str } from "@/lib/server/forms";

export async function POST(req: NextRequest) {
  return handleInsert(
    req,
    TABLES.rateAlerts,
    (b) => {
      const email = str(b.email, 200).toLowerCase();
      if (!EMAIL_RE.test(email)) return { errors: { email: "Enter a valid email." } };
      return { row: { email, source_page: str(b.sourcePage, 300) || null } };
    },
    // Signing up twice is fine — keep the first row.
    { onConflict: "email" }
  );
}
