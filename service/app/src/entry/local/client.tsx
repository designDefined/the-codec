import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LocalRoutes } from "../../router/local";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <BrowserRouter>
    <LocalRoutes />
  </BrowserRouter>,
);
