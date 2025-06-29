import { config } from "dotenv";
import { mkdir, readdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

config({ path: ".env.local" });
config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPathFromRoot = `../../../${process.env.DATA_PATH ?? ""}`;

export const toDataPath = (p: string) => path.resolve(__dirname, dataPathFromRoot, `.${p}`);

export const createDataHandler = () => {
  const read = <T>(url: string): Promise<T> => {
    return readFile(toDataPath(url), "utf-8")
      .then(JSON.parse)
      .catch(() => null);
  };
  const _readdir = (url: string) => readdir(toDataPath(url)).catch(() => []);
  const write = async <T>(url: string, data: T) => {
    try {
      await mkdir(path.dirname(toDataPath(url)), { recursive: true });
      await writeFile(toDataPath(url), JSON.stringify(data));
      return true;
    } catch {
      return null;
    }
  };
  return { read, readdir: _readdir, write };
};

export const DataHandler = createDataHandler();
