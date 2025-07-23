import type { RouteObject } from "react-router-dom";

import { HomePage } from "./home/home.page";
import { IndexesPage } from "./indexes/indexes.page";
import { RootLayout } from "./root.layout";

const rootRoutes: RouteObject[] = [
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "indexes",
        element: <IndexesPage />,
      },
    ],
  },
];

export { rootRoutes };
