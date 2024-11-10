import { toDataPath } from "data/api";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer, ViteDevServer } from "vite";
import { Renderer } from "./src/entry/types";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

const generateIndex = async ({ vite, idString }: { vite: ViteDevServer; idString: string }) => {
  const template = await fs.readFile(toAbsolute("./src/entry/deploy/template/index.html"), "utf-8");
  const assets = (await fs.readdir(toAbsolute("./dist/assets"))).filter(url => url.startsWith("index-"));
  const { render } = (await vite.ssrLoadModule("/src/entry/deploy/server/index.tsx")) as Renderer;
  const rendered = await render(idString);
  const html = template
    .replace(`<!--app-head-->`, rendered.head ?? "")
    .replace(`<!--app-html-->`, rendered.html ?? "")
    .replace(`<!--app-script-->`, assets.map(url => `<script type="module" src="/assets/${url}"></script>`).join("\n"));

  await fs.mkdir(toAbsolute(`./dist/idx/${idString}`), { recursive: true });
  await fs.writeFile(toAbsolute(`./dist/idx/${idString}/index.html`), html);
  console.log(`Generated index ${idString}`);
};

const generate = async () => {
  // 1. Setup vite server for generation
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: false },
    appType: "custom",
  });

  // 2. Copy data to dist
  await fs.cp(toDataPath("/data"), toAbsolute("./dist/data"), { recursive: true });

  // 3. Generate index page
  const indexIds = await fs.readdir(toDataPath("/data/index"));
  await Promise.all(indexIds.map(idString => generateIndex({ vite, idString })));
  console.log("done!");
};

generate().then(() => process.exit());
