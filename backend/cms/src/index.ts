import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { env } from "./env";
import { indexPrefix, indexRouter } from "./service/index/index.router";
import { userPrefix, userRouter } from "./service/user/user.router";

const app = new Hono();
app.use(cors());

app.route(userPrefix, userRouter);
app.route(indexPrefix, indexRouter);

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  info => {
    console.log(`Server is running on http://localhost:${info.port.toString()}`);
  },
);
