import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { Page } from "../page/Page";
import { parsePath } from "../util/parsePath";
import { fetchStatic, PageDatum } from "../../data";

const url = new URL(document.URL).pathname;
const path = parsePath(url);

if (path.type === "page") {
  fetchStatic<PageDatum>(`/pages/${path.id}/data.json`).then(datum => {
    if (!datum) throw new Error("Page not found");
    hydrateRoot(
      document.getElementById("root") as HTMLElement,
      <StrictMode>
        <Page datum={datum} />
      </StrictMode>,
    );
  });
}
