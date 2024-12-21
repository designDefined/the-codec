import styles from "./index.module.css";
import { bindCSS, H1 } from "@flexive/core";
import { typ } from "@style/names";

const cx = bindCSS(styles);

export const MainTitle = () => <H1 className={cx("MainTitle", typ.fx.clip)}>The Codec</H1>;
