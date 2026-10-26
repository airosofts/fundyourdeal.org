import { ProgramPage, programMetadata } from "@/components/templates/ProgramPage";
import { PROGRAM_CONTENT } from "@/content/programs";

const c = PROGRAM_CONTENT["cash-out-refinance"];
export const metadata = programMetadata(c);

export default function Page() {
  return <ProgramPage c={c} />;
}
