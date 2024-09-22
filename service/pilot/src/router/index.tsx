import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../ui/HomePage/HomePage";
import { CodexReader } from "../component/CodexReader/CodexReader";
import { sampleCodex } from "../temp/sample";

export const router = createBrowserRouter([
  {
    path: "",
    children: [
      { path: "", element: <HomePage /> },
      { path: "1", element: <CodexReader data={sampleCodex} /> },
    ],
  },
]);
