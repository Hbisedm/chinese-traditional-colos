import convert from 'color-convert';
import { Color } from './types';

export function hexToRgb(hex: string): [number, number, number] {
  // Remove # if present
  hex = hex.replace('#', '');

  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return [r, g, b];
}

export function rgbToHex(rgb: [number, number, number]): string {
  return '#' + convert.rgb.hex(rgb);
}

export function rgbToCmyk(rgb: [number, number, number]): [number, number, number, number] {
  return convert.rgb.cmyk(rgb) as [number, number, number, number];
}

export function hexToCmyk(hex: string): [number, number, number, number] {
  const rgb = hexToRgb(hex);
  return rgbToCmyk(rgb);
}

export function getContrastTextColor(hex: string): string {
  const rgb = hexToRgb(hex);
  // Calculate luminance - standard formula
  const luminance = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];

  // Return black for light colors, white for dark colors
  return luminance > 128 ? '#000000' : '#ffffff';
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function getRandomColor(colors: Color[]): Color {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
