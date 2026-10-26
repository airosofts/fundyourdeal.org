// Flags text copied from the Gable Funding site: any run of 9 words in the
// given files' prose (string literals and JSX text) that also appears in
// Gable's source. Usage: node scripts/check-overlap.mjs <file> [file…]
// Set GABLE_SRC to point somewhere else. Exit code 1 when anything matches.
import fs from "node:fs";
import path from "node:path";

const GABLE_SRC = process.env.GABLE_SRC || "/Users/hf/Documents/gable-funding/src";
const N = 9;

/** Prose fragments in a TS/TSX file: string literals and JSX text, minus class names and code. */
function prose(code) {
  const out = [];
  const take = (s) => {
    const words = s.split(/\s+/).filter(Boolean);
    if (words.length < 6) return;
    const codey = words.filter((w) => /[-:/[\]{}=]|^[a-z]+[A-Z]/.test(w) && !/[a-z]-[a-z]/i.test(w.replace(/[^a-z-]/gi, "")) === false).length;
    if (/className|^\s*(flex|grid|text-|bg-|px-|py-)/.test(s) || codey / words.length > 0.4) return;
    out.push(s);
  };
  for (const m of code.matchAll(/"((?:[^"\\\n]|\\.){25,})"/g)) take(m[1]);
  for (const m of code.matchAll(/`([^`]{25,})`/g)) take(m[1].replace(/\$\{[^}]*\}/g, " "));
  for (const m of code.matchAll(/>([^<>{}]{25,})</g)) take(m[1]);
  return out.join(" \n ");
}
const words = (s) =>
  s
    .toLowerCase()
    .replace(/&apos;|&#x27;|’/g, "'")
    .replace(/[“”]/g, '"')
    .split(/[^a-z0-9$%.']+/)
    .filter(Boolean);
function shingles(text) {
  const set = new Map();
  for (const frag of text.split("\n")) {
    const w = words(frag);
    for (let i = 0; i + N <= w.length; i++) set.set(w.slice(i, i + N).join(" "), true);
  }
  return set;
}
function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, files);
    else if (/\.(ts|tsx)$/.test(e.name)) files.push(p);
  }
  return files;
}

const gable = new Map();
for (const f of walk(GABLE_SRC)) for (const k of shingles(prose(fs.readFileSync(f, "utf8"))).keys()) gable.set(k, f.replace(GABLE_SRC + "/", ""));

const targets = process.argv.slice(2);
if (!targets.length) {
  console.error("Usage: node scripts/check-overlap.mjs <file> [file…]");
  process.exit(2);
}
let total = 0;
for (const t of targets) {
  const hits = [];
  for (const k of shingles(prose(fs.readFileSync(t, "utf8"))).keys()) if (gable.has(k)) hits.push([k, gable.get(k)]);
  total += hits.length;
  console.log(`${t}: ${hits.length ? `${hits.length} overlapping 9-word run(s)` : "no overlap with Gable"}`);
  for (const [k, src] of hits.slice(0, 40)) console.log(`   "${k}"  ← gable ${src}`);
  if (hits.length > 40) console.log(`   …and ${hits.length - 40} more`);
}
process.exit(total ? 1 : 0);
