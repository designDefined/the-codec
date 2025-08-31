import { Article } from "@flexive/core";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <Article sizeC="100vw" sizeM="100vh" hideC overM>
      <Outlet />
    </Article>
  );
};
