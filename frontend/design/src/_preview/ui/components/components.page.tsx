import { bindCSS } from "@flexive/core";

import { FullPage } from "../../component/FullPage";
import { GlobalNavigator } from "../../component/GlobalNavigator";
import styles from "./components.module.scss";
const cx = bindCSS(styles);

export const ComponentsPage = () => {
  <FullPage className={cx("ComponentsPage")}>
    <GlobalNavigator />
  </FullPage>;
};
