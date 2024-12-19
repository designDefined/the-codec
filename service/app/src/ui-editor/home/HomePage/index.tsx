import styles from "./index.module.css";
import { Article, bindCSS } from "@flexive/core";
import { HomeHeader } from "../HomeHeader";
import { Recents } from "../Recents";
import { MainContent } from "../../../../../../source/design/component/area/content/MainContent/index";

const cx = bindCSS(styles);

export const HomePage = () => {
  return (
    <Article className={cx("HomePage")} sizeC="100vw" minM="100vh">
      <HomeHeader />
      <MainContent py={120}>
        <Recents />
      </MainContent>
      <MainContent py={120}>codex 1</MainContent>
      <MainContent py={120}>codex 2</MainContent>
      <MainContent py={120}>codex 3</MainContent>
    </Article>
  );
};
