import type { RouteObject } from "react-router-dom";

import { HomePage } from "./home/home.page";
import { indexesRoutes } from "./indexes/indexes.routes";
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
        children: indexesRoutes,
      },
    ],
  },
];

export { rootRoutes };
