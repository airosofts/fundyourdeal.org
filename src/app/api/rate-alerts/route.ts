import type { NextRequest } from "next/server";
import { EMAIL_RE, SITE_KEY } from "@/lib/leadSpec";
import { TABLES } from "@/lib/server/airobase";
import { handleInsert, str } from "@/lib/server/forms";

// Email is unique across both sites. A repeat sign-up leaves the original row
// alone, including its site. A new row gets `site` in a best-effort follow-up
// (the column is from the admin portal's sql/003_multi_site.sql); if that
// fails, the sign-up is still saved, under the 'gablefunding' default.
export async function POST(req: NextRequest) {
  return handleInsert(
    req,
    TABLES.rateAlerts,
    (b) => {
      const email = str(b.email, 200).toLowerCase();
      if (!EMAIL_RE.test(email)) return { errors: { email: "That email doesn't look right." } };
      return { row: { email, source_page: str(b.sourcePage, 300) || null } };
    },
    { onConflict: "email", followUp: { columns: { site: SITE_KEY }, sql: "admin portal sql/003_multi_site.sql" } }
  );
}
