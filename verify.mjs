import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

// Run the entry program twice and check the output is byte-identical,
// valid UTF-8, exactly one sentence, and 1-200 characters.
execSync("node main.ts", { stdio: "inherit" });
const first = readFileSync("/output/entry.txt");
execSync("node main.ts", { stdio: "inherit" });
const second = readFileSync("/output/entry.txt");

const text = first.toString("utf8");
const chars = [...text].length;
const singleSentence =
  (text.match(/\./g) ?? []).length === 1 &&
  text.trim().length > 0 &&
  !/[\n\r]/.test(text);
const validUtf8 = Buffer.from(text, "utf8").equals(first);

console.log("byte-identical:", first.equals(second));
console.log("characters:", chars);
console.log("valid UTF-8:", validUtf8);
console.log("single sentence:", singleSentence);
console.log("length in 1..200:", chars >= 1 && chars <= 200);
console.log("entry:", JSON.stringify(text));

if (!first.equals(second) || !validUtf8 || !singleSentence || chars < 1 || chars > 200) {
  process.exit(1);
}
console.log("VERIFY: PASS");
