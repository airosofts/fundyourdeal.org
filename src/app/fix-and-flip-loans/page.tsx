import { DeeperLinks } from "@/components/DeeperLinks";
import { ProgramPage, programMetadata } from "@/components/templates/ProgramPage";
import { PROGRAM_CONTENT } from "@/content/programs";

const c = PROGRAM_CONTENT["fix-and-flip"];
export const metadata = programMetadata(c);

export default function Page() {
  return (
    <ProgramPage c={c}>
      <DeeperLinks program="fix-and-flip" />
    </ProgramPage>
  );
}
