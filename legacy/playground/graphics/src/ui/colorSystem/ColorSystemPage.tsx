import { Article, bindCSS, Div, Section } from "@flexive/core";
import styles from "./ColorSystemPage.module.css";

const cx = bindCSS(styles);

export const ColorSystemPage = () => {
  return (
    <Article className={cx("ColorSystemPage")} sizeC="100vw" sizeM="100vh  ">
      <Section className={cx("white")} basis={0} f row p={16} alignM="around">
        {classesArray.map(c => (
          <Div className={cx("gradient", c)} key={`${c}-white`} basis={60} alignC alignM>
            {c}
          </Div>
        ))}
        <Div alignM="around" alignC>
          <Div className={cx("grayscale", "g1")}>black</Div>
          <Div className={cx("grayscale", "g2")}>dark</Div>
          <Div className={cx("grayscale", "g3")}>gray</Div>
          <Div className={cx("grayscale", "g4")}>light</Div>
          <Div className={cx("grayscale", "g5")}>white</Div>
        </Div>
        {classesArray.map(c => (
          <Div className={cx("gradient", "op", c)} key={`${c}-white-op`} basis={60} alignC alignM>
            {c}
          </Div>
        ))}
      </Section>
      <Section className={cx("black")} basis={0} f row p={16} alignM="around">
        {classesArray.map(c => (
          <Div className={cx("gradient", c)} key={`${c}-black`} basis={60} alignC alignM>
            {c}
          </Div>
        ))}
        <Div alignM="around" alignC>
          <Div className={cx("grayscale", "g1")}>black</Div>
          <Div className={cx("grayscale", "g2")}>dark</Div>
          <Div className={cx("grayscale", "g3")}>gray</Div>
          <Div className={cx("grayscale", "g4")}>light</Div>
          <Div className={cx("grayscale", "g5")}>white</Div>
        </Div>
        {classesArray.map(c => (
          <Div className={cx("gradient", "op", c)} key={`${c}-black-op`} basis={60} alignC alignM>
            {c}
          </Div>
        ))}
      </Section>
    </Article>
  );
};

const classesArray = ["vivid", "pastel", "deep", "tarnish"];
