import styles from "./index.module.css";
import { bindCSS, Div, H2, Li, Ol } from "@flexive/core";

const cx = bindCSS(styles);

export const Recents = () => {
  return (
    <Div className={cx("Recents")}>
      <H2>새로운 글</H2>
      <Ol px={0} g={16}>
        <Li className={cx("item")} p={16}>
          1. 강아지와 바퀴
        </Li>
        <Li className={cx("item")} p={16}>
          2. 강아지와 바퀴
        </Li>
      </Ol>
    </Div>
  );
};
