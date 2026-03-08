import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";

import { IndexLayout } from "./[index]/index.layout";
import { IndexPage } from "./[index]/index.page";
import { IndexesPage } from "./indexes.page";

const indexesRoutes: RouteObject[] = [
  {
    path: "",
    element: <IndexesPage />,
  },
  {
    path: ":indexId",
    element: (
      <Suspense>
        <IndexLayout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: <IndexPage />,
      },
    ],
  },
];

export { indexesRoutes };
