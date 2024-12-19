import { CSSProperties } from "react";
import { SolidColorInput, SRGB } from "./types";

export const parseSRGB = (input: SRGB) => `rgb(${input.R},${input.G},${input.B})`;

export const parseColorInput = (input: SolidColorInput) => {
  return {
    "--plane-dark": parseSRGB(input.planeDark),
    "--plane-bright": parseSRGB(input.planeBright),
    "--slope-dark": parseSRGB(input.slopeDark),
    "--slope-bright": parseSRGB(input.slopeBright),
    "--inner-plane": parseSRGB(input.innerPlane),
    "--inner-slope-dark": parseSRGB(input.innerSlopeDark),
    "--inner-slope-bright": parseSRGB(input.innerSlopeBright),
    "--font-color": parseSRGB(input.fontColor),
  } as CSSProperties;
};
