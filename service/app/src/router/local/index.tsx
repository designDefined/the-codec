import "@service/design/style/global/index.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../ui-editor/home/HomePage";
import { IndexPage } from "../../ui-editor/idx/IndexPage";

export const LocalRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/idx/:indexId" element={<IndexPage />} />
  </Routes>
);
