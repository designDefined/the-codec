import { bindCSS, Div, Header, Main } from "@flexive/core";
import { type CSSProperties, useState } from "react";

import { HueInput } from "../../../component/input/HueInput/HueInput";
import { FullPage } from "../../component/FullPage";
import { GlobalNavigator } from "../../component/GlobalNavigator";
import styles from "./color.module.scss";

const cx = bindCSS(styles);

const indexes = Array.from({ length: 9 }, (_, i) => i + 1);

export const ColorPage = () => {
  const [hue, setHue] = useState(() => Math.floor(Math.random() * 360));

  const onPickHue = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;
    setHue(Math.floor(ratio * 360));
  };

  return (
    <FullPage className={cx("ColorPage")}>
      <GlobalNavigator />
      <Header p={32} g={16}>
        <HueInput value={hue} onChange={setHue} />
      </Header>
      <Main f>
        <Div style={{ "--hue": hue } as CSSProperties} row px={32} sizeC={200}>
          {indexes.map(index => (
            <Div key={index} className={cx(`index-${index.toString()}`)} grow>
              {index}
            </Div>
          ))}
        </Div>
      </Main>
    </FullPage>
  );
};
