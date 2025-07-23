import { createMemoryRouter } from "react-router-dom";

import { rootRoutes } from "@/ui/root.routes";

import { getHistoryFromSessionStorage } from "./history";
import { HistoryRecorder } from "./HistoryRecorder";

const desktopRoutes = [
  {
    path: "",
    element: <HistoryRecorder />,
    children: rootRoutes,
  },
];

const history = getHistoryFromSessionStorage();

const desktopRouter = createMemoryRouter(desktopRoutes, {
  initialEntries: history,
  initialIndex: history.length - 1,
});

export { desktopRouter };
