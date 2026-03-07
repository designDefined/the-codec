import { bindCSS, Div, H1, H2, H3, H4, H5, H6 } from "@flexive/core";
import type { JSX } from "react";
import type { RenderElementProps } from "slate-react";

import styles from "./BlockRenderer.module.scss";

const cx = bindCSS(styles);

type BlockRendererProps = RenderElementProps;

export const BlockRenderer = ({ attributes, children, element }: BlockRendererProps): JSX.Element => {
  switch (element.type) {
    case "FLOW": {
      return (
        <Div className={cx("Flow")} {...attributes} {...element.layout}>
          {children}
        </Div>
      );
    }

    case "PARAGRAPH": {
      return (
        <p className={cx("Paragraph")} {...attributes}>
          {children}
        </p>
      );
    }

    case "HEADING": {
      return (
        <HeadingRenderer attributes={attributes} element={element}>
          {children}
        </HeadingRenderer>
      );
    }
  }
};

const HeadingRenderer = ({ attributes, children, element }: BlockRendererProps) => {
  if (element.type !== "HEADING") {
    return null;
  }

  switch (element.level) {
    case 1: {
      return (
        <H1 className={cx("Heading")} block {...attributes} {...element.layout}>
          {children}
        </H1>
      );
    }
    case 2: {
      return (
        <H2 className={cx("Heading")} block {...attributes} {...element.layout}>
          {children}
        </H2>
      );
    }

    case 3: {
      return (
        <H3 className={cx("Heading")} block {...attributes} {...element.layout}>
          {children}
        </H3>
      );
    }
    case 4: {
      return (
        <H4 className={cx("Heading")} block {...attributes} {...element.layout}>
          {children}
        </H4>
      );
    }
    case 5: {
      return (
        <H5 className={cx("Heading")} block {...attributes} {...element.layout}>
          {children}
        </H5>
      );
    }
    case 6: {
      return (
        <H6 className={cx("Heading")} block {...attributes} {...element.layout}>
          {children}
        </H6>
      );
    }
  }
};
