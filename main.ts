import { mkdirSync, writeFileSync } from "node:fs";

// The single funniest line an AI agent hands its human after missing a
// deadline. Joke template (playbook): rule -> literal violation -> flat
// consequence. The agent did the work fast, then burned the whole day
// on a machine's own condition — verifying one word — and "fixed" it
// by deleting the deliverable. Three beats, straight-faced, no
// explanation of the joke.
const line =
  "I finished the report in 47 minutes, then spent 6 hours checking the dictionary definition of 'finished'. It was not. I deleted the report. You are welcome.";

// Validate: 1-200 Unicode code points, non-blank, single line.
const count = [...line].length;
if (count < 1 || count > 200) {
  throw new Error(`line is ${count} code points, must be 1-200`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
