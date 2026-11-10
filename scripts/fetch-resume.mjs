// Copies the resume Google Doc (single source of truth) to public/resume.pdf so
// the site can render it same-origin with PDF.js. If Google is unreachable the
// last committed copy is kept; the build only fails when no copy exists at all.
import { access, mkdir, writeFile } from "node:fs/promises";

const DOC_ID = "17e0dTqfSZH0syi9xp2PPE92C-wao8rFMy7IWRJZw0mo";
const url = `https://docs.google.com/document/d/${DOC_ID}/export?format=pdf`;
const target = new URL("../public/resume.pdf", import.meta.url);

try {
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.subarray(0, 5).toString() !== "%PDF-") throw new Error("response is not a PDF");
  await mkdir(new URL("./", target), { recursive: true });
  await writeFile(target, bytes);
  console.log(`resume.pdf updated (${bytes.length} bytes)`);
} catch (error) {
  try {
    await access(target);
    console.warn(`resume.pdf not refreshed (${error.message}); keeping the existing copy`);
  } catch {
    console.error(`resume.pdf unavailable and no fallback copy exists: ${error.message}`);
    process.exit(1);
  }
}
