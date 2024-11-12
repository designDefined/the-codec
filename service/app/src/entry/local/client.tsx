import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { LocalRoutes } from "../../router/local";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LocalRoutes />
  </BrowserRouter>,
);
