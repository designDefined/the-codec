import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../ui/home/HomePage/HomePage";
import { CodexReader } from "../component/CodexReader/CodexReader";
import { sampleCodex } from "../temp/sample";
import { CodexPage } from "../ui/codex/CodexPage/CodexPage";
import { IndexPage } from "../ui/index/IndexPage/IndexPage";

export const router = createBrowserRouter([
  {
    path: "",
    children: [
      { path: "", element: <HomePage /> },
      { path: "cdx", children: [{ path: ":codexId", element: <CodexPage /> }] },
      { path: "idx", children: [{ path: ":indexId", element: <IndexPage /> }] },
      { path: "1", element: <CodexReader data={sampleCodex} /> },
    ],
  },
]);
