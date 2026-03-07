type SizeValue = string | number;
export type JustifyValue = "start" | "end" | "center" | "between" | "around" | "evenly";
export type AlignValue = "start" | "end" | "center" | "stretch" | "baseline";
export type OverflowValue = "auto" | "hidden" | "scroll" | "visible";

interface BlockLayout {
  f?: number | boolean;
  grow?: number | boolean;
  shrink?: number | boolean;

  col?: boolean;
  colReverse?: boolean;
  row?: boolean;
  rowReverse?: boolean;

  wrap?: boolean;
  wrapReverse?: boolean;
  nowrap?: boolean;

  p?: SizeValue | true;
  px?: SizeValue | true;
  py?: SizeValue | true;
  pt?: SizeValue | true;
  pr?: SizeValue | true;
  pb?: SizeValue | true;
  pl?: SizeValue | true;
  m?: SizeValue | true;
  mx?: SizeValue | true;
  my?: SizeValue | true;
  mt?: SizeValue | true;
  mr?: SizeValue | true;
  mb?: SizeValue | true;
  ml?: SizeValue | true;
  g?: SizeValue | true;
  gM?: SizeValue | true;
  gC?: SizeValue | true;

  over?: OverflowValue | boolean;
  overM?: OverflowValue | boolean;
  overC?: OverflowValue | boolean;
  hide?: boolean;
  hideM?: boolean;
  hideC?: boolean;
}

export type { BlockLayout };
