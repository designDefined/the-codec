import { typ } from "@style/names";
import styles from "./index.module.css";
import { Header, Hgroup, Div, P, bindCSS } from "@flexive/core";
import { MainTitle } from "@module/logo";

const cx = bindCSS(styles);

export const HomeHeader = () => (
  <Header className={cx("HomeHeader")} alignC px={48} pb={120}>
    <Hgroup>
      <MainTitle />
      <Div className={cx("description", typ.font.serif)} px={16} g={4}>
        <P>Where the codes decode the world</P>
        <P>A blog written by DesignDefined</P>
      </Div>
    </Hgroup>
  </Header>
);
