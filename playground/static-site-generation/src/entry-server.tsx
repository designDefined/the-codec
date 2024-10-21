import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { Page } from "./page/Page";
import { fetchData } from "./data";

export const render = async (url: string) => {
  const datum = await fetchData(Number(url.split("/")[1]));
  if (!datum) return { html: undefined };

  const html = renderToString(
    <StrictMode>
      <Page datum={datum} />
    </StrictMode>,
  );
  return { html };
};
