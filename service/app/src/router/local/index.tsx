import "@style/index.css";
import { HomePage } from "../../ui-editor/home/HomePage";
import { IndexPage } from "../../ui-editor/idx/IndexPage";
import { NavigatorLayout } from "../../ui-editor/NavigatorLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "",
    element: <NavigatorLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "idx/:indexId", element: <IndexPage /> },
    ],
  },
]);
