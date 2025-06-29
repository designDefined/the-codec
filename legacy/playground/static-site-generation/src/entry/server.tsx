import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { Page } from "../page/Page";
import { fetchDynamic, PageDatum } from "../../data";
import { parsePath } from "../util/parsePath";

export const render = async (url: string) => {
  const path = parsePath(url);
  if (path.type === "home") return { html: `home page` };
  if (path.type === "error") return { html: `error: unknown route` };

  const page = await fetchDynamic<PageDatum>(`/pages/${path.id}/data.json`);
  if (!page) return { html: `error: page not found` };

  const html = renderToString(
    <StrictMode>
      <Page datum={page} />
    </StrictMode>,
  );
  return { html };
};
