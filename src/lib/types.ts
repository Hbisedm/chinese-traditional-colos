export interface Color {
  id: number;
  name: string;
  pinyin: string;
  hex: string;
  rgb: [number, number, number];
  cmyk?: [number, number, number, number];
  desc?: string;
  series?: string;
}

export type ColorSeries = {
  id: string;
  name: string;
  colors: Color[];
};
