import "@style/index.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../../ui-editor/home/HomePage";
import { IndexPage } from "../../ui-editor/idx/IndexPage";
import { Via } from "viajs-react";
import { createStore } from "viajs-core";
import { Suspense } from "react";

const store = createStore();

export const LocalRoutes = () => (
  <Via store={store}>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <HomePage />
          </Suspense>
        }
      />
      <Route path="/idx/:indexId" element={<IndexPage />} />
    </Routes>
  </Via>
);
