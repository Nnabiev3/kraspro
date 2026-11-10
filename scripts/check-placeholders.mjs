import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const roots = ["data", "app", "components"];
const extensions = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".md", ".mdx"]);
const findings = [];

async function scan(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }
  for (const entry of entries) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await scan(filename);
    } else if (entry.isFile() && extensions.has(path.extname(entry.name))) {
      const lines = (await readFile(filename, "utf8")).split(/\r?\n/);
      lines.forEach((line, index) => {
        if (line.includes("TODO_OWNER:") || /\bisPlaceholder["']?\s*:\s*true\b/.test(line)) {
          findings.push(`${filename}:${index + 1}: ${line.trim()}`);
        }
      });
    }
  }
}

try {
  for (const root of roots) await scan(root);
  console.warn("\nOWNER MUST CONFIRM BEFORE LAUNCH:");
  for (const claim of ["Maryland license", "insurance", "no-commission sales", "photo evidence before pricing", "itemized written quotes", "financing partner, terms and disclosures", "service areas"]) {
    console.warn(`- [ ] Confirm ${claim}`);
  }
  console.warn("\nPLACEHOLDERS TO REVIEW:");
  if (findings.length) findings.forEach((finding) => console.warn(`- [ ] ${finding}`));
  else console.warn("- None found in the files created so far; check again before launch.");
  console.warn("This is a warning and does not block the build.\n");
} catch (error) {
  console.error("Placeholder scan failed:", error);
  process.exitCode = 1;
}
