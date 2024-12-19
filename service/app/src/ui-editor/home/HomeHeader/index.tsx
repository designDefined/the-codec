import styles from "./index.module.css";
import { Header, Hgroup, H1, Div, P, bindCSS } from "@flexive/core";

const cx = bindCSS(styles);

export const HomeHeader = () => (
  <Header className={cx("HomeHeader")} alignC px={48} pb={120}>
    <Hgroup>
      <H1 className={cx("title")}>The Codec</H1>
      <Div className={cx("description")} g={24} px={16}>
        <P py="0.2em">Where the codes decode the world.</P>
        <Div>
          <Div className={cx("label")}>written by</Div>
          <P py="0.2em">designDefined</P>
        </Div>
      </Div>
    </Hgroup>
  </Header>
);
