import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const toDataPath = (p: string) => {
  if (!p.startsWith("/data")) throw new Error("Invalid path");
  return path.resolve(__dirname, `.${p}`);
};

export const createDataHandler = () => {
  const read = <T>(url: string) => readFile(toDataPath(url), "utf-8").then(JSON.parse) as T;
  const write = <T>(url: string, data: T) => writeFile(toDataPath(url), JSON.stringify(data));
  return { read, write };
};
