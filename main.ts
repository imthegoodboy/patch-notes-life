// Real-Life Patch Notes entry: writes one comedy patch note to /output/entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised: drop the article for a terser register; the "fix" makes it worse, then adds a second sting.
const NOTE = "v3.2.1: Fixed bug where embarrassing memories from 2009 replayed at 2 AM. They now replay at 4 AM, in HD.";

const len = [...NOTE].length;
if (len < 1 || len > 160 || NOTE.trim() === '') throw new Error(`patch note length ${len} out of bounds`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), NOTE, 'utf8');
