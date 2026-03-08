import { createBrowserRouter } from "react-router";

import { ColorPage } from "./ui/color/color.page";
import { MainPage } from "./ui/main.page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/color",
    Component: ColorPage,
  },
]);
