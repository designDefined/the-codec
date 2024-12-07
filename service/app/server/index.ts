import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express, { json } from "express";
import { createServer as createViteServer } from "vite";
// import { DataHandler } from "data/api";
import { IndexRouter } from "./router/idx";
import { CodexRouter } from "./router/cdx";

const port = 4768;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: process.env.NODE_ENV === "development" },
    appType: "custom",
  });
  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  // When the server restarts (for example after the user modifies
  // vite.config.js), `vite.middlewares` is still going to be the same
  // reference (with a new internal stack of Vite and plugin-injected
  // middlewares). The following is valid even after restarts.
  app.use(vite.middlewares);
  app.use(json());

  app.use("/api/index", IndexRouter);
  app.use("/api/codex", CodexRouter);

  // app.get("/data/*", async (req, res) => {
  //   const data = await DataHandler.read(req.url);
  //   res.json(data);
  // });

  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;
      let template = fs.readFileSync(path.resolve(__dirname, "../src/entry/local/index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).send(template);
    } catch (e) {
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
