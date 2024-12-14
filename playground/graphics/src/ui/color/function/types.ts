export type ColorSpace = "srgb" | "xyz" | "lab";

export type SRGB = { R: number; G: number; B: number };
export type XYZ = { X: number; Y: number; Z: number };
export type Yxy = { Y: number; x: number; y: number };
export type Lab = { L: number; a: number; b: number };
export type OKLAB = { L: number; a: number; b: number };
export type LCh = { L: number; C: number; H: number };
export type OKLCh = { L: number; C: number; H: number };

export type SolidColorInput = {
  planeDark: SRGB;
  planeBright: SRGB;
  slopeDark: SRGB;
  slopeBright: SRGB;
  innerPlane: SRGB;
  innerSlopeDark: SRGB;
  innerSlopeBright: SRGB;
  fontColor: SRGB;
  backgroundColor: SRGB;
};
