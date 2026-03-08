import { PropsWithChildren, useState } from "react";
import styles from "./index.module.css";
import { bindCSS, H1, Hgroup, Hr, Section } from "@flexive/core";

const cx = bindCSS(styles);

type MinimizableSectionProps = PropsWithChildren & { name: string };

export const MinimizableSection = ({ children, name }: MinimizableSectionProps) => {
  const [minimized, setMinimized] = useState(false);

  return (
    <Section className={cx("MinimizableSection", { minimized })} pb={40} g={16}>
      <Hgroup className={cx("header")} onClick={() => setMinimized(p => !p)} row alignC px={4} g={8}>
        <Hr className={cx("divider")} basis={300} />
        <H1 className={cx("name")}>{name}</H1>
        <Hr className={cx("divider")} f />
      </Hgroup>
      {!minimized && children}
    </Section>
  );
};
