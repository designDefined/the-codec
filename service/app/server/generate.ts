import { toDataPath } from "@data/api";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer, ViteDevServer } from "vite";
import { Renderer } from "../src/entry/types";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);
const fromDist = (p: string) => toAbsolute(`../dist${p}`);
const fromSrc = (p: string) => toAbsolute(`../src${p}`);
const fromData = toDataPath;

const generateIndex = async ({ vite, idString }: { vite: ViteDevServer; idString: string }) => {
  const template = await fs.readFile(fromSrc("/entry/deploy/template/index.html"), "utf-8");
  const jsAssets = (await fs.readdir(fromDist("/assets"))).filter(
    url => url.startsWith("index-") && url.endsWith(".js"),
  );
  const cssAssets = (await fs.readdir(fromDist("/assets"))).filter(
    url => url.startsWith("index-") && url.endsWith(".css"),
  );
  const { render } = (await vite.ssrLoadModule("/src/entry/deploy/server/index.tsx")) as Renderer;
  const rendered = await render(idString);
  const html = template
    .replace(
      `<!--app-head-->`,
      [...cssAssets.map(url => `<link rel="stylesheet" href="/assets/${url}"></link>`), rendered.head ?? ""].join("\n"),
    )
    .replace(`<!--app-html-->`, rendered.html ?? "")
    .replace(
      `<!--app-script-->`,
      jsAssets.map(url => `<script type="module" src="/assets/${url}"></script>`).join("\n"),
    );

  await fs.mkdir(fromDist(`/idx/${idString}`), { recursive: true });
  await fs.writeFile(fromDist(`/idx/${idString}/index.html`), html);
  console.log(`Generated index ${idString}`);
};

const generate = async () => {
  // 1. Setup vite server for generation
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: false },
    appType: "custom",
  });

  // 2. Copy data to dist
  await fs.cp(fromData("/"), fromDist("/data"), { recursive: true });

  // 3. Generate index page
  const indexIds = await fs.readdir(fromData("/index"));
  await Promise.all(indexIds.map(idString => generateIndex({ vite, idString })));
  console.log("done!");
};

generate().then(() => process.exit());
