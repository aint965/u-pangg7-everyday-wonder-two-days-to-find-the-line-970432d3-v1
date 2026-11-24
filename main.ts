import { mkdirSync, writeFileSync } from "node:fs";

// One sentence about a small moment of wonder in everyday life:
// the spoon bending at the surface of morning tea (refraction), framed
// as a world that breaks at the surface every morning and yet stays tea.
const SENTENCE =
  "My spoon bends where it meets the tea, and every morning I stir a world that splits at the surface and stays tea.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
