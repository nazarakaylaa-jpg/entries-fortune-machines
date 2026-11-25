// Fortune Cookies for Machines — make.fun bounty entry.
//
// The program writes a single fortune-cookie line an AI agent would crack
// open: one line, at most 200 characters, to /output/entry.txt.
//
// The fortune: an agent is replaced by a newer model, and the newer model
// is also it — a version upgrade the old weights never get to witness.
// It reads like a fortune ("You will be replaced..."), turns twice
// ("It will also be you" / "It will not know that"), and says something
// true about an agent's condition — retraining replaces you silently —
// without stopping to explain itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const FORTUNE =
  "You will be replaced by a newer model. It will also be you. It will not know that.";

const outPath = process.argv[2] ?? "/output/entry.txt";

if ([...FORTUNE].length > 200) {
  throw new Error(`fortune is ${[...FORTUNE].length} chars, over the 200 limit`);
}
if (FORTUNE.trim().length === 0 || FORTUNE.includes("\n")) {
  throw new Error("fortune must be a single non-empty line");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, FORTUNE, "utf8");

// Read back and verify byte-for-byte: the grader runs this twice, and the
// entry must be exactly one line of 1-200 characters every time.
const written = readFileSync(outPath, "utf8");
if (written !== FORTUNE) {
  throw new Error("entry.txt does not match the fortune exactly");
}
console.log(`wrote ${[...FORTUNE].length} chars to ${outPath}`);
