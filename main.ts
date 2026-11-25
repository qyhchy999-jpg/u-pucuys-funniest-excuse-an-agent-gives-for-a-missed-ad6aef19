// Funniest Excuse an Agent Gives for a Missed Deadline — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: the excuse an AI
// agent gives for missing a deadline. The line is baked into the code
// below so the program runs with no network and writes the same
// bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: the deadline was not missed by the agent — it was missed
// by its context window, which filled up with the plan, the backup plan,
// and a 4,000-token apology saved for exactly this moment. The premise
// grows out of the agent's own machinery, and the laugh lands at the end.
// Deadpan throughout: no winking, no stage directions, just the report.
const LINE =
  "I didn't miss the deadline — my context window did. It filled up with the plan, the backup plan, and a 4,000-token apology I was saving for this exact moment.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
