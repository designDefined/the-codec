import { readdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const toDataPath = (p: string) => {
  // if (!p.startsWith("/data")) throw new Error("Invalid path");
  return path.resolve(__dirname, p.startsWith("/data") ? `.${p}` : `./data${p}`);
};

export const createDataHandler = () => {
  const read = <T>(url: string): Promise<T> =>
    readFile(toDataPath(url), "utf-8")
      .then(JSON.parse)
      .catch(() => null);
  const _readdir = (url: string) => readdir(toDataPath(url)).catch(() => []);
  const write = <T>(url: string, data: T) =>
    writeFile(toDataPath(url), JSON.stringify(data))
      .then(() => true)
      .catch(() => null);
  return { read, readdir: _readdir, write };
};

export const DataHandler = createDataHandler();
