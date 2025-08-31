import { Article, bindCSS, type PropsOf } from "@flexive/core";

import styles from "./index.module.scss";

const cx = bindCSS(styles);

type DashboardProps = PropsOf<"article">;
export function Dashboard({ className, children, ...props }: DashboardProps) {
  return (
    <Article className={cx("Dashboard", className)} {...props}>
      {children}
    </Article>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className={cx("Title")}>{children}</h2>;
}
