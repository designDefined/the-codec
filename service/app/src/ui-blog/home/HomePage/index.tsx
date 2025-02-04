import styles from "./index.module.css";
import { Article, bindCSS } from "@flexive/core";
import { HomeHeader } from "../HomeHeader";
import { Recents } from "../Recents";
import { MainContent } from "@component/area";

const cx = bindCSS(styles);

export const HomePage = () => {
  return (
    <Article className={cx("HomePage")} sizeC="100vw" minM="100vh">
      <MainContent>
        <HomeHeader />
      </MainContent>
      <MainContent py={120}>
        <Recents />
      </MainContent>
      <MainContent py={120}>codex 1</MainContent>
      <MainContent py={120}>codex 2</MainContent>
      <MainContent py={120}>codex 3</MainContent>
    </Article>
  );
};
