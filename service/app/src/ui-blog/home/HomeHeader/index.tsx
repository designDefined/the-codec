import styles from "./index.module.css";
import { Header, Hgroup, Div, P, bindCSS, Strong } from "@flexive/core";
import { MainTitle } from "@module/logo";

const cx = bindCSS(styles);

export const HomeHeader = () => (
  <Header className={cx("HomeHeader")} alignC py={48} pb={120}>
    <Hgroup g={24}>
      <MainTitle />
      <Div className={cx("description")} px={16} g={4}>
        <P>
          <Strong>Where the Codes Decode the World!</Strong>
        </P>
        <P>DesignDefined의 블로그입니다. 개발, 그리고 재미 있는 이야기들.</P>
      </Div>
    </Hgroup>
  </Header>
);
