import { SolidColorInput, SRGB, XYZ, Yxy } from "./types";

export const hexToRgb = (hex: string): SRGB => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error("Invalid hex color");
  return {
    R: parseInt(result[1], 16),
    G: parseInt(result[2], 16),
    B: parseInt(result[3], 16),
  };
};

export const rgbToXyz = ({ R, G, B }: SRGB): XYZ => {
  let varR = R / 255;
  let varG = G / 255;
  let varB = B / 255;

  if (varR > 0.04045) varR = ((varR + 0.055) / 1.055) ** 2.4;
  else varR = varR / 12.92;

  if (varG > 0.04045) varG = ((varG + 0.055) / 1.055) ** 2.4;
  else varG = varG / 12.92;
  if (varB > 0.04045) varB = ((varB + 0.055) / 1.055) ** 2.4;
  else varB = varB / 12.92;

  varR = varR * 100;

  varG = varG * 100;
  varB = varB * 100;

  const X = varR * 0.4124 + varG * 0.3576 + varB * 0.1805;
  const Y = varR * 0.2126 + varG * 0.7152 + varB * 0.0722;
  const Z = varR * 0.0193 + varG * 0.1192 + varB * 0.9505;
  return { X, Y, Z };
};

export const xyzToRgb = ({ X, Y, Z }: XYZ): SRGB => {
  //X, Y and Z input refer to a D65/2° standard illuminant.
  //sR, sG and sB (standard RGB) output range = 0 ÷ 255

  const varX = X / 100;
  const varY = Y / 100;
  const varZ = Z / 100;

  let varR = varX * 3.2406 + varY * -1.5372 + varZ * -0.4986;
  let varG = varX * -0.9689 + varY * 1.8758 + varZ * 0.0415;
  let varB = varX * 0.0557 + varY * -0.204 + varZ * 1.057;

  if (varR > 0.0031308) varR = 1.055 * varR ** (1 / 2.4) - 0.055;
  else varR = 12.92 * varR;
  if (varG > 0.0031308) varG = 1.055 * varG ** (1 / 2.4) - 0.055;
  else varG = 12.92 * varG;
  if (varB > 0.0031308) varB = 1.055 * varB ** (1 / 2.4) - 0.055;
  else varB = 12.92 * varB;

  return { R: varR * 255, G: varG * 255, B: varB * 255 };
};

export const xyzToYxy = ({ X, Y, Z }: XYZ): Yxy => {
  const x = X / (X + Y + Z);
  const y = Y / (X + Y + Z);
  return { Y, x, y };
};

export const interpolate = ({
  original,
  input,
  weightOriginal = 1,
  weightInput = 1,
}: {
  original: SRGB;
  input: SRGB;
  weightOriginal?: number;
  weightInput?: number;
}): SRGB => {
  const originalXYZ = rgbToXyz(original);
  console.log("input R", input.R);
  const inputXYZ = rgbToXyz(input);

  const X = (originalXYZ.X * weightOriginal + inputXYZ.X * weightInput) / (weightOriginal + weightInput);
  const Y = (originalXYZ.Y * weightOriginal + inputXYZ.Y * weightInput) / (weightOriginal + weightInput);
  const Z = (originalXYZ.Z * weightOriginal + inputXYZ.Z * weightInput) / (weightOriginal + weightInput);

  return xyzToRgb({ X, Y, Z });
};

export const shedLight = ({
  solid,
  light,
  weight,
}: {
  solid: SolidColorInput;
  light: SRGB;
  weight: number;
}): SolidColorInput => {
  const slopeBright = interpolate({
    original: solid.slopeBright,
    input: light,
    weightInput: weight,
  });
  const planeBright = interpolate({
    original: solid.planeBright,
    input: light,
    weightInput: weight,
  });

  const innerSlopeBright = interpolate({
    original: solid.innerSlopeBright,
    input: light,
    weightInput: weight / 4,
  });

  return { ...solid, slopeBright, planeBright, innerSlopeBright };
};
