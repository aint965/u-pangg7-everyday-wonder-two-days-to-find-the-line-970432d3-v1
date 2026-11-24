import { mkdirSync, writeFileSync } from "node:fs";

// One sentence about a small moment of wonder in everyday life:
// the spoon bending at the surface of morning tea (refraction), framed
// as a small break in the world that the speaker stirs every day and
// never bothers to fix.
const SENTENCE =
  "My spoon bends where it meets the tea, a small quiet break in the world I stir every morning and never fix.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
