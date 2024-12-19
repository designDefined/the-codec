import { useMemo, useState } from "react";
import styles from "./ColorPage.module.css";
import { Article, bindCSS, Button, Div, H2, H3, Input, Main, Section } from "@flexive/core";
import { parseColorInput, parseSRGB } from "./function/parse";
import { solidColorInput } from "./function/constant";
import { hexToRgb, shedLight } from "./function/calculation";

const cx = bindCSS(styles);

export const ColorPage = () => {
  const [theme, setTheme] = useState<"default" | "hopper">("default");
  const [lightColor, setLightColor] = useState<string | undefined>(undefined);

  const colorInput = useMemo(() => {
    if (lightColor === undefined) return solidColorInput[theme];
    const light = hexToRgb(lightColor);
    return shedLight({ solid: solidColorInput[theme], light, weight: 1 });
  }, [theme, lightColor]);

  return (
    <Main
      className={cx("ColorPage")}
      sizeC="100vw"
      sizeM="100vh"
      over
      style={{ backgroundColor: parseSRGB(colorInput.backgroundColor) }}
    >
      <Section p={32}>
        <H2>Color Interpolation Method</H2>
        <Article p={16} sizeC={640}>
          <H3>OKLCH</H3>
          <Div style={{ background: "linear-gradient(in oklch longer hue to right, red, red)" }} basis={80} />
          <H3>HSL</H3>
          <Div style={{ background: "linear-gradient(in hsl longer hue to right, red, red)" }} basis={80} />
        </Article>
      </Section>

      <Section p={32}>
        <H2>Color Test</H2>
        <Div row g={8}>
          <Button px={12} py={6} onClick={() => setTheme("default")}>
            기본
          </Button>
          <Button px={12} py={6} onClick={() => setTheme("hopper")}>
            호퍼
          </Button>
          <Input
            type="color"
            value={lightColor}
            onChange={e => {
              console.log(e.target.value);
              setLightColor(e.target.value);
            }}
          />
        </Div>
        <Div py={240}>
          <Article p={16} alignC>
            <Div className={cx("outer")} px={160} py={120} rad={32} style={parseColorInput(colorInput)}>
              <Div className={cx("inner")} px={24} py={8} rad={8}>
                INTERACTIVE
              </Div>
            </Div>
          </Article>
        </Div>
      </Section>
    </Main>
  );
};
