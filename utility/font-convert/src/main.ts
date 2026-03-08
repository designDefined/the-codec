import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { extname, isAbsolute, join, resolve } from "node:path";

import { config } from "dotenv";

config({ path: ".env.local" });

const woff2Compress = await import("wawoff2").then(m => m.compress);

function resolvePathFromEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is required`);
  }
  return isAbsolute(value) ? value : resolve(process.cwd(), value);
}

const inputDir = resolvePathFromEnv("SOURCE_PATH");
const outputDir = resolvePathFromEnv("TARGET_PATH");

// backup directory inside this package (src/backup/<timestamp>)
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const backupDir = join(process.cwd(), "src", "backup", timestamp);

try {
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }
  if (!existsSync(backupDir)) {
    mkdirSync(backupDir, { recursive: true });
  }

  const files = readdirSync(inputDir).filter((file: string) => {
    const ext = extname(file).toLowerCase();
    return ext === ".otf" || ext === ".ttf"; // handle OTF and TTF input
  });

  await Promise.all(
    files.map(async (file: string) => {
      const filePath = join(inputDir, file);
      const sourceBuffer = readFileSync(filePath);

      // backup source file
      writeFileSync(join(backupDir, file), sourceBuffer);

      const baseName = file.replace(/\.(otf|ttf)$/i, "");

      const ttfBuffer = sourceBuffer;

      // write TTF to output and backup
      const ttfOutPath = join(outputDir, `${baseName}.ttf`);
      writeFileSync(ttfOutPath, ttfBuffer);
      writeFileSync(join(backupDir, `${baseName}.ttf`), ttfBuffer);

      // TTF → WOFF2, write output and backup
      const woff2buf = await woff2Compress(ttfBuffer);
      const woff2OutPath = join(outputDir, `${baseName}.woff2`);
      writeFileSync(woff2OutPath, woff2buf);
      writeFileSync(join(backupDir, `${baseName}.woff2`), woff2buf);

      console.log(`Converted: ${file}`);
    }),
  );

  console.log("All conversions completed!");
} catch (error) {
  console.log(error);
  if (error instanceof Error) {
    console.error("Error during font conversion:", error);
  } else {
    console.error("Error during font conversion:", String(error));
  }
  if (existsSync(backupDir)) {
    rmSync(backupDir, { recursive: true });
  }
  process.exit(1);
}
