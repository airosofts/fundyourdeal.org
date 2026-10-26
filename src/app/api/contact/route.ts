import type { NextRequest } from "next/server";
import { EMAIL_RE, SITE_KEY } from "@/lib/leadSpec";
import { TABLES } from "@/lib/server/airobase";
import { handleInsert, str } from "@/lib/server/forms";

const TOPICS = ["loan", "existing_request", "press", "other"];

// The message is saved first. `site` follows in a separate best-effort update,
// because the column comes from the admin portal's sql/003_multi_site.sql;
// if that update fails, the message is still kept, under the 'gablefunding' default.
export async function POST(req: NextRequest) {
  return handleInsert(
    req,
    TABLES.contact,
    (b) => {
      const e: Record<string, string> = {};
      const name = str(b.name, 200);
      const email = str(b.email, 200).toLowerCase();
      const message = str(b.message, 5000);
      if (!name) e.name = "Add your name.";
      if (!EMAIL_RE.test(email)) e.email = "That email doesn't look right.";
      if (message.length < 10) e.message = "Add a little more detail so we can help.";
      if (Object.keys(e).length) return { errors: e };
      const topic = str(b.topic, 40);
      return { row: { name, email, phone: str(b.phone, 40) || null, topic: TOPICS.includes(topic) ? topic : "other", message } };
    },
    { followUp: { columns: { site: SITE_KEY }, sql: "admin portal sql/003_multi_site.sql" } }
  );
}
