import styles from "./index.module.css";
import { BoxPathSlice } from "@core/entity/box/BoxPath";
import { bindCSS, Li } from "@flexive/core";
import { Button } from "@component/button";

const cx = bindCSS(styles);

type PathItemProps = {
  pathSlice: BoxPathSlice;
  current: boolean;
  onClick?: () => void;
};

export const PathItem = ({ pathSlice, current, onClick }: PathItemProps) => {
  return (
    <Li className={cx("PathItem", { current })}>
      <Button onClick={onClick}>
        {pathSlice.name} {!current && ">"}
      </Button>
    </Li>
  );
};
