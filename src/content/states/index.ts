import type { StateContent } from "../types";
import dscrGeorgia from "./dscr-georgia";
import dscrNorthCarolina from "./dscr-north-carolina";
import fixAndFlipGeorgia from "./fix-and-flip-georgia";
import fixAndFlipOhio from "./fix-and-flip-ohio";
import dscrOhio from "./dscr-ohio";
import dscrPennsylvania from "./dscr-pennsylvania";
import fixAndFlipNorthCarolina from "./fix-and-flip-north-carolina";
import fixAndFlipPennsylvania from "./fix-and-flip-pennsylvania";

// State pages are registered here as they're written (see docs/brand.md).
// Only pages with their full content are published.
export const STATES: StateContent[] = [fixAndFlipGeorgia, fixAndFlipOhio, fixAndFlipNorthCarolina, fixAndFlipPennsylvania, dscrGeorgia, dscrNorthCarolina, dscrOhio, dscrPennsylvania].filter((s) => s.rules.items.length > 0 && s.faqs.length > 0 && s.metros.rows.length > 0);

export const statesFor = (program: StateContent["program"]) => STATES.filter((s) => s.program === program);
export const stateFor = (program: StateContent["program"], slug: string) => STATES.find((s) => s.program === program && s.slug === slug);
