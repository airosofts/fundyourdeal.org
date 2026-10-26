import type { ProgramContent } from "../types";
import { bridge } from "./bridge";
import { brrrr } from "./brrrr";
import { cashOutRefinance } from "./cash-out-refinance";
import { construction } from "./construction";
import { dscr } from "./dscr";
import { fixAndFlip } from "./fix-and-flip";
import { hardMoney } from "./hard-money";
import { portfolio } from "./portfolio";
import { shortTermRental } from "./short-term-rental";

const ALL = [dscr, shortTermRental, fixAndFlip, hardMoney, bridge, brrrr, construction, portfolio, cashOutRefinance];

/** Program page copy by slug (slugs match PROGRAMS in lib/site.ts). */
export const PROGRAM_CONTENT: Record<string, ProgramContent> = Object.fromEntries(ALL.map((c) => [c.slug, c]));
