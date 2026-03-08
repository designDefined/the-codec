import "@style/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FilterPage } from "./ui/filter/FilterPage";
import { HomePage } from "./ui/HomePage";
import { ColorPage } from "./ui/color/ColorPage";
import { ColorSystemPage } from "./ui/colorSystem/ColorSystemPage";

const router = createBrowserRouter([
  { path: "", element: <HomePage /> },
  { path: "filter", element: <FilterPage /> },
  { path: "color", element: <ColorPage /> },
  { path: "colorSystem", element: <ColorSystemPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
