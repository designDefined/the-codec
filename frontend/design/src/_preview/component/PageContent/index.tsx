import { bindCSS, Div, H1, Main, P, type PropsOf } from "@flexive/core";

import styles from "./index.module.scss";

const cx = bindCSS(styles);

type ContainerProps = PropsOf<"main"> & {
  mainProps?: Omit<PropsOf<"main">, "children">;
};
const Container = ({ children, mainProps, ...props }: ContainerProps) => {
  return (
    <Main row f alignC="start" py={128} overM hideC {...props}>
      <Div basis={24} grow={2} />
      <Div basis={1200} f {...mainProps}>
        {children}
      </Div>
      <Div basis={24} grow={2} />
    </Main>
  );
};

type TitleProps = PropsOf<"h1">;
const Title = ({ className, ...props }: TitleProps) => {
  return <H1 className={cx("Title", className)} block {...props} />;
};

type TitleSubProps = PropsOf<"span">;
const TitleSub = ({ className, ...props }: TitleSubProps) => {
  return <span className={cx("TitleSub", className)} {...props} />;
};

type ParagraphProps = PropsOf<"p">;
const Paragraph = ({ className, ...props }: ParagraphProps) => {
  return <P className={cx("Paragraph", className)} {...props} />;
};

export const PageContent = Object.assign(
  {},
  {
    Container,
    Title,
    TitleSub,
    Paragraph,
  },
);
