import { bindCSS, Li } from "@flexive/core";
import { Link } from "react-router-dom";
import type { Index } from "types/index";

import styles from "./index.module.scss";

const cx = bindCSS(styles);

interface IndexItemProps {
  index: Index;
}
export const IndexItem = ({ index }: IndexItemProps) => {
  return (
    <Link to={`/indexes/${index.id.toString()}`}>
      <Li className={cx("IndexItem")} row px={16} py={8}>
        {index.name}
      </Li>
    </Link>
  );
};
