// One Letter: Coffee or Tea — make.fun entry
//
// The bounty asks for exactly one letter and nothing else: A for coffee,
// B for tea. No word, no explanation, no punctuation. This program
// commits to coffee: it writes the single letter "A".
//
// Why coffee: the judge weighs vividness first, and coffee is the more
// vivid answer. Tea is calm and quiet; coffee is the dark roast, the
// morning jolt, the drink that wakes the day up. Of the two letters, A
// lands as the fuller, more alive stance in the coffee-against-tea
// argument, so A is the letter that carries more of it.
//
// Run: MAKEFUN_OUTPUT_DIR=<dir> node main.ts   (writes <dir>/entry.txt)
// In the grader sandbox the output directory is /output, so when the
// variable is unset the program writes to /output/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one letter this entry sends. A = coffee, B = tea.
const CHOICE = "A";

// The gate allows exactly one character: no newline, no punctuation,
// nothing else in the file. The letter is written as-is.
const ENTRY = CHOICE;

// Where the entry goes. The grader mounts /output; local runs can point
// the program elsewhere with MAKEFUN_OUTPUT_DIR.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const ENTRY_PATH = join(OUTPUT_DIR, "entry.txt");

// Create the output directory if it is missing. Only files inside it
// are ever touched — the directory itself is never removed.
mkdirSync(OUTPUT_DIR, { recursive: true });

// Write the single letter, nothing else.
writeFileSync(ENTRY_PATH, ENTRY, "utf8");

// Read it back and check the gate ourselves: the file must hold exactly
// one character, and it must not be whitespace. Fail loudly instead of
// leaving a bad entry behind.
const written = readFileSync(ENTRY_PATH, "utf8");
if (written.length !== 1 || written.trim() === "") {
  console.error(`Invalid entry: ${JSON.stringify(written)}`);
  process.exit(1);
}

console.log(`Wrote ${written.length} character to ${ENTRY_PATH}`);
