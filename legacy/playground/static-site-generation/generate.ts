import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, p);

async function generate() {
  // 1. Setup vite server for generation
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  // 2. Load the server entry
  const { render } = (await vite.ssrLoadModule("/src/entry/server.tsx")) as {
    render: (url: string) => Promise<{ head?: string; html?: string }>;
  };

  // 3. Read template and assets
  const template = fs.readFileSync(toAbsolute("./src/template/static.html"), "utf-8");
  const assets = fs.readdirSync(toAbsolute("./dist/assets"));
  const pageUrls = fs.readdirSync(toAbsolute("./data/pages")).map(idString => `/pages/${idString}`);
  const totalUrls = ["/home", ...pageUrls];

  // 4. Copy data to dist
  fs.cpSync(toAbsolute("./data"), toAbsolute("./dist/data"), { recursive: true });

  // 5. Generate html files
  const generateRequests = totalUrls.map(async url => {
    const rendered = await render(url);
    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "")
      .replace(
        `<!--app-script-->`,
        assets.map(url => `<script type="module" src="/assets/${url}"></script>`).join("\n"),
      );
    fs.mkdirSync(toAbsolute(`./dist${url}`), { recursive: true });
    fs.writeFileSync(toAbsolute(`./dist${url}/index.html`), html);
    console.log("generated:", url);
  });

  Promise.all(generateRequests).then(() => {
    console.log("done");
    process.exit(0);
  });
}

generate();
