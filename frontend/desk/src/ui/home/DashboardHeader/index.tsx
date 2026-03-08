import { bindCSS, H2, Header } from "@flexive/core";
import type { PropsWithChildren } from "react";

import styles from "./index.module.scss";

const cx = bindCSS(styles);

type DashboardHeaderProps = PropsWithChildren & {
  title: string;
  to?: string;
};

export const DashboardHeader = ({ children, title }: DashboardHeaderProps) => {
  return (
    <Header className={cx("DashboardHeader")} row g={12} px={16} py={12}>
      <H2 className={cx("title")} f>
        {title}
      </H2>
      {children}
    </Header>
  );
};
