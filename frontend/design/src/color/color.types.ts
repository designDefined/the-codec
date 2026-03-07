type Luminance = number;
type Chroma = number;
type Hue = number;

type Alpha = number;

export type Color = [Luminance, Chroma, Hue, Alpha?];
export type Tone = [Luminance, Chroma];
export type ColorConcrete = string;
