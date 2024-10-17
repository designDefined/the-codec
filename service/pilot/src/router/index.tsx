import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../ui/home/HomePage/HomePage";
import { sampleCodex } from "../temp/sample";
import { CodexPage } from "../ui/codex/CodexPage/CodexPage";
import { IndexPage } from "../ui/index/IndexPage/IndexPage";
import { CodexReader } from "../temp/component/CodexReader/CodexReader";
import { sampleCodex2 } from "../temp/sample/2";

export const router = createBrowserRouter([
  {
    path: "",
    children: [
      { path: "", element: <HomePage /> },
      { path: "1", element: <CodexReader data={sampleCodex} /> },
      { path: "idx/2", element: <CodexReader data={sampleCodex2} /> },
      { path: "cdx", children: [{ path: ":codexId", element: <CodexPage /> }] },
      { path: "idx", children: [{ path: ":indexId", element: <IndexPage /> }] },
    ],
  },
]);
