import { bindCSS, Header, Li, Ul } from "@flexive/core";
import type { PropsWithChildren } from "react";
import { Link } from "react-router";

import styles from "./index.module.scss";

const cx = bindCSS(styles);

export const GlobalNavigator = () => {
  return (
    <Header className={cx("GlobalNavigator")}>
      <Ul row py={32} px={64} g={16}>
        <Tab to="/">Home</Tab>
        <Tab to="/action">Action</Tab>
      </Ul>
    </Header>
  );
};

type TabProps = PropsWithChildren & {
  to: string;
};
const Tab = ({ to, children }: TabProps) => {
  return (
    <Li className={cx("Tab")}>
      <Link to={to}>{children}</Link>
    </Li>
  );
};
