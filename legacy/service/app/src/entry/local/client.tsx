import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Via } from "viajs-react";
import { router } from "../../router/local";
import { createStore } from "viajs-core";

const store = createStore();

createRoot(document.getElementById("root")!).render(
  <Via store={store}>
    <RouterProvider router={router} />
  </Via>,
);
