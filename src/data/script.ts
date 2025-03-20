import fs from 'fs';
import path from 'path';

// 定义颜色类型
interface RawColor {
  id: string;
  name: string;
  tra_name: string;
  color_series: string;
  pinyin: string;
  font_color: string;
  is_bright: boolean;
  rgb: number[];
  hex: string;
  cmyk: number[];
  desc: string;
  figure: string;
}

interface RawData {
  data: {
    [colorSeries: string]: {
      hex: string;
      rgb: number[];
      colors: RawColor[];
    };
  };
}

// 定义输出的颜色类型
interface Color {
  id: number;
  name: string;
  pinyin: string;
  hex: string;
  rgb: number[];
  cmyk: number[];
  desc: string;
  series: string;
}

// 读取JSON文件
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, 'zhColors.json'), 'utf8')) as RawData;

// 提取所有颜色
const processedColors: Color[] = [];
let idCounter = 1;

// 处理每个颜色系列
Object.keys(jsonData.data).forEach(series => {
  const seriesData = jsonData.data[series];
  seriesData.colors.forEach(color => {
    // 只保留描述不为空的颜色，或者每个系列最多50个颜色
    if (color.desc || processedColors.filter(c => c.series === series).length < 50) {
      processedColors.push({
        id: idCounter++,
        name: color.name,
        pinyin: color.pinyin,
        hex: color.hex,
        rgb: color.rgb,
        cmyk: color.cmyk,
        desc: color.desc,
        series: color.color_series,
      });
    }
  });
});

// 生成TypeScript文件内容
const tsFileContent = `import { Color } from '@/lib/types';
import { hexToRgb, hexToCmyk } from '@/lib/color-utils';

// Chinese traditional colors
const zhColors: Color[] = ${JSON.stringify(processedColors, null, 2)
  .replace(/"([^"]+)":/g, '$1:')
  .replace(/"/g, "'")};

// Group colors by series
export const colorSeries = zhColors.reduce((acc, color) => {
  if (!acc[color.series!]) {
    acc[color.series!] = [];
  }
  acc[color.series!].push(color);
  return acc;
}, {} as Record<string, Color[]>);

export const seriesNames: Record<string, string> = {
  'white': '白色系',
  'red': '红色系',
  'yellow': '黄色系',
  'blue': '蓝色系',
  'green': '绿色系',
  'black': '黑色系',
  'purple': '紫色系',
};

export default zhColors;
`;

// 写入TypeScript文件
fs.writeFileSync(path.join(__dirname, 'zh-colors.ts'), tsFileContent, 'utf8');

console.log(`处理完成！总共处理了 ${processedColors.length} 个颜色`);