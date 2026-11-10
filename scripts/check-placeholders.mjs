import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const roots = ["data", "app", "components"];
const extensions = new Set([
  ".ts", ".tsx", ".mts", ".cts", ".js", ".jsx", ".mjs", ".cjs",
  ".json", ".md", ".mdx", ".css", ".html", ".svg", ".txt", ".yaml", ".yml",
]);
const ownerDetails = [];
const placeholderImages = [];
const confirmations = [
  "Maryland home improvement license and service limits",
  "Insurance coverage",
  "No-commission sales",
  "Photo evidence before pricing",
  "Itemized written quotes",
  "Job site cleanup",
  "Financing partner, terms and disclosures",
  "Service areas",
  "Privacy policy",
  "Quote delivery and handling of customer data",
];

async function scan(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  entries.sort((first, second) => first.name.localeCompare(second.name, "en"));

  for (const entry of entries) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await scan(filename);
    } else if (entry.isFile() && extensions.has(path.extname(entry.name).toLowerCase())) {
      const contents = await readFile(filename, "utf8");
      const relativePath = path.relative(projectRoot, filename).split(path.sep).join("/");
      const location = index => `${relativePath}:${contents.slice(0, index).split("\n").length}`;

      for (const match of contents.matchAll(/TODO_OWNER:[^"'\`\r\n]*/g)) {
        ownerDetails.push(`${location(match.index)} — ${match[0].trim()}`);
      }
      for (const match of contents.matchAll(/\bisPlaceholder["']?\s*:\s*true\b/g)) {
        placeholderImages.push(`${location(match.index)} — replace the image and clear isPlaceholder`);
      }
    }
  }
}

function printChecklist(title, entries) {
  console.warn(`\n${title}`);
  if (entries.length === 0) console.warn("- None found.");
  for (const entry of entries) console.warn(`- [ ] ${entry}`);
}

try {
  for (const root of roots) await scan(path.join(projectRoot, root));
  printChecklist("OWNER MUST CONFIRM BEFORE LAUNCH:", confirmations);
  printChecklist("OWNER DETAILS TO COMPLETE:", ownerDetails);
  printChecklist("PLACEHOLDER IMAGES TO REPLACE:", placeholderImages);
  console.warn("This is a warning and does not block the build.\n");
} catch (error) {
  console.error("Placeholder scan failed:", error);
  process.exitCode = 1;
}
