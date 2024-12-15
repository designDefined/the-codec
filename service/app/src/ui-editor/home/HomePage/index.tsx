import styles from "./index.module.css";
import { Article, bindCSS, Main } from "@flexive/core";
import { MainSection } from "../MainSection";
import { HomeHeader } from "../HomeHeader";

const cx = bindCSS(styles);

export const HomePage = () => {
  return (
    <Article className={cx("HomePage")} sizeC="100vw" minM="100vh">
      <HomeHeader />
      <Main>
        <MainSection>recents</MainSection>
        <MainSection>codex 1</MainSection>
        <MainSection>codex 2</MainSection>
        <MainSection>codex 3</MainSection>
      </Main>
    </Article>
  );
};
