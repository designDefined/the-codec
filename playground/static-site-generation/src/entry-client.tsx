import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { fetchData } from "./data";
import { Page } from "./page/Page";

const datum = await fetchData(Number(new URL(document.URL).pathname.split("/")[1]));
if (!datum) throw new Error("Failed to fetch data");

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <Page datum={datum} />
  </StrictMode>,
);
