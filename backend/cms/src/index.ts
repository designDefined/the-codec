import { serve } from "@hono/node-server";
import { Hono } from "hono";

import { env } from "./env";
import { indexRouter } from "./service/index/index.router";
import { userRouter } from "./service/user/user.router";

const app = new Hono();

app.route("/users", userRouter);
app.route("/indexes", indexRouter);

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  info => {
    console.log(
      `Server is running on http://localhost:${info.port.toString()}`,
    );
  },
);
