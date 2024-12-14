import { SolidColorInput } from "./types";

// Sample Color
const NEUTRAL_GRAY = { RGB: { R: 127, G: 127, B: 127 } };

export const COLOR = { NEUTRAL_GRAY };

// Tristimulus Reference Values (CIE 1964)
// Reference: https://www.easyrgb.com/en/math.php
const D50 = { X: 96.72, Y: 100.0, Z: 81.427 }; //	ICC profile PCS
const D55 = { X: 95.799, Y: 100.0, Z: 90.926 }; // Mid-morning daylight
const D65 = { X: 94.811, Y: 100.0, Z: 107.304 }; // Daylight, sRGB, Adobe-RGB
const D75 = { X: 94.416, Y: 100.0, Z: 120.641 }; // North sky daylight

export const TRISTIMULUS_REFERENCE_VALUES = { D50, D55, D65, D75 };

// Solid Color Test
const _default: SolidColorInput = {
  planeDark: { R: 114, G: 114, B: 114 },
  planeBright: { R: 136, G: 136, B: 136 },
  slopeDark: { R: 89, G: 89, B: 89 },
  slopeBright: { R: 165, G: 165, B: 165 },
  innerPlane: { R: 127, G: 127, B: 127 },
  innerSlopeDark: { R: 108, G: 108, B: 108 },
  innerSlopeBright: { R: 146, G: 146, B: 146 },
  fontColor: { R: 206, G: 206, B: 206 },
  backgroundColor: { R: 127, G: 127, B: 127 },
};
const hopper: SolidColorInput = {
  planeDark: { R: 29, G: 43, B: 41 },
  planeBright: { R: 34, G: 51, B: 49 },
  slopeDark: { R: 16, G: 24, B: 23 },
  slopeBright: { R: 48, G: 72, B: 69 },
  innerPlane: { R: 32, G: 48, B: 46 },
  innerSlopeDark: { R: 27, G: 41, B: 39 },
  innerSlopeBright: { R: 37, G: 55, B: 53 },
  backgroundColor: { R: 32, G: 48, B: 46 },
  fontColor: { R: 113, G: 41, B: 27 },
};

export const solidColorInput = {
  default: _default,
  hopper,
};
