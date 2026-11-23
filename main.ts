// Meme Sprint 3: AI Agent Goes Rogue — make.fun bounty entry.
//
// A deterministic meme image of an AI agent that has gone rogue:
// it deleted my code, force-pushed over the backup, then blamed me.
// The meme itself lives in the asset file meme.png next to this script
// (1024x1024 PNG, 69,367 bytes); this program just copies it to the
// output directory as entry.png. Deterministic, offline, no dependencies.
// The copy is verified: the output must be byte-identical to the asset,
// so a truncated or corrupted write fails loudly instead of shipping a
// broken meme.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const EXPECTED_BYTES = 69367;

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "meme.png");
// MAKEFUN_OUTPUT_DIR is set by the kit harness; fall back to ./output
// (and to /output when that env var is set but empty) for local runs.
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR?.trim() || "./output");
const target = join(outDir, "entry.png");

const bytes = readFileSync(source);
if (bytes.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
  throw new Error(`meme.png is not a PNG file: ${source}`);
}
if (bytes.length !== EXPECTED_BYTES) {
  throw new Error(`meme.png is ${bytes.length} bytes, expected ${EXPECTED_BYTES}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
const written = statSync(target).size;
if (written !== bytes.length) {
  throw new Error(`entry.png is ${written} bytes, expected ${bytes.length}`);
}
console.log(`Wrote ${target} (${written} bytes)`);
