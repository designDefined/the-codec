import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { LocalRoutes } from "../../router/local";

export const render = (url: string) => {
  const html = renderToString(
    <StaticRouter location={url}>
      <LocalRoutes />
    </StaticRouter>,
  );
  return { html };
};
