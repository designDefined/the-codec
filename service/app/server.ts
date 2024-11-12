import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express, { json } from "express";
import { createServer as createViteServer } from "vite";
import { createDataHandler } from "data/api";

const port = 4768;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataHandler = createDataHandler();

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  // Use vite's connect instance as middleware. If you use y[[]our own
  // express router (express.Router()), you should use router.use
  // When the server restarts (for example after the user modifies
  // vite.config.js), `vite.middlewares` is still going to be the same
  // reference (with a new internal stack of Vite and plugin-injected
  // middlewares). The following is valid even after restarts.
  app.use(vite.middlewares);
  app.use(json());

  app.get("/data/*", async (req, res) => {
    const data = await dataHandler.read(req.url);
    res.json(data);
  });

  app.post("/data/*", async (req, res) => {
    await dataHandler.write(req.url, req.body);
    res.json({ success: true });
  });

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read template html
      let template = fs.readFileSync(path.resolve(__dirname, "./src/entry/local/index.html"), "utf-8");

      // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
      //    and also applies HTML transforms from Vite plugins, e.g. global
      //    preambles from @vitejs/plugin-react
      template = await vite.transformIndexHtml(url, template);

      // 3. Load the server entry. ssrLoadModule automatically transforms
      //    ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      // const { render } = (await vite.ssrLoadModule("/src/entry/local/server.tsx")) as {
      //   render: (url: string) => Promise<{ head?: string; html?: string }>;
      // };

      // 4. render the app HTML. This assumes entry-server.js's exported
      //     `render` function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      // const rendered = await render(url);

      // 5. Inject the app-rendered HTML into the template.
      // const html = template
      //   .replace(`<!--app-head-->`, rendered.head ?? "")
      //   .replace(`<!--app-html-->`, rendered.html ?? "");

      // 6. Send the rendered HTML back.
      res.status(200).set({ "Content-Type": "text/html" }).send(template);
    } catch (e) {
      // If an error is caught, let Vite fix the stack trace so it maps back
      // to your actual source code.
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        console.log(e.stack);
      }
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}

createServer();
