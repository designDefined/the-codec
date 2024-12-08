import { bindCSS, Main } from "@flexive/core";
import styles from "./index.module.css";

const cx = bindCSS(styles);

export const HomePage = () => {
  return <Main className={cx("HomePage")}>Home Page!</Main>;
};
