import { Color } from '@/lib/types';
import { hexToRgb, hexToCmyk } from '@/lib/color-utils';

// A selection of traditional Chinese colors
const zhColors: Color[] = [
  {
    id: 1,
    name: '薄云',
    pinyin: 'báo yún',
    hex: '#E5EAE8',
    rgb: [229, 234, 232],
    cmyk: [2, 89, 0, 0],
    desc: '',
    series: 'yellow'
  },
  {
    id: 42,
    name: '木瓜黄',
    pinyin: 'mù guā huáng',
    hex: '#F9C116',
    rgb: [
      249,
      193,
      22
    ],
    cmyk: [
      0,
      30,
      95,
      0
    ],
    desc: '',
    series: 'yellow'
  },
  {
    id: 43,
    name: '浅烙黄',
    pinyin: 'qiǎn lào huáng',
    hex: '#F9BD10',
    rgb: [
      249,
      189,
      16
    ],
    cmyk: [
      0,
      32,
      95,
      0
    ],
    desc: '',
    series: 'yellow'
  },
  {
    id: 44,
    name: '莲子白',
    pinyin: 'lián zi bái',
    hex: '#E5D3AA',
    rgb: [
      229,
      211,
      170
    ],
    cmyk: [
      11,
      18,
      39,
      1
    ],
    desc: '',
    series: 'yellow'
  },
  {
    id: 45,
    name: '谷黄',
    pinyin: 'gǔ huáng',
    hex: '#E8B004',
    rgb: [
      232,
      176,
      4
    ],
    cmyk: [
      5,
      35,
      99,
      0
    ],
    desc: '',
    series: 'yellow'
  },
  {
    id: 46,
    name: '栀子黄',
    pinyin: 'zhī zi huáng',
    hex: '#EBB10D',
    rgb: [
      235,
      177,
      13
    ],
    cmyk: [
      3,
      36,
      99,
      0
    ],
    desc: '',
    series: 'yellow'
  },
  {
    id: 47,
    name: '芥黄',
    pinyin: 'jiè huáng',
    hex: '#D9A40E',
    rgb: [
      217,
      164,
      14
    ],
    cmyk: [
      11,
      39,
      100,
      2
    ],
    desc: '',
    series: 'yellow'
  },
  {
    id: 48,
    name: '淡松烟',
    pinyin: 'dàn sōng yān',
    hex: '#4D4030',
    rgb: [
      77,
      64,
      48
    ],
    cmyk: [
      48,
      58,
      70,
      62
    ],
    desc: '',
    series: 'yellow'
  },
  {
    id: 49,
    name: '淡肉色',
    pinyin: 'dàn ròu sè',
    hex: '#F8E0B0',
    rgb: [
      248,
      224,
      176
    ],
    cmyk: [
      1,
      15,
      38,
      0
    ],
    desc: '',
    series: 'yellow'
  },
  {
    id: 50,
    name: '麦芽糖黄',
    pinyin: 'mài yá táng huáng',
    hex: '#F9D27D',
    rgb: [
      249,
      210,
      125
    ],
    cmyk: [
      0,
      23,
      59,
      0
    ],
    desc: '',
    series: 'yellow'
  },
  {
    id: 51,
    name: '樱草色',
    pinyin: 'yīng cǎo sè',
    hex: '#EAFF56',
    rgb: [
      234,
      255,
      86
    ],
    cmyk: [
      8,
      0,
      66,
      0
    ],
    desc: '淡黄色',
    series: 'yellow'
  },
  {
    id: 52,
    name: '鹅黄',
    pinyin: 'é huáng',
    hex: '#FFF143',
    rgb: [
      255,
      241,
      67
    ],
    cmyk: [
      0,
      5,
      74,
      0
    ],
    desc: '淡黄色（鹅嘴的颜色，高明度微偏红黄色）',
    series: 'yellow'
  },
  {
    id: 53,
    name: '鸭黄',
    pinyin: 'yā huáng',
    hex: '#FAFF72',
    rgb: [
      250,
      255,
      114
    ],
    cmyk: [
      2,
      0,
      55,
      0
    ],
    desc: '小鸭毛的黄色',
    series: 'yellow'
  },
  {
    id: 54,
    name: '杏黄',
    pinyin: 'xìng huáng',
    hex: '#FFA631',
    rgb: [
      255,
      166,
      49
    ],
    cmyk: [
      0,
      35,
      81,
      0
    ],
    desc: '成熟杏子的黄色（Y100M20~30感觉的色彩，比较常用且有浓郁中国味道）',
    series: 'yellow'
  },
  {
    id: 55,
    name: '橙黄',
    pinyin: 'chéng huáng',
    hex: '#FFA400',
    rgb: [
      255,
      164,
      0
    ],
    cmyk: [
      0,
      36,
      100,
      0
    ],
    desc: '同上。（Y100M50感觉的色彩，现代感比较强。广告上用得较多）',
    series: 'yellow'
  },
  {
    id: 56,
    name: '橙色',
    pinyin: 'chéng sè',
    hex: '#FA8C35',
    rgb: [
      250,
      140,
      53
    ],
    cmyk: [
      0,
      44,
      79,
      2
    ],
    desc: '界于红色和黄色之间的混合色',
    series: 'yellow'
  },
  {
    id: 57,
    name: '杏红',
    pinyin: 'xìng hóng',
    hex: '#FF8C31',
    rgb: [
      255,
      140,
      49
    ],
    cmyk: [
      0,
      45,
      81,
      0
    ],
    desc: '成熟杏子偏红色的一种颜色',
    series: 'yellow'
  },
  {
    id: 58,
    name: '橘黄',
    pinyin: 'jú huáng',
    hex: '#FF8936',
    rgb: [
      255,
      137,
      54
    ],
    cmyk: [
      0,
      46,
      79,
      0
    ],
    desc: '柑橘的黄色。',
    series: 'yellow'
  },
  {
    id: 59,
    name: '橘红',
    pinyin: 'jú hóng',
    hex: '#FF7500',
    rgb: [
      255,
      117,
      0
    ],
    cmyk: [
      0,
      54,
      100,
      0
    ],
    desc: '柑橘皮所呈现的红色。',
    series: 'yellow'
  },
  {
    id: 60,
    name: '姜黄',
    pinyin: 'jiāng huáng',
    hex: '#FFC773',
    rgb: [
      255,
      199,
      115
    ],
    cmyk: [
      0,
      22,
      55,
      0
    ],
    desc: '中药名。别名黄姜。为姜科植物姜黄的根茎。又指人脸色不正,呈黄白色',
    series: 'yellow'
  },
  {
    id: 61,
    name: '赤金',
    pinyin: 'chì jīn',
    hex: '#F2BE45',
    rgb: [
      242,
      190,
      69
    ],
    cmyk: [
      0,
      21,
      71,
      5
    ],
    desc: '足金的颜色',
    series: 'yellow'
  },
  {
    id: 62,
    name: '缃色',
    pinyin: 'xiāng sè',
    hex: '#F0C239',
    rgb: [
      240,
      194,
      57
    ],
    cmyk: [
      0,
      19,
      76,
      6
    ],
    desc: '浅黄色',
    series: 'yellow'
  },
  {
    id: 63,
    name: '秋香色',
    pinyin: 'qiū xiāng sè',
    hex: '#D9B611',
    rgb: [
      217,
      182,
      17
    ],
    cmyk: [
      0,
      16,
      92,
      15
    ],
    desc: '浅橄榄色浅黄绿色。（直接在Y中掺入k10~30可得到不同浓淡的该类色彩）',
    series: 'yellow'
  },
  {
    id: 64,
    name: '金色',
    pinyin: 'jīn sè',
    hex: '#EACD76',
    rgb: [
      234,
      205,
      118
    ],
    cmyk: [
      0,
      12,
      50,
      8
    ],
    desc: '平均为深黄色带光泽的颜色',
    series: 'yellow'
  },
  {
    id: 65,
    name: '牙色',
    pinyin: 'yá sè',
    hex: '#EEDEB0',
    rgb: [
      238,
      222,
      176
    ],
    cmyk: [
      0,
      7,
      26,
      7
    ],
    desc: '与象牙相似的淡黄色（暖白）',
    series: 'yellow'
  },
  {
    id: 66,
    name: '枯黄',
    pinyin: 'kū huáng',
    hex: '#D3B17D',
    rgb: [
      211,
      177,
      125
    ],
    cmyk: [
      0,
      16,
      41,
      17
    ],
    desc: '干枯焦黄',
    series: 'yellow'
  },
  {
    id: 67,
    name: '黄栌',
    pinyin: 'huáng lú',
    hex: '#E29C45',
    rgb: [
      226,
      156,
      69
    ],
    cmyk: [
      0,
      31,
      69,
      11
    ],
    desc: '一种落叶灌木，花黄绿色,叶子秋天变成红色。木材黄色可做染料。',
    series: 'yellow'
  },
  {
    id: 68,
    name: '昏黄',
    pinyin: 'hūn huáng',
    hex: '#C89B40',
    rgb: [
      200,
      155,
      64
    ],
    cmyk: [
      0,
      23,
      68,
      22
    ],
    desc: '形容天色、灯光等呈幽暗的黄色',
    series: 'yellow'
  },
  {
    id: 69,
    name: '棕黄',
    pinyin: 'zōng huáng',
    hex: '#AE7000',
    rgb: [
      174,
      112,
      0
    ],
    cmyk: [
      0,
      36,
      100,
      32
    ],
    desc: '浅褐色。',
    series: 'yellow'
  },
  {
    id: 70,
    name: '棕色',
    pinyin: 'zōng sè',
    hex: '#B25D25',
    rgb: [
      178,
      93,
      37
    ],
    cmyk: [
      0,
      48,
      79,
      30
    ],
    desc: '棕毛的颜色,即褐色。1，在红色和黄色之间的任何一种颜色2，适中的暗淡和适度的浅黑。',
    series: 'yellow'
  },
  {
    id: 71,
    name: '茶色',
    pinyin: 'chá sè',
    hex: '#B35C44',
    rgb: [
      179,
      92,
      68
    ],
    cmyk: [
      0,
      49,
      62,
      30
    ],
    desc: '一种比栗色稍红的棕橙色至浅棕色',
    series: 'yellow'
  },
  {
    id: 72,
    name: '棕红',
    pinyin: 'zōng hóng',
    hex: '#9B4400',
    rgb: [
      155,
      68,
      0
    ],
    cmyk: [
      0,
      56,
      100,
      39
    ],
    desc: '红褐色。',
    series: 'yellow'
  },
  {
    id: 73,
    name: '赭',
    pinyin: 'zhě',
    hex: '#9C5333',
    rgb: [
      156,
      83,
      51
    ],
    cmyk: [
      0,
      47,
      67,
      39
    ],
    desc: '赤红如赭土的颜料,古人用以饰面',
    series: 'yellow'
  },
  {
    id: 74,
    name: '驼色',
    pinyin: 'tuó sè',
    hex: '#A88462',
    rgb: [
      168,
      132,
      98
    ],
    cmyk: [
      0,
      21,
      42,
      34
    ],
    desc: '一种比咔叽色稍红而微淡、比肉桂色黄而稍淡和比核桃棕色黄而暗的浅黄棕色',
    series: 'yellow'
  },
  {
    id: 75,
    name: '秋色',
    pinyin: 'qiū sè',
    hex: '#896C39',
    rgb: [
      137,
      108,
      57
    ],
    cmyk: [
      0,
      21,
      58,
      46
    ],
    desc: '1，中常橄榄棕色,它比一般橄榄棕色稍暗,且稍稍绿些。2，古以秋为金,其色白,故代指白色。',
    series: 'yellow'
  },
  {
    id: 76,
    name: '棕绿',
    pinyin: 'zōng lǜ',
    hex: '#827100',
    rgb: [
      130,
      113,
      0
    ],
    cmyk: [
      0,
      13,
      100,
      49
    ],
    desc: '绿中泛棕色的一种颜色',
    series: 'yellow'
  },
  {
    id: 77,
    name: '褐色',
    pinyin: 'hè sè',
    hex: '#6E511E',
    rgb: [
      110,
      81,
      30
    ],
    cmyk: [
      0,
      26,
      73,
      57
    ],
    desc: '黄黑色',
    series: 'yellow'
  },
  {
    id: 78,
    name: '棕黑',
    pinyin: 'zōng hēi',
    hex: '#7C4B00',
    rgb: [
      124,
      75,
      0
    ],
    cmyk: [
      0,
      40,
      100,
      51
    ],
    desc: '深棕色。',
    series: 'yellow'
  },
  {
    id: 79,
    name: '赭色',
    pinyin: 'zhě sè',
    hex: '#955539',
    rgb: [
      149,
      85,
      57
    ],
    cmyk: [
      0,
      43,
      62,
      42
    ],
    desc: '红色、赤红色。',
    series: 'yellow'
  },
  {
    id: 80,
    name: '栗色',
    pinyin: 'lì sè',
    hex: '#60281E',
    rgb: [
      96,
      40,
      30
    ],
    cmyk: [
      0,
      58,
      69,
      62
    ],
    desc: '栗壳的颜色。即紫黑色',
    series: 'yellow'
  },
  {
    id: 81,
    name: '新禾绿',
    pinyin: 'xīn hé lǜ',
    hex: '#D2B116',
    rgb: [
      210,
      177,
      22
    ],
    cmyk: [
      17,
      29,
      100,
      4
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 82,
    name: '淡灰绿',
    pinyin: 'dàn huī lǜ',
    hex: '#AD9E5F',
    rgb: [
      173,
      158,
      85
    ],
    cmyk: [
      30,
      30,
      70,
      12
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 83,
    name: '草灰绿',
    pinyin: 'cǎo huī lǜ',
    hex: '#8E804B',
    rgb: [
      142,
      128,
      75
    ],
    cmyk: [
      38,
      38,
      76,
      24
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 84,
    name: '苔绿',
    pinyin: 'tái lǜ',
    hex: '#887322',
    rgb: [
      136,
      115,
      34
    ],
    cmyk: [
      36,
      42,
      100,
      29
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 85,
    name: '碧螺春绿',
    pinyin: 'bì luó chūn lǜ',
    hex: '#867018',
    rgb: [
      134,
      112,
      24
    ],
    cmyk: [
      36,
      42,
      100,
      30
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 86,
    name: '潭水绿',
    pinyin: 'tán shuǐ lǜ',
    hex: '#645822',
    rgb: [
      100,
      88,
      34
    ],
    cmyk: [
      48,
      48,
      100,
      45
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 87,
    name: '橄榄绿',
    pinyin: 'gǎn lǎn lǜ',
    hex: '#5E5314',
    rgb: [
      94,
      83,
      20
    ],
    cmyk: [
      50,
      50,
      10,
      48
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 88,
    name: '枯绿',
    pinyin: 'kū lǜ',
    hex: '#B78D12',
    rgb: [
      183,
      141,
      18
    ],
    cmyk: [
      21,
      43,
      100,
      11
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 89,
    name: '粽叶绿',
    pinyin: 'zòng yè lǜ',
    hex: '#876818',
    rgb: [
      135,
      104,
      24
    ],
    cmyk: [
      32,
      50,
      100,
      31
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 90,
    name: '灰绿',
    pinyin: 'huī lǜ',
    hex: '#8A6913',
    rgb: [
      138,
      105,
      19
    ],
    cmyk: [
      31,
      51,
      100,
      30
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 91,
    name: '暗海水绿',
    pinyin: 'àn hǎi shuǐ lǜ',
    hex: '#584717',
    rgb: [
      88,
      71,
      23
    ],
    cmyk: [
      45,
      56,
      100,
      56
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 92,
    name: '棕榈绿',
    pinyin: 'zōng lǘ lǜ',
    hex: '#5B4913',
    rgb: [
      91,
      73,
      19
    ],
    cmyk: [
      45,
      55,
      100,
      54
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 93,
    name: '蜴蜊绿',
    pinyin: 'yì lí lǜ',
    hex: '#835E1D',
    rgb: [
      131,
      94,
      29
    ],
    cmyk: [
      31,
      57,
      100,
      33
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 94,
    name: '蟹壳绿',
    pinyin: 'xiè ké lǜ',
    hex: '#513C20',
    rgb: [
      81,
      60,
      32
    ],
    cmyk: [
      43,
      63,
      88,
      61
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 95,
    name: '古铜绿',
    pinyin: 'gǔ tóng lǜ',
    hex: '#533C1B',
    rgb: [
      83,
      60,
      27
    ],
    cmyk: [
      42,
      64,
      94,
      60
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 96,
    name: '焦茶绿',
    pinyin: 'jiāo chá lǜ',
    hex: '#553B18',
    rgb: [
      85,
      59,
      24
    ],
    cmyk: [
      41,
      66,
      94,
      60
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 97,
    name: '石绿',
    pinyin: 'shí lǜ',
    hex: '#57C3C2',
    rgb: [
      87,
      195,
      194
    ],
    cmyk: [
      78,
      36,
      0,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 98,
    name: '竹篁绿',
    pinyin: 'zhú huáng lǜ',
    hex: '#B9DEC9',
    rgb: [
      185,
      222,
      201
    ],
    cmyk: [
      40,
      0,
      30,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 99,
    name: '粉绿',
    pinyin: 'fěn lǜ',
    hex: '#83CBAC',
    rgb: [
      131,
      203,
      172
    ],
    cmyk: [
      64,
      0,
      46,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 100,
    name: '美蝶绿',
    pinyin: 'měi dié lǜ',
    hex: '#12AA9C',
    rgb: [
      18,
      170,
      156
    ],
    cmyk: [
      95,
      0,
      52,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 101,
    name: '毛绿',
    pinyin: 'máo lǜ',
    hex: '#66C18C',
    rgb: [
      102,
      193,
      140
    ],
    cmyk: [
      75,
      0,
      61,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 102,
    name: '蔻梢绿',
    pinyin: 'kòu shāo lǜ',
    hex: '#5DBE8A',
    rgb: [
      93,
      190,
      138
    ],
    cmyk: [
      78,
      0,
      62,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 103,
    name: '麦苗绿',
    pinyin: 'mài miáo lǜ',
    hex: '#55BB8A',
    rgb: [
      85,
      187,
      138
    ],
    cmyk: [
      81,
      0,
      62,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 104,
    name: '蛙绿',
    pinyin: 'wā lǜ',
    hex: '#45B787',
    rgb: [
      69,
      183,
      135
    ],
    cmyk: [
      86,
      0,
      63,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 105,
    name: '铜绿',
    pinyin: 'tóng lǜ',
    hex: '#2BAE85',
    rgb: [
      43,
      174,
      133
    ],
    cmyk: [
      92,
      0,
      64,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 106,
    name: '竹绿',
    pinyin: 'zhú lǜ',
    hex: '#1BA784',
    rgb: [
      27,
      167,
      132
    ],
    cmyk: [
      96,
      0,
      64,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 107,
    name: '蓝绿',
    pinyin: 'lán lǜ',
    hex: '#12A182',
    rgb: [
      18,
      161,
      130
    ],
    cmyk: [
      98,
      2,
      64,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 108,
    name: '玉簪绿',
    pinyin: 'yù zān lǜ',
    hex: '#A4CAB6',
    rgb: [
      164,
      202,
      182
    ],
    cmyk: [
      49,
      5,
      37,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 109,
    name: '青矾绿',
    pinyin: 'qīng fán lǜ',
    hex: '#2C9678',
    rgb: [
      44,
      150,
      120
    ],
    cmyk: [
      96,
      12,
      66,
      2
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 110,
    name: '草原远绿',
    pinyin: 'cǎo yuán yuǎn lǜ',
    hex: '#9ABEAF',
    rgb: [
      154,
      190,
      175
    ],
    cmyk: [
      52,
      11,
      37,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 111,
    name: '梧枝绿',
    pinyin: 'wú zhī lǜ',
    hex: '#69A794',
    rgb: [
      105,
      167,
      148
    ],
    cmyk: [
      74,
      14,
      51,
      1
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 112,
    name: '浪花绿',
    pinyin: 'làng huā lǜ',
    hex: '#92B3A5',
    rgb: [
      146,
      179,
      165
    ],
    cmyk: [
      55,
      16,
      40,
      1
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 113,
    name: '海王绿',
    pinyin: 'hǎi wáng lǜ',
    hex: '#248067',
    rgb: [
      36,
      128,
      103
    ],
    cmyk: [
      99,
      23,
      70,
      10
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 114,
    name: '亚丁绿',
    pinyin: 'yà dīng lǜ',
    hex: '#428675',
    rgb: [
      66,
      134,
      117
    ],
    cmyk: [
      88,
      24,
      61,
      9
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 115,
    name: '飞泉绿',
    pinyin: 'fēi quán lǜ',
    hex: '#497568',
    rgb: [
      73,
      117,
      104
    ],
    cmyk: [
      82,
      32,
      60,
      20
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 116,
    name: '苍绿',
    pinyin: 'cāng lǜ',
    hex: '#223E36',
    rgb: [
      34,
      62,
      54
    ],
    cmyk: [
      93,
      46,
      70,
      61
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 117,
    name: '深海绿',
    pinyin: 'shēn hǎi lǜ',
    hex: '#1A3B32',
    rgb: [
      26,
      59,
      50
    ],
    cmyk: [
      98,
      46,
      73,
      63
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 118,
    name: '苷蓝绿',
    pinyin: 'gān lán lǜ',
    hex: '#1F2623',
    rgb: [
      31,
      38,
      35
    ],
    cmyk: [
      82,
      60,
      65,
      80
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 119,
    name: '莽丛绿',
    pinyin: 'mǎng cóng lǜ',
    hex: '#141E1B',
    rgb: [
      20,
      30,
      27
    ],
    cmyk: [
      90,
      62,
      67,
      86
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 120,
    name: '明绿',
    pinyin: 'míng lǜ',
    hex: '#9ECCAB',
    rgb: [
      158,
      204,
      171
    ],
    cmyk: [
      53,
      1,
      44,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 121,
    name: '田园绿',
    pinyin: 'tián yuán lǜ',
    hex: '#68B88E',
    rgb: [
      104,
      184,
      142
    ],
    cmyk: [
      75,
      0,
      59,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 122,
    name: '翠绿',
    pinyin: 'cuì lǜ',
    hex: '#20A162',
    rgb: [
      32,
      161,
      98
    ],
    cmyk: [
      98,
      0,
      82,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 123,
    name: '淡绿',
    pinyin: 'dàn lǜ',
    hex: '#61AC85',
    rgb: [
      97,
      172,
      133
    ],
    cmyk: [
      78,
      6,
      62,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 124,
    name: '葱绿',
    pinyin: 'cōng lǜ',
    hex: '#40A070',
    rgb: [
      64,
      160,
      112
    ],
    cmyk: [
      90,
      7,
      73,
      0
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 125,
    name: '孔雀绿',
    pinyin: 'kǒng què lǜ',
    hex: '#229453',
    rgb: [
      34,
      148,
      83
    ],
    cmyk: [
      99,
      10,
      91,
      2
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 126,
    name: '蟾绿',
    pinyin: 'chán lǜ',
    hex: '#3C9566',
    rgb: [
      60,
      149,
      102
    ],
    cmyk: [
      92,
      14,
      76,
      2
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 127,
    name: '宫殿绿',
    pinyin: 'gōng diàn lǜ',
    hex: '#20894D',
    rgb: [
      32,
      137,
      77
    ],
    cmyk: [
      100,
      17,
      92,
      5
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 128,
    name: '松霜绿',
    pinyin: 'sōng shuāng lǜ',
    hex: '#83A78D',
    rgb: [
      131,
      167,
      141
    ],
    cmyk: [
      61,
      19,
      52,
      3
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 129,
    name: '蛋白石绿',
    pinyin: 'dàn bái shí lǜ',
    hex: '#579572',
    rgb: [
      87,
      149,
      114
    ],
    cmyk: [
      81,
      19,
      67,
      4
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 130,
    name: '薄荷绿',
    pinyin: 'bò he lǜ',
    hex: '#207F4C',
    rgb: [
      32,
      127,
      76
    ],
    cmyk: [
      100,
      22,
      90,
      10
    ],
    desc: '',
    series: 'green'
  },
  {
    id: 131,
    name: '鸭卵青',
    pinyin: 'yā luǎn qīng',
    hex: '#E0EEE8',
    rgb: [
      224,
      238,
      232
    ],
    cmyk: [
      6,
      0,
      3,
      7
    ],
    desc: '淡青灰色，极淡的青绿色',
    series: 'green'
  },
  {
    id: 132,
    name: '青白',
    pinyin: 'qīng bái',
    hex: '#C0EBD7',
    rgb: [
      192,
      235,
      215
    ],
    cmyk: [
      18,
      0,
      9,
      8
    ],
    desc: '白而发青,尤指脸没有血色',
    series: 'green'
  },
  {
    id: 133,
    name: '蟹壳青',
    pinyin: 'xiè ké qīng',
    hex: '#BBCDC5',
    rgb: [
      187,
      205,
      197
    ],
    cmyk: [
      9,
      0,
      4,
      20
    ],
    desc: '深灰绿色',
    series: 'green'
  },
  {
    id: 134,
    name: '松花色',
    pinyin: 'sōng huā sè',
    hex: '#BCE672',
    rgb: [
      188,
      230,
      114
    ],
    cmyk: [
      18,
      0,
      50,
      10
    ],
    desc: '浅黄绿色。（松树花粉的颜色）《红楼梦》中提及松花配桃红为娇艳',
    series: 'green'
  },
  {
    id: 135,
    name: '柳黄',
    pinyin: 'liǔ huáng',
    hex: '#C9DD22',
    rgb: [
      201,
      221,
      34
    ],
    cmyk: [
      9,
      0,
      85,
      13
    ],
    desc: '像柳树芽那样的浅黄色',
    series: 'green'
  },
  {
    id: 136,
    name: '嫩绿',
    pinyin: 'nèn lǜ',
    hex: '#BDDD22',
    rgb: [
      189,
      221,
      34
    ],
    cmyk: [
      14,
      0,
      85,
      13
    ],
    desc: '像刚长出的嫩叶的浅绿色',
    series: 'green'
  },
  {
    id: 137,
    name: '柳绿',
    pinyin: 'liǔ lǜ',
    hex: '#AFDD22',
    rgb: [
      175,
      221,
      34
    ],
    cmyk: [
      21,
      0,
      85,
      13
    ],
    desc: '柳叶的青绿色',
    series: 'green'
  },
  {
    id: 138,
    name: '葱黄',
    pinyin: 'cōng huáng',
    hex: '#A3D900',
    rgb: [
      163,
      217,
      0
    ],
    cmyk: [
      25,
      0,
      100,
      15
    ],
    desc: '黄绿色，嫩黄色',
    series: 'green'
  },
  {
    id: 139,
    name: '葱绿',
    pinyin: 'cōng lǜ',
    hex: '#9ED900',
    rgb: [
      158,
      217,
      0
    ],
    cmyk: [
      27,
      0,
      100,
      15
    ],
    desc: '1:浅绿又略显微黄的颜色 2:草木青翠的样子',
    series: 'green'
  },
  {
    id: 140,
    name: '豆绿',
    pinyin: 'dòu lǜ',
    hex: '#9ED048',
    rgb: [
      158,
      208,
      72
    ],
    cmyk: [
      24,
      0,
      65,
      18
    ],
    desc: '浅黄绿色',
    series: 'green'
  },
  {
    id: 141,
    name: '豆青',
    pinyin: 'dòu qīng',
    hex: '#96CE54',
    rgb: [
      150,
      206,
      84
    ],
    cmyk: [
      27,
      0,
      59,
      19
    ],
    desc: '浅青绿色',
    series: 'green'
  },
  {
    id: 142,
    name: '油绿',
    pinyin: 'yóu lǜ',
    hex: '#00BC12',
    rgb: [
      0,
      188,
      18
    ],
    cmyk: [
      100,
      0,
      90,
      26
    ],
    desc: '光润而浓绿的颜色。以上几种绿色都是明亮可爱的色彩。',
    series: 'green'
  },
  {
    id: 143,
    name: '葱青',
    pinyin: 'cōng qīng',
    hex: '#0EB83A',
    rgb: [
      14,
      184,
      58
    ],
    cmyk: [
      92,
      0,
      68,
      28
    ],
    desc: '淡淡的青绿色',
    series: 'green'
  },
  {
    id: 144,
    name: '青葱',
    pinyin: 'qīng cōng',
    hex: '#0AA344',
    rgb: [
      10,
      163,
      68
    ],
    cmyk: [
      94,
      0,
      58,
      36
    ],
    desc: '翠绿色,形容植物浓绿',
    series: 'green'
  },
  {
    id: 145,
    name: '松柏绿',
    pinyin: 'sōng bǎi lǜ',
    hex: '#21A675',
    rgb: [
      33,
      166,
      117
    ],
    cmyk: [
      80,
      0,
      30,
      35
    ],
    desc: '经冬松柏叶的深绿',
    series: 'green'
  },
  {
    id: 146,
    name: '松花绿',
    pinyin: 'sōng huā lǜ',
    hex: '#057748',
    rgb: [
      5,
      119,
      72
    ],
    cmyk: [
      96,
      0,
      39,
      53
    ],
    desc: '亦作\'松花\'、\'松绿\'。偏黑的深绿色,墨绿。',
    series: 'green'
  },
  {
    id: 147,
    name: '绿沈',
    pinyin: 'lǜ shěn',
    hex: '#0C8918',
    rgb: [
      12,
      137,
      24
    ],
    cmyk: [
      91,
      0,
      82,
      46
    ],
    desc: '（沉）深绿',
    series: 'green'
  },
  {
    id: 148,
    name: '绿色',
    pinyin: 'lǜ sè',
    hex: '#00E500',
    rgb: [
      0,
      229,
      0
    ],
    cmyk: [
      100,
      0,
      100,
      10
    ],
    desc: '1，在光谱中介于蓝与黄之间的那种颜色。2，本义青中带黄的颜色。3，引申为黑色，如绿鬓乌黑而光亮的鬓发。代指为青春年少的容颜。（现代色彩研究中，把绿色提高到了一个重要的位置，和其它红黄兰三原色并列研究，称做\'心理原色\'之一）',
    series: 'green'
  },
  {
    id: 149,
    name: '草绿',
    pinyin: 'cǎo lǜ',
    hex: '#40DE5A',
    rgb: [
      64,
      222,
      90
    ],
    cmyk: [
      71,
      0,
      59,
      13
    ],
    desc: '绿而略黄的颜色。',
    series: 'green'
  },
  {
    id: 150,
    name: '青翠',
    pinyin: 'qīng cuì',
    hex: '#00E079',
    rgb: [
      0,
      224,
      121
    ],
    cmyk: [
      100,
      0,
      46,
      12
    ],
    desc: '鲜绿',
    series: 'green'
  },
  {
    id: 151,
    name: '青色',
    pinyin: 'qīng sè',
    hex: '#00E09E',
    rgb: [
      0,
      224,
      158
    ],
    cmyk: [
      100,
      0,
      29,
      12
    ],
    desc: '1，一类带绿的蓝色,中等深浅,高度饱和。3，本义是蓝色。4，一般指深绿色。5，也指黑色。6，四色印刷中的一色。2，特指三补色中的一色。',
    series: 'green'
  },
  {
    id: 152,
    name: '翡翠色',
    pinyin: 'fěi cuì sè',
    hex: '#3DE1AD',
    rgb: [
      61,
      225,
      173
    ],
    cmyk: [
      73,
      0,
      23,
      12
    ],
    desc: '1，翡翠鸟羽毛的青绿色。2，翡翠宝石的颜色。（C-Y≥30的系列色彩，多与白色配合以体现清新明丽感觉，与黑色配合效果不好该色个性柔弱，会被黑色牵制）',
    series: 'green'
  },
  {
    id: 153,
    name: '碧绿',
    pinyin: 'bì lǜ',
    hex: '#2ADD9C',
    rgb: [
      42,
      221,
      156
    ],
    cmyk: [
      81,
      0,
      29,
      13
    ],
    desc: '鲜艳的青绿色',
    series: 'green'
  },
  {
    id: 154,
    name: '玉色',
    pinyin: 'yù sè',
    hex: '#2EDFA3',
    rgb: [
      46,
      223,
      163
    ],
    cmyk: [
      79,
      0,
      27,
      13
    ],
    desc: '玉的颜色，高雅的淡绿、淡青色',
    series: 'green'
  },
  {
    id: 155,
    name: '缥',
    pinyin: 'piāo',
    hex: '#7FECAD',
    rgb: [
      127,
      236,
      173
    ],
    cmyk: [
      46,
      0,
      27,
      7
    ],
    desc: '绿色而微白',
    series: 'green'
  },
  {
    id: 156,
    name: '艾绿',
    pinyin: 'ài lǜ',
    hex: '#A4E2C6',
    rgb: [
      164,
      226,
      198
    ],
    cmyk: [
      27,
      0,
      12,
      11
    ],
    desc: '艾草的颜色。偏苍白的绿色',
    series: 'green'
  },
  {
    id: 157,
    name: '石青',
    pinyin: 'shí qīng',
    hex: '#7BCFA6',
    rgb: [
      123,
      207,
      166
    ],
    cmyk: [
      41,
      0,
      20,
      19
    ],
    desc: '淡灰绿色',
    series: 'green'
  },
  {
    id: 158,
    name: '碧色',
    pinyin: 'bì sè',
    hex: '#1BD1A5',
    rgb: [
      27,
      209,
      165
    ],
    cmyk: [
      87,
      0,
      21,
      18
    ],
    desc: '1，青绿色。2，青白色,浅蓝色。',
    series: 'green'
  },
  {
    id: 159,
    name: '青碧',
    pinyin: 'qīng bì',
    hex: '#48C0A3',
    rgb: [
      72,
      192,
      163
    ],
    cmyk: [
      62,
      0,
      15,
      25
    ],
    desc: '鲜艳的青蓝色',
    series: 'green'
  },
  {
    id: 160,
    name: '竹青',
    pinyin: 'zhú qīng',
    hex: '#789262',
    rgb: [
      120,
      146,
      98
    ],
    cmyk: [
      18,
      0,
      33,
      43
    ],
    desc: '竹子的绿色',
    series: 'green'
  },
  {
    id: 161,
    name: '鸦青',
    pinyin: 'yā qīng',
    hex: '#424C50',
    rgb: [
      66,
      76,
      80
    ],
    cmyk: [
      18,
      5,
      0,
      69
    ],
    desc: '鸦羽的颜色。即黑而带有紫绿光的颜色。',
    series: 'green'
  },
  {
    id: 162,
    name: '葱倩',
    pinyin: 'cōng qiàn',
    hex: '#0EB840',
    rgb: [
      14,
      184,
      64
    ],
    cmyk: [
      92,
      0,
      65,
      28
    ],
    desc: '青绿色',
    series: 'green'
  },
  {
    id: 163,
    name: '湖绿',
    pinyin: 'hú lǜ',
    hex: '#25F8CB',
    rgb: [
      37,
      248,
      203
    ],
    cmyk: [
      85,
      0,
      18,
      3
    ],
    desc: '皆是浅色。深色淡色，颜色深的或浅的，不再一一列出。',
    series: 'green'
  },
  {
    id: 164,
    name: '月灰',
    pinyin: 'yuè huī',
    hex: '#B7AE8F',
    rgb: [
      183,
      174,
      143
    ],
    cmyk: [
      28,
      26,
      45,
      7
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 165,
    name: '燕羽灰',
    pinyin: 'yàn yǔ huī',
    hex: '#685E48',
    rgb: [
      104,
      94,
      72
    ],
    cmyk: [
      47,
      47,
      65,
      42
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 166,
    name: '蟹壳灰',
    pinyin: 'xiè ké huī',
    hex: '#695E45',
    rgb: [
      105,
      94,
      69
    ],
    cmyk: [
      46,
      47,
      69,
      42
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 167,
    name: '银鼠灰',
    pinyin: 'yín shǔ huī',
    hex: '#B5AA90',
    rgb: [
      181,
      170,
      144
    ],
    cmyk: [
      28,
      27,
      43,
      8
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 168,
    name: '尘灰',
    pinyin: 'chén huī',
    hex: '#B6A476',
    rgb: [
      182,
      164,
      118
    ],
    cmyk: [
      26,
      31,
      57,
      10
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 169,
    name: '鹤灰',
    pinyin: 'hè huī',
    hex: '#4A4035',
    rgb: [
      74,
      64,
      53
    ],
    cmyk: [
      52,
      56,
      64,
      62
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 170,
    name: '百灵鸟灰',
    pinyin: 'bǎi líng niǎo huī',
    hex: '#B4A992',
    rgb: [
      180,
      169,
      146
    ],
    cmyk: [
      28,
      28,
      41,
      9
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 171,
    name: '松鼠灰',
    pinyin: 'sōng shǔ huī',
    hex: '#4F4032',
    rgb: [
      79,
      64,
      50
    ],
    cmyk: [
      46,
      59,
      68,
      61
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 172,
    name: '橄榄灰',
    pinyin: 'gǎn lǎn huī',
    hex: '#503E2A',
    rgb: [
      80,
      62,
      42
    ],
    cmyk: [
      44,
      61,
      76,
      62
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 173,
    name: '猴毛灰',
    pinyin: 'hóu máo huī',
    hex: '#97846C',
    rgb: [
      151,
      132,
      108
    ],
    cmyk: [
      32,
      40,
      53,
      22
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 174,
    name: '淡银灰',
    pinyin: 'dàn yín huī',
    hex: '#C1B2A3',
    rgb: [
      193,
      178,
      163
    ],
    cmyk: [
      22,
      28,
      34,
      6
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 175,
    name: '银灰',
    pinyin: 'yín huī',
    hex: '#918072',
    rgb: [
      145,
      128,
      114
    ],
    cmyk: [
      34,
      42,
      46,
      23
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 176,
    name: '海鸥灰',
    pinyin: 'hǎi ōu huī',
    hex: '#9A8878',
    rgb: [
      154,
      136,
      120
    ],
    cmyk: [
      42,
      40,
      46,
      20
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 177,
    name: '石板灰',
    pinyin: 'shí bǎn huī',
    hex: '#624941',
    rgb: [
      98,
      73,
      65
    ],
    cmyk: [
      39,
      60,
      58,
      51
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 178,
    name: '珠母灰',
    pinyin: 'zhū mǔ huī',
    hex: '#64483D',
    rgb: [
      100,
      72,
      61
    ],
    cmyk: [
      38,
      63,
      63,
      50
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 179,
    name: '蛛网灰',
    pinyin: 'zhū wǎng huī',
    hex: '#B7A091',
    rgb: [
      183,
      160,
      145
    ],
    cmyk: [
      23,
      35,
      38,
      10
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 180,
    name: '中红灰',
    pinyin: 'zhōng hóng huī',
    hex: '#8B614D',
    rgb: [
      139,
      97,
      77
    ],
    cmyk: [
      31,
      63,
      66,
      31
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 181,
    name: '淡铁灰',
    pinyin: 'dàn tiě huī',
    hex: '#5B423A',
    rgb: [
      91,
      66,
      58
    ],
    cmyk: [
      40,
      64,
      61,
      56
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 182,
    name: '中灰驼',
    pinyin: 'zhōng huī tuó',
    hex: '#603D30',
    rgb: [
      96,
      61,
      48
    ],
    cmyk: [
      37,
      72,
      72,
      52
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 183,
    name: '海报灰',
    pinyin: 'hǎi bào huī',
    hex: '#483332',
    rgb: [
      72,
      51,
      50
    ],
    cmyk: [
      45,
      68,
      57,
      66
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 184,
    name: '玫瑰灰',
    pinyin: 'méi guī huī',
    hex: '#4B2E2B',
    rgb: [
      175,
      46,
      43
    ],
    cmyk: [
      41,
      76,
      64,
      65
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 185,
    name: '淡玫瑰灰',
    pinyin: 'dàn méi guī huī',
    hex: '#B89485',
    rgb: [
      184,
      148,
      133
    ],
    cmyk: [
      21,
      43,
      43,
      9
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 186,
    name: '鼠背灰',
    pinyin: 'shǔ bèi huī',
    hex: '#73575C',
    rgb: [
      115,
      87,
      92
    ],
    cmyk: [
      41,
      64,
      44,
      36
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 187,
    name: '苍蝇灰',
    pinyin: 'cāng yíng huī',
    hex: '#36282B',
    rgb: [
      54,
      40,
      43
    ],
    cmyk: [
      57,
      72,
      54,
      74
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 188,
    name: '芦穗灰',
    pinyin: 'lú suì huī',
    hex: '#BDAEAD',
    rgb: [
      189,
      174,
      173
    ],
    cmyk: [
      25,
      31,
      26,
      5
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 189,
    name: '隐红灰',
    pinyin: 'yǐn hóng huī',
    hex: '#B598A1',
    rgb: [
      181,
      152,
      161
    ],
    cmyk: [
      26,
      43,
      26,
      6
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 190,
    name: '芦灰',
    pinyin: 'lú huī',
    hex: '#856D72',
    rgb: [
      133,
      109,
      114
    ],
    cmyk: [
      39,
      53,
      38,
      25
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 191,
    name: '暮云灰',
    pinyin: 'mù yún huī',
    hex: '#4F383E',
    rgb: [
      79,
      56,
      62
    ],
    cmyk: [
      49,
      71,
      49,
      58
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 192,
    name: '斑鸠灰',
    pinyin: 'bān jiū huī',
    hex: '#482936',
    rgb: [
      72,
      41,
      54
    ],
    cmyk: [
      49,
      82,
      46,
      63
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 193,
    name: '紫灰',
    pinyin: 'zǐ huī',
    hex: '#5D3F51',
    rgb: [
      93,
      63,
      81
    ],
    cmyk: [
      53,
      75,
      41,
      41
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 194,
    name: '古鼎灰',
    pinyin: 'gǔ dǐng huī',
    hex: '#36292F',
    rgb: [
      54,
      41,
      47
    ],
    cmyk: [
      63,
      74,
      52,
      70
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 195,
    name: '锌灰',
    pinyin: 'xīn huī',
    hex: '#7A7374',
    rgb: [
      122,
      115,
      116
    ],
    cmyk: [
      48,
      45,
      40,
      26
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 196,
    name: '鱼尾灰',
    pinyin: 'yú wěi huī',
    hex: '#5E616D',
    rgb: [
      94,
      97,
      109
    ],
    cmyk: [
      64,
      52,
      39,
      28
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 197,
    name: '鲸鱼灰',
    pinyin: 'jīng yú huī',
    hex: '#475164',
    rgb: [
      71,
      81,
      100
    ],
    cmyk: [
      78,
      60,
      40,
      31
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 198,
    name: '沙鱼灰',
    pinyin: 'shā yú huī',
    hex: '#35333C',
    rgb: [
      53,
      51,
      60
    ],
    cmyk: [
      76,
      70,
      51,
      60
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 199,
    name: '大理石灰',
    pinyin: 'dà lǐ shí huī',
    hex: '#C4CBCF',
    rgb: [
      196,
      203,
      207
    ],
    cmyk: [
      29,
      16,
      17,
      1
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 200,
    name: '水牛灰',
    pinyin: 'shuǐ niú huī',
    hex: '#2F2F35',
    rgb: [
      47,
      47,
      53
    ],
    cmyk: [
      77,
      68,
      54,
      66
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 201,
    name: '牛角灰',
    pinyin: 'niú jiǎo huī',
    hex: '#2D2E36',
    rgb: [
      45,
      46,
      54
    ],
    cmyk: [
      80,
      70,
      53,
      65
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 202,
    name: '星灰',
    pinyin: 'xīng huī',
    hex: '#B2BBBE',
    rgb: [
      178,
      187,
      190
    ],
    cmyk: [
      36,
      20,
      23,
      2
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 203,
    name: '淡蓝灰',
    pinyin: 'dàn lán huī',
    hex: '#5E7987',
    rgb: [
      94,
      121,
      135
    ],
    cmyk: [
      70,
      38,
      36,
      18
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 204,
    name: '嫩灰',
    pinyin: 'nèn huī',
    hex: '#74787A',
    rgb: [
      116,
      120,
      122
    ],
    cmyk: [
      55,
      40,
      40,
      23
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 205,
    name: '战舰灰',
    pinyin: 'zhàn jiàn huī',
    hex: '#495C69',
    rgb: [
      73,
      92,
      105
    ],
    cmyk: [
      77,
      50,
      41,
      31
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 206,
    name: '瓦罐灰',
    pinyin: 'wǎ guàn huī',
    hex: '#47484C',
    rgb: [
      71,
      72,
      76
    ],
    cmyk: [
      67,
      57,
      49,
      49
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 207,
    name: '青灰',
    pinyin: 'qīng huī',
    hex: '#2B333E',
    rgb: [
      43,
      51,
      62
    ],
    cmyk: [
      87,
      69,
      51,
      58
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 208,
    name: '垩灰',
    pinyin: 'è huī',
    hex: '#737C7B',
    rgb: [
      115,
      124,
      123
    ],
    cmyk: [
      57,
      37,
      42,
      21
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 209,
    name: '夏云灰',
    pinyin: 'xià yún huī',
    hex: '#617172',
    rgb: [
      97,
      113,
      114
    ],
    cmyk: [
      65,
      40,
      44,
      26
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 210,
    name: '黄昏灰',
    pinyin: 'huáng hūn huī',
    hex: '#474B4C',
    rgb: [
      71,
      75,
      76
    ],
    cmyk: [
      67,
      53,
      51,
      50
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 211,
    name: '镍灰',
    pinyin: 'niè huī',
    hex: '#9FA39A',
    rgb: [
      159,
      163,
      154
    ],
    cmyk: [
      40,
      27,
      36,
      8
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 212,
    name: '明灰',
    pinyin: 'míng huī',
    hex: '#8A988E',
    rgb: [
      138,
      152,
      142
    ],
    cmyk: [
      52,
      28,
      42,
      10
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 213,
    name: '淡绿灰',
    pinyin: 'dàn lǜ huī',
    hex: '#70887D',
    rgb: [
      112,
      136,
      125
    ],
    cmyk: [
      63,
      31,
      50,
      14
    ],
    desc: '',
    series: 'gray'
  },
  {
    id: 214,
    name: '灰色',
    pinyin: 'huī sè',
    hex: '#808080',
    rgb: [
      128,
      128,
      128
    ],
    cmyk: [
      0,
      0,
      0,
      50
    ],
    desc: '黑色和白色混和成的一种颜色',
    series: 'gray'
  },
  {
    id: 215,
    name: '鲛青',
    pinyin: 'jiāo qīng',
    hex: '#87723E',
    rgb: [
      135,
      114,
      62
    ],
    cmyk: [
      35,
      44,
      80,
      30
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 216,
    name: '青莲',
    pinyin: 'qīng lián',
    hex: '#8B2671',
    rgb: [
      139,
      38,
      113
    ],
    cmyk: [
      43,
      97,
      19,
      8
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 217,
    name: '花青',
    pinyin: 'huā qīng',
    hex: '#2376B7',
    rgb: [
      35,
      118,
      183
    ],
    cmyk: [
      95,
      45,
      10,
      1
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 218,
    name: '群青',
    pinyin: 'qún qīng',
    hex: '#1772B4',
    rgb: [
      23,
      114,
      180
    ],
    cmyk: [
      99,
      48,
      11,
      1
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 219,
    name: '霁青',
    pinyin: 'jì qīng',
    hex: '#63BBD0',
    rgb: [
      99,
      187,
      208
    ],
    cmyk: [
      74,
      2,
      24,
      0
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 220,
    name: '碧青',
    pinyin: 'bì qīng',
    hex: '#5CB3CC',
    rgb: [
      92,
      179,
      204
    ],
    cmyk: [
      77,
      7,
      24,
      0
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 221,
    name: '海青',
    pinyin: 'hǎi qīng',
    hex: '#22A2C3',
    rgb: [
      34,
      162,
      195
    ],
    cmyk: [
      92,
      10,
      25,
      1
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 222,
    name: '靛青',
    pinyin: 'diàn qīng',
    hex: '#1661AB',
    rgb: [
      22,
      97,
      171
    ],
    cmyk: [
      100,
      60,
      8,
      1
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 223,
    name: '钢青',
    pinyin: 'gāng qīng',
    hex: '#142334',
    rgb: [
      20,
      35,
      52
    ],
    cmyk: [
      100,
      82,
      51,
      64
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 224,
    name: '虾壳青',
    pinyin: 'xiā ké qīng',
    hex: '#869D9D',
    rgb: [
      134,
      157,
      157
    ],
    cmyk: [
      56,
      26,
      36,
      7
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 225,
    name: '青豆色',
    pinyin: 'qīng dòu sè',
    hex: '#9BAE86',
    rgb: [
      155,
      174,
      134
    ],
    cmyk: [
      11,
      0,
      23,
      32
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 226,
    name: '碧玉石',
    pinyin: 'bì yù shí',
    hex: '#569597',
    rgb: [
      86,
      149,
      151
    ],
    cmyk: [
      43,
      1,
      0,
      41
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 227,
    name: '鸭蛋青',
    pinyin: 'yā dàn qīng',
    hex: '#D1E3DB',
    rgb: [
      209,
      227,
      219
    ],
    cmyk: [
      8,
      0,
      4,
      11
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 228,
    name: '浅青瓷釉色',
    pinyin: 'qiǎn qīng cí yòu sè',
    hex: '#CADDD5',
    rgb: [
      202,
      221,
      213
    ],
    cmyk: [
      9,
      0,
      4,
      13
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 229,
    name: '龙泉青瓷釉色',
    pinyin: 'lóng quán qīng cí yòu sè',
    hex: '#B1C5B4',
    rgb: [
      177,
      197,
      180
    ],
    cmyk: [
      10,
      0,
      9,
      23
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 230,
    name: '蟹青',
    pinyin: 'xiè qīng',
    hex: '#7A988E',
    rgb: [
      122,
      152,
      142
    ],
    cmyk: [
      20,
      0,
      7,
      40
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 231,
    name: '青虾色',
    pinyin: 'qīng xiā sè',
    hex: '#7A988B',
    rgb: [
      122,
      152,
      139
    ],
    cmyk: [
      20,
      0,
      9,
      40
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 232,
    name: '竹月色',
    pinyin: 'zhú yuè sè',
    hex: '#5E90B8',
    rgb: [
      94,
      144,
      184
    ],
    cmyk: [
      49,
      22,
      0,
      28
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 233,
    name: '深竹月',
    pinyin: 'shēn zhú yuè',
    hex: '#2578B5',
    rgb: [
      37,
      120,
      181
    ],
    cmyk: [
      80,
      34,
      0,
      29
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 234,
    name: '毛月色',
    pinyin: 'máo yuè sè',
    hex: '#3A89B0',
    rgb: [
      58,
      137,
      176
    ],
    cmyk: [
      67,
      22,
      0,
      31
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 235,
    name: '深毛月色',
    pinyin: 'shēn máo yuè sè',
    hex: '#2B5F8E',
    rgb: [
      43,
      95,
      142
    ],
    cmyk: [
      70,
      33,
      0,
      44
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 236,
    name: '群青',
    pinyin: 'qún qīng',
    hex: '#084495',
    rgb: [
      8,
      68,
      149
    ],
    cmyk: [
      95,
      54,
      0,
      42
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 237,
    name: '绀青',
    pinyin: 'gàn qīng',
    hex: '#3F486C',
    rgb: [
      63,
      72,
      108
    ],
    cmyk: [
      42,
      33,
      0,
      58
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 238,
    name: '元青',
    pinyin: 'yuán qīng',
    hex: '#3E3C3D',
    rgb: [
      62,
      60,
      61
    ],
    cmyk: [
      0,
      3,
      2,
      76
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 239,
    name: '鉄青',
    pinyin: 'tiě qīng',
    hex: '#404A57',
    rgb: [
      64,
      74,
      87
    ],
    cmyk: [
      26,
      15,
      0,
      66
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 240,
    name: '青金色',
    pinyin: 'qīng jīn sè',
    hex: '#687FA5',
    rgb: [
      104,
      127,
      165
    ],
    cmyk: [
      37,
      23,
      0,
      35
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 241,
    name: '花青',
    pinyin: 'huā qīng',
    hex: '#546B83',
    rgb: [
      84,
      107,
      131
    ],
    cmyk: [
      36,
      18,
      0,
      49
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 242,
    name: '沙青',
    pinyin: 'shā qīng',
    hex: '#2B5E7D',
    rgb: [
      43,
      94,
      125
    ],
    cmyk: [
      66,
      25,
      0,
      51
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 243,
    name: '莹白',
    pinyin: 'yíng bái',
    hex: '#E3F9FD',
    rgb: [
      227,
      249,
      253
    ],
    cmyk: [
      10,
      2,
      0,
      1
    ],
    desc: '晶莹洁白',
    series: 'cyan'
  },
  {
    id: 244,
    name: '月白',
    pinyin: 'yuè bái',
    hex: '#D6ECF0',
    rgb: [
      214,
      236,
      240
    ],
    cmyk: [
      11,
      2,
      0,
      6
    ],
    desc: '淡蓝，因近似月色，故称。古人认为月亮的颜色并不是纯白，而是带着一点淡淡的蓝色。',
    series: 'cyan'
  },
  {
    id: 245,
    name: '苍色',
    pinyin: 'cāng sè',
    hex: '#75878A',
    rgb: [
      117,
      135,
      138
    ],
    cmyk: [
      15,
      2,
      0,
      46
    ],
    desc: '即各种颜色掺入黑色后的颜色',
    series: 'cyan'
  },
  {
    id: 246,
    name: '水色',
    pinyin: 'shuǐ sè',
    hex: '#88ADA6',
    rgb: [
      136,
      173,
      166
    ],
    cmyk: [
      21,
      0,
      4,
      32
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 247,
    name: '石青',
    pinyin: 'shí qīng',
    hex: '#1685A9',
    rgb: [
      22,
      133,
      169
    ],
    cmyk: [
      87,
      21,
      0,
      34
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 248,
    name: '花青',
    pinyin: 'huā qīng',
    hex: '#003472',
    rgb: [
      0,
      52,
      114
    ],
    cmyk: [
      100,
      54,
      0,
      55
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 249,
    name: '苍青',
    pinyin: 'cāng qīng',
    hex: '#7397AB',
    rgb: [
      115,
      151,
      171
    ],
    cmyk: [
      33,
      12,
      0,
      33
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 250,
    name: '苍黑',
    pinyin: 'cāng hēi',
    hex: '#395260',
    rgb: [
      57,
      82,
      96
    ],
    cmyk: [
      41,
      15,
      0,
      62
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 251,
    name: '淡青',
    pinyin: 'dàn qīng',
    hex: '#D3E0F3',
    rgb: [
      211,
      224,
      243
    ],
    cmyk: [
      13,
      8,
      0,
      5
    ],
    desc: '',
    series: 'cyan'
  },
  {
    id: 252,
    name: '驼色',
    pinyin: 'tuó sè',
    hex: '#66462A',
    rgb: [
      102,
      70,
      42
    ],
    cmyk: [
      37,
      65,
      84,
      49
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 253,
    name: '茶褐',
    pinyin: 'chá hè',
    hex: '#5D3D21',
    rgb: [
      93,
      61,
      33
    ],
    cmyk: [
      38,
      69,
      90,
      54
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 254,
    name: '古铜褐',
    pinyin: 'gǔ tóng hè',
    hex: '#5C3719',
    rgb: [
      92,
      55,
      25
    ],
    cmyk: [
      37,
      74,
      96,
      55
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 255,
    name: '玫瑰粉',
    pinyin: 'méi guī fěn',
    hex: '#F8B37F',
    rgb: [
      248,
      179,
      127
    ],
    cmyk: [
      0,
      40,
      52,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 256,
    name: '橘橙',
    pinyin: 'jú chéng',
    hex: '#F97D1C',
    rgb: [
      249,
      125,
      28
    ],
    cmyk: [
      0,
      62,
      88,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 257,
    name: '美人焦橙',
    pinyin: 'měi rén jiāo chéng',
    hex: '#FA7E23',
    rgb: [
      250,
      126,
      35
    ],
    cmyk: [
      0,
      62,
      85,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 258,
    name: '润红',
    pinyin: 'rùn hóng',
    hex: '#F7CDBC',
    rgb: [
      247,
      205,
      188
    ],
    cmyk: [
      0,
      28,
      25,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 259,
    name: '淡桃红',
    pinyin: 'dàn táo hóng',
    hex: '#F6CEC1',
    rgb: [
      246,
      206,
      193
    ],
    cmyk: [
      0,
      28,
      22,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 260,
    name: '海螺橙',
    pinyin: 'hǎi luó chéng',
    hex: '#F0945D',
    rgb: [
      240,
      148,
      93
    ],
    cmyk: [
      0,
      53,
      65,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 261,
    name: '桃红',
    pinyin: 'táo hóng',
    hex: '#F0ADA0',
    rgb: [
      240,
      173,
      160
    ],
    cmyk: [
      0,
      44,
      32,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 262,
    name: '颊红',
    pinyin: 'jiá hóng',
    hex: '#EEAA9C',
    rgb: [
      238,
      170,
      156
    ],
    cmyk: [
      0,
      45,
      34,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 263,
    name: '淡罂粟红',
    pinyin: 'dàn yīng sù hóng',
    hex: '#EEA08C',
    rgb: [
      238,
      160,
      140
    ],
    cmyk: [
      0,
      49,
      41,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 264,
    name: '晨曦红',
    pinyin: 'chén xī hóng',
    hex: '#EA8958',
    rgb: [
      234,
      137,
      88
    ],
    cmyk: [
      0,
      58,
      67,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 265,
    name: '蟹壳红',
    pinyin: 'xiè ké hóng',
    hex: '#F27635',
    rgb: [
      242,
      118,
      53
    ],
    cmyk: [
      0,
      65,
      80,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 266,
    name: '金莲花橙',
    pinyin: 'jīn lián huā chéng',
    hex: '#F86B1D',
    rgb: [
      248,
      107,
      29
    ],
    cmyk: [
      0,
      69,
      86,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 267,
    name: '草莓红',
    pinyin: 'cǎo méi hóng',
    hex: '#EF6F48',
    rgb: [
      239,
      111,
      72
    ],
    cmyk: [
      0,
      69,
      70,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 268,
    name: '龙睛鱼红',
    pinyin: 'lóng jīng yú hóng',
    hex: '#EF632B',
    rgb: [
      239,
      99,
      43
    ],
    cmyk: [
      0,
      72,
      82,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 269,
    name: '蜻蜓红',
    pinyin: 'qīng tíng hóng',
    hex: '#F1441D',
    rgb: [
      241,
      68,
      29
    ],
    cmyk: [
      0,
      81,
      84,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 270,
    name: '大红',
    pinyin: 'dà hóng',
    hex: '#F04B22',
    rgb: [
      240,
      75,
      34
    ],
    cmyk: [
      0,
      80,
      83,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 271,
    name: '柿红',
    pinyin: 'shì hóng',
    hex: '#F2481B',
    rgb: [
      242,
      72,
      27
    ],
    cmyk: [
      0,
      80,
      85,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 272,
    name: '榴花红',
    pinyin: 'liú huā hóng',
    hex: '#F34718',
    rgb: [
      243,
      71,
      24
    ],
    cmyk: [
      0,
      80,
      85,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 273,
    name: '银朱',
    pinyin: 'yín zhū',
    hex: '#F43E06',
    rgb: [
      244,
      62,
      6
    ],
    cmyk: [
      0,
      83,
      87,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 274,
    name: '朱红',
    pinyin: 'zhū hóng',
    hex: '#ED5126',
    rgb: [
      237,
      81,
      38
    ],
    cmyk: [
      0,
      78,
      83,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 275,
    name: '鲑鱼红',
    pinyin: 'guī yú hóng',
    hex: '#F09C5A',
    rgb: [
      240,
      156,
      90
    ],
    cmyk: [
      0,
      50,
      68,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 276,
    name: '鹿皮褐',
    pinyin: 'lù pí hè',
    hex: '#D99156',
    rgb: [
      217,
      145,
      86
    ],
    cmyk: [
      7,
      52,
      71,
      1
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 277,
    name: '醉瓜肉',
    pinyin: 'zuì guā ròu',
    hex: '#DB8540',
    rgb: [
      219,
      133,
      64
    ],
    cmyk: [
      4,
      57,
      82,
      1
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 278,
    name: '麂棕',
    pinyin: 'jǐ zōng',
    hex: '#DE7622',
    rgb: [
      222,
      118,
      34
    ],
    cmyk: [
      0,
      64,
      93,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 279,
    name: '淡赭',
    pinyin: 'dàn zhě',
    hex: '#BE7E4A',
    rgb: [
      190,
      126,
      74
    ],
    cmyk: [
      18,
      57,
      76,
      6
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 280,
    name: '槟榔综',
    pinyin: 'bīng láng zōng',
    hex: '#C1651A',
    rgb: [
      193,
      101,
      26
    ],
    cmyk: [
      14,
      69,
      100,
      4
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 281,
    name: '淡咖啡',
    pinyin: 'dàn kā fēi',
    hex: '#945833',
    rgb: [
      148,
      88,
      51
    ],
    cmyk: [
      27,
      69,
      85,
      22
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 282,
    name: '岩石棕',
    pinyin: 'yán shí zōng',
    hex: '#964D22',
    rgb: [
      150,
      77,
      34
    ],
    cmyk: [
      26,
      76,
      97,
      20
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 283,
    name: '芒果棕',
    pinyin: 'máng guǒ zōng',
    hex: '#954416',
    rgb: [
      149,
      68,
      22
    ],
    cmyk: [
      25,
      80,
      100,
      20
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 284,
    name: '丁香棕',
    pinyin: 'dīng xiāng zōng',
    hex: '#71361D',
    rgb: [
      113,
      54,
      29
    ],
    cmyk: [
      32,
      83,
      96,
      41
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 285,
    name: '咖啡',
    pinyin: 'kā fēi',
    hex: '#753117',
    rgb: [
      117,
      49,
      23
    ],
    cmyk: [
      30,
      87,
      100,
      38
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 286,
    name: '筍皮棕',
    pinyin: 'sǔn pí zōng',
    hex: '#732E12',
    rgb: [
      115,
      46,
      18
    ],
    cmyk: [
      30,
      89,
      100,
      39
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 287,
    name: '燕颔红',
    pinyin: 'yàn hàn hóng',
    hex: '#FC6315',
    rgb: [
      252,
      99,
      21
    ],
    cmyk: [
      0,
      72,
      86,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 288,
    name: '玉粉红',
    pinyin: 'yù fěn hóng',
    hex: '#E8B49A',
    rgb: [
      232,
      180,
      154
    ],
    cmyk: [
      3,
      38,
      39,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 289,
    name: '金驼',
    pinyin: 'jīn tuó',
    hex: '#E46828',
    rgb: [
      228,
      104,
      40
    ],
    cmyk: [
      0,
      70,
      87,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 290,
    name: '铁棕',
    pinyin: 'tiě zōng',
    hex: '#D85916',
    rgb: [
      216,
      89,
      22
    ],
    cmyk: [
      0,
      76,
      97,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 291,
    name: '淡可可棕',
    pinyin: 'dàn kě kě zōng',
    hex: '#B7511D',
    rgb: [
      183,
      81,
      29
    ],
    cmyk: [
      16,
      77,
      100,
      6
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 292,
    name: '淡豆沙',
    pinyin: 'dàn dòu shā',
    hex: '#873D24',
    rgb: [
      135,
      61,
      36
    ],
    cmyk: [
      28,
      83,
      92,
      28
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 293,
    name: '椰壳棕',
    pinyin: 'yē ké zōng',
    hex: '#883A1E',
    rgb: [
      136,
      58,
      30
    ],
    cmyk: [
      27,
      85,
      98,
      27
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 294,
    name: '淡栗棕',
    pinyin: 'dàn lì zōng',
    hex: '#673424',
    rgb: [
      103,
      52,
      36
    ],
    cmyk: [
      34,
      82,
      85,
      47
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 295,
    name: '可可棕',
    pinyin: 'kě kě zōng',
    hex: '#652B1C',
    rgb: [
      101,
      43,
      28
    ],
    cmyk: [
      33,
      89,
      92,
      48
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 296,
    name: '柞叶棕',
    pinyin: 'zhà yè zōng',
    hex: '#692A1B',
    rgb: [
      105,
      42,
      27
    ],
    cmyk: [
      32,
      90,
      95,
      45
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 297,
    name: '野蔷薇红',
    pinyin: 'yě qiáng wēi hóng',
    hex: '#FB9968',
    rgb: [
      251,
      153,
      104
    ],
    cmyk: [
      0,
      53,
      59,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 298,
    name: '菠萝红',
    pinyin: 'bō luó hóng',
    hex: '#FC7930',
    rgb: [
      252,
      121,
      48
    ],
    cmyk: [
      0,
      65,
      79,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 299,
    name: '藕荷',
    pinyin: 'ǒu hé',
    hex: '#EDC3AE',
    rgb: [
      237,
      195,
      174
    ],
    cmyk: [
      2,
      31,
      31,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 300,
    name: '陶瓷红',
    pinyin: 'táo cí hóng',
    hex: '#E16723',
    rgb: [
      225,
      103,
      35
    ],
    cmyk: [
      0,
      70,
      91,
      0
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 301,
    name: '余烬红',
    pinyin: 'yú jìn hóng',
    hex: '#CF7543',
    rgb: [
      207,
      117,
      67
    ],
    cmyk: [
      9,
      64,
      78,
      1
    ],
    desc: '',
    series: 'red'
  },
  {
    id: 302,
    name: '火红',
    pinyin: 'huǒ hóng',
    hex: '#FF2D51',
    rgb: [
      255,
      45,
      81
    ],
    cmyk: [
      0,
      82,
      68,
      0
    ],
    desc: '火焰的红色，赤色',
    series: 'red'
  },
  {
    id: 303,
    name: '妃色',
    pinyin: 'fēi sè',
    hex: '#ED5736',
    rgb: [
      237,
      87,
      54
    ],
    cmyk: [
      0,
      63,
      77,
      7
    ],
    desc: '妃红色。古同\'绯\'，粉红色。杨妃色湘妃色粉红皆同义。',
    series: 'red'
  },
  {
    id: 304,
    name: '品红',
    pinyin: 'pǐn hóng',
    hex: '#F00056',
    rgb: [
      240,
      0,
      86
    ],
    cmyk: [
      0,
      100,
      64,
      6
    ],
    desc: '比大红浅的红色（这里的\'品红\'估计是指的\'一品红\'，是基于大红色系的，和现在我们印刷用色的\'品红M100\'不是一个概念）',
    series: 'red'
  },
  {
    id: 305,
    name: '粉红',
    pinyin: 'fěn hóng',
    hex: '#FFB3A7',
    rgb: [
      255,
      179,
      167
    ],
    cmyk: [
      0,
      30,
      35,
      0
    ],
    desc: '即浅红色。别称：妃色、杨妃色、湘妃色、妃红色',
    series: 'red'
  },
  {
    id: 306,
    name: '桃红',
    pinyin: 'táo hóng',
    hex: '#F47983',
    rgb: [
      244,
      121,
      131
    ],
    cmyk: [
      0,
      50,
      46,
      4
    ],
    desc: '桃花的颜色，比粉红略鲜润的颜色。（不大于M70的色彩，有时可加入适量黄色）',
    series: 'red'
  },
  {
    id: 307,
    name: '海棠红',
    pinyin: 'hǎi táng hóng',
    hex: '#DB5A6B',
    rgb: [
      219,
      90,
      107
    ],
    cmyk: [
      0,
      59,
      51,
      14
    ],
    desc: '淡紫红色、较桃红色深一些，是非常妩媚娇艳的颜色。',
    series: 'red'
  },
  {
    id: 308,
    name: '樱桃色',
    pinyin: 'yīng táo sè',
    hex: '#C93756',
    rgb: [
      201,
      55,
      86
    ],
    cmyk: [
      0,
      73,
      57,
      21
    ],
    desc: '鲜红色',
    series: 'red'
  },
  {
    id: 309,
    name: '酡颜',
    pinyin: 'tuó yán',
    hex: '#F9906F',
    rgb: [
      249,
      144,
      111
    ],
    cmyk: [
      0,
      42,
      55,
      2
    ],
    desc: '饮酒脸红的样子。亦泛指脸红色',
    series: 'red'
  },
  {
    id: 310,
    name: '银红',
    pinyin: 'yín hóng',
    hex: '#F05654',
    rgb: [
      240,
      86,
      84
    ],
    cmyk: [
      0,
      64,
      65,
      6
    ],
    desc: '银朱和粉红色颜料配成的颜色。多用来形容有光泽的各种红色，尤指有光泽浅红。',
    series: 'red'
  },
  {
    id: 311,
    name: '大红',
    pinyin: 'dà hóng',
    hex: '#FF2121',
    rgb: [
      255,
      33,
      33
    ],
    cmyk: [
      0,
      87,
      87,
      0
    ],
    desc: '正红色，三原色中的红，传统的中国红，又称绛色（RGB色中的R255系列明度）',
    series: 'red'
  },
  {
    id: 312,
    name: '石榴红',
    pinyin: 'shí liú hóng',
    hex: '#F20C00',
    rgb: [
      242,
      12,
      0
    ],
    cmyk: [
      0,
      95,
      100,
      5
    ],
    desc: '石榴花的颜色，高色度和纯度的红色。',
    series: 'red'
  },
  {
    id: 313,
    name: '绛紫',
    pinyin: 'jiàng zǐ',
    hex: '#8C4356',
    rgb: [
      140,
      67,
      86
    ],
    cmyk: [
      0,
      52,
      39,
      45
    ],
    desc: '紫中略带红的颜色',
    series: 'red'
  },
  {
    id: 314,
    name: '绯红',
    pinyin: 'fēi hóng',
    hex: '#C83C23',
    rgb: [
      200,
      60,
      35
    ],
    cmyk: [
      0,
      70,
      82,
      22
    ],
    desc: '艳丽的深红',
    series: 'red'
  },
  {
    id: 315,
    name: '朱红',
    pinyin: 'zhū hóng',
    hex: '#FF4C00',
    rgb: [
      255,
      76,
      0
    ],
    cmyk: [
      0,
      70,
      100,
      0
    ],
    desc: '朱砂的颜色，比大红活泼，也称铅朱朱色丹色（在YM对等的情况下，适量减少红色的成分就是该色的色彩系列感觉）',
    series: 'red'
  },
  {
    id: 316,
    name: '丹',
    pinyin: 'dān',
    hex: '#FF4E20',
    rgb: [
      255,
      78,
      32
    ],
    cmyk: [
      0,
      69,
      87,
      0
    ],
    desc: '丹砂的鲜艳红色',
    series: 'red'
  },
  {
    id: 317,
    name: '彤',
    pinyin: 'tóng',
    hex: '#F35336',
    rgb: [
      243,
      83,
      54
    ],
    cmyk: [
      0,
      66,
      78,
      5
    ],
    desc: '赤色',
    series: 'red'
  },
  {
    id: 318,
    name: '酡红',
    pinyin: 'tuó hóng',
    hex: '#DC3023',
    rgb: [
      220,
      48,
      35
    ],
    cmyk: [
      0,
      78,
      84,
      14
    ],
    desc: '像饮酒后脸上泛现的红色，泛指脸红',
    series: 'red'
  },
  {
    id: 319,
    name: '炎',
    pinyin: 'yán',
    hex: '#FF3300',
    rgb: [
      255,
      51,
      0
    ],
    cmyk: [
      0,
      80,
      100,
      0
    ],
    desc: '引申为红色',
    series: 'red'
  },
  {
    id: 320,
    name: '茜色',
    pinyin: 'qiàn sè',
    hex: '#CB3A56',
    rgb: [
      203,
      58,
      86
    ],
    cmyk: [
      0,
      71,
      58,
      20
    ],
    desc: '茜草染的色彩，呈深红色',
    series: 'red'
  },
  {
    id: 321,
    name: '绾',
    pinyin: 'wǎn',
    hex: '#A98175',
    rgb: [
      169,
      129,
      117
    ],
    cmyk: [
      0,
      24,
      31,
      34
    ],
    desc: '绛色；浅绛色',
    series: 'red'
  },
  {
    id: 322,
    name: '檀',
    pinyin: 'tán',
    hex: '#B36D61',
    rgb: [
      179,
      109,
      97
    ],
    cmyk: [
      0,
      39,
      46,
      30
    ],
    desc: '浅红色，浅绛色',
    series: 'red'
  },
  {
    id: 323,
    name: '嫣红',
    pinyin: 'yān hóng',
    hex: '#EF7A82',
    rgb: [
      239,
      122,
      130
    ],
    cmyk: [
      0,
      49,
      46,
      6
    ],
    desc: '鲜艳的红色',
    series: 'red'
  },
  {
    id: 324,
    name: '洋红',
    pinyin: 'yáng hóng',
    hex: '#FF0097',
    rgb: [
      255,
      0,
      151
    ],
    cmyk: [
      0,
      100,
      41,
      0
    ],
    desc: '色橘红（这个色彩方向不太对，通常洋红指的是倾向于M100系列的红色，应该削弱黄色成分。）',
    series: 'red'
  },
  {
    id: 325,
    name: '枣红',
    pinyin: 'zǎo hóng',
    hex: '#C32136',
    rgb: [
      195,
      33,
      54
    ],
    cmyk: [
      0,
      83,
      72,
      24
    ],
    desc: '即深红（色相不变，是深浅变化）',
    series: 'red'
  },
  {
    id: 326,
    name: '赫赤',
    pinyin: 'hè chì',
    hex: '#C91F37',
    rgb: [
      201,
      31,
      55
    ],
    cmyk: [
      0,
      85,
      73,
      21
    ],
    desc: '深红，火红。泛指赤色、火红色。',
    series: 'red'
  },
  {
    id: 327,
    name: '赤',
    pinyin: 'chì',
    hex: '#C3272B',
    rgb: [
      195,
      39,
      43
    ],
    cmyk: [
      0,
      80,
      78,
      24
    ],
    desc: '本义火的颜色，即红色',
    series: 'red'
  },
  {
    id: 328,
    name: '胭脂',
    pinyin: 'yān zhī',
    hex: '#9D2933',
    rgb: [
      157,
      41,
      51
    ],
    cmyk: [
      0,
      74,
      68,
      38
    ],
    desc: '1，女子装扮时用的胭脂的颜色。2，国画暗红色颜料',
    series: 'red'
  },
  {
    id: 329,
    name: '殷红',
    pinyin: 'yān hóng',
    hex: '#BE002F',
    rgb: [
      190,
      0,
      47
    ],
    cmyk: [
      0,
      100,
      75,
      25
    ],
    desc: '发黑的红色。',
    series: 'red'
  },
  {
    id: 330,
    name: '貂紫',
    pinyin: 'diāo zǐ',
    hex: '#5D3131',
    rgb: [
      93,
      49,
      49
    ],
    cmyk: [
      36,
      81,
      64,
      54
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 331,
    name: '暗玉紫',
    pinyin: 'àn yù zǐ',
    hex: '#5C2223',
    rgb: [
      92,
      34,
      35
    ],
    cmyk: [
      35,
      94,
      77,
      53
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 332,
    name: '栗紫',
    pinyin: 'lì zǐ',
    hex: '#5A191B',
    rgb: [
      90,
      25,
      27
    ],
    cmyk: [
      35,
      100,
      85,
      54
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 333,
    name: '葡萄酱紫',
    pinyin: 'pú táo jiàng zǐ',
    hex: '#5A1216',
    rgb: [
      90,
      18,
      22
    ],
    cmyk: [
      35,
      100,
      80,
      54
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 334,
    name: '葡萄紫',
    pinyin: 'pú táo zǐ',
    hex: '#4C1F24',
    rgb: [
      76,
      31,
      36
    ],
    cmyk: [
      39,
      92,
      67,
      64
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 335,
    name: '酱紫',
    pinyin: 'jiàng zǐ',
    hex: '#4D1018',
    rgb: [
      77,
      16,
      24
    ],
    cmyk: [
      39,
      100,
      79,
      63
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 336,
    name: '猪肝紫',
    pinyin: 'zhū gān zǐ',
    hex: '#541E24',
    rgb: [
      84,
      30,
      36
    ],
    cmyk: [
      36,
      95,
      71,
      59
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 337,
    name: '金鱼紫',
    pinyin: 'jīn yú zǐ',
    hex: '#500A16',
    rgb: [
      80,
      10,
      22
    ],
    cmyk: [
      38,
      100,
      81,
      61
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 338,
    name: '甘蔗紫',
    pinyin: 'gān zhè zǐ',
    hex: '#621624',
    rgb: [
      98,
      22,
      36
    ],
    cmyk: [
      33,
      100,
      75,
      49
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 339,
    name: '石竹紫',
    pinyin: 'shí zhú zǐ',
    hex: '#63071C',
    rgb: [
      99,
      7,
      28
    ],
    cmyk: [
      32,
      100,
      84,
      49
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 340,
    name: '卵石紫',
    pinyin: 'luǎn shí zǐ',
    hex: '#30161C',
    rgb: [
      48,
      22,
      28
    ],
    cmyk: [
      52,
      88,
      58,
      81
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 341,
    name: '李紫',
    pinyin: 'lǐ zǐ',
    hex: '#2B1216',
    rgb: [
      43,
      18,
      22
    ],
    cmyk: [
      56,
      88,
      62,
      84
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 342,
    name: '菜头紫',
    pinyin: 'cài tóu zǐ',
    hex: '#951C48',
    rgb: [
      149,
      28,
      72
    ],
    cmyk: [
      24,
      99,
      52,
      19
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 343,
    name: '鹞冠紫',
    pinyin: 'yào guān zǐ',
    hex: '#621D34',
    rgb: [
      98,
      29,
      52
    ],
    cmyk: [
      34,
      97,
      54,
      50
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 344,
    name: '磨石紫',
    pinyin: 'mó shí zǐ',
    hex: '#382129',
    rgb: [
      56,
      33,
      41
    ],
    cmyk: [
      53,
      81,
      50,
      74
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 345,
    name: '檀紫',
    pinyin: 'tán zǐ',
    hex: '#381924',
    rgb: [
      56,
      25,
      36
    ],
    cmyk: [
      48,
      90,
      50,
      76
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 346,
    name: '火鹅紫',
    pinyin: 'huǒ é zǐ',
    hex: '#33141E',
    rgb: [
      51,
      20,
      30
    ],
    cmyk: [
      50,
      91,
      54,
      79
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 347,
    name: '墨紫',
    pinyin: 'mò zǐ',
    hex: '#310F1B',
    rgb: [
      49,
      15,
      27
    ],
    cmyk: [
      53,
      92,
      55,
      81
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 348,
    name: '洋葱紫',
    pinyin: 'yáng cōng zǐ',
    hex: '#A8456B',
    rgb: [
      168,
      69,
      107
    ],
    cmyk: [
      22,
      83,
      34,
      11
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 349,
    name: '海象紫',
    pinyin: 'hǎi xiàng zǐ',
    hex: '#4B1E2F',
    rgb: [
      75,
      30,
      47
    ],
    cmyk: [
      40,
      92,
      47,
      64
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 350,
    name: '绀紫',
    pinyin: 'gàn zǐ',
    hex: '#461629',
    rgb: [
      70,
      22,
      41
    ],
    cmyk: [
      41,
      97,
      49,
      68
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 351,
    name: '古铜紫',
    pinyin: 'gǔ tóng zǐ',
    hex: '#440E25',
    rgb: [
      68,
      14,
      37
    ],
    cmyk: [
      42,
      99,
      51,
      69
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 352,
    name: '丁香淡紫',
    pinyin: 'dīng xiāng dàn zǐ',
    hex: '#E9D7DF',
    rgb: [
      233,
      215,
      223
    ],
    cmyk: [
      7,
      20,
      8,
      0
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 353,
    name: '淡牵牛紫',
    pinyin: 'dàn qiān niú zǐ',
    hex: '#D1C2D3',
    rgb: [
      209,
      194,
      211
    ],
    cmyk: [
      19,
      27,
      9,
      0
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 354,
    name: '凤信紫',
    pinyin: 'fèng xìn zǐ',
    hex: '#C8ADC4',
    rgb: [
      200,
      173,
      196
    ],
    cmyk: [
      21,
      37,
      12,
      0
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 355,
    name: '萝兰紫',
    pinyin: 'luó lán zǐ',
    hex: '#C08EAF',
    rgb: [
      192,
      142,
      175
    ],
    cmyk: [
      23,
      53,
      14,
      1
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 356,
    name: '玫瑰紫',
    pinyin: 'méi guī zǐ',
    hex: '#BA2F7B',
    rgb: [
      186,
      47,
      123
    ],
    cmyk: [
      18,
      91,
      18,
      2
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 357,
    name: '藤萝紫',
    pinyin: 'téng luó zǐ',
    hex: '#8076A3',
    rgb: [
      128,
      118,
      163
    ],
    cmyk: [
      58,
      56,
      17,
      2
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 358,
    name: '槿紫',
    pinyin: 'jǐn zǐ',
    hex: '#806D9E',
    rgb: [
      128,
      109,
      158
    ],
    cmyk: [
      57,
      62,
      16,
      2
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 359,
    name: '蕈紫',
    pinyin: 'xùn zǐ',
    hex: '#815C94',
    rgb: [
      129,
      92,
      148
    ],
    cmyk: [
      56,
      72,
      15,
      1
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 360,
    name: '桔梗紫',
    pinyin: 'jié gěng zǐ',
    hex: '#813C85',
    rgb: [
      129,
      60,
      133
    ],
    cmyk: [
      54,
      89,
      12,
      1
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 361,
    name: '芝兰紫',
    pinyin: 'zhī lán zǐ',
    hex: '#7E1671',
    rgb: [
      126,
      22,
      113
    ],
    cmyk: [
      3,
      26,
      10,
      0
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 362,
    name: '樱草紫',
    pinyin: 'yīng cǎo zǐ',
    hex: '#C06F98',
    rgb: [
      192,
      111,
      152
    ],
    cmyk: [
      19,
      68,
      18,
      1
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 363,
    name: '苋菜紫',
    pinyin: 'xiàn cài zǐ',
    hex: '#9B1E64',
    rgb: [
      155,
      30,
      100
    ],
    cmyk: [
      27,
      97,
      27,
      14
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 364,
    name: '淡青紫',
    pinyin: 'dàn qīng zǐ',
    hex: '#E0C8D1',
    rgb: [
      224,
      200,
      209
    ],
    cmyk: [
      10,
      27,
      11,
      0
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 365,
    name: '青蛤壳紫',
    pinyin: 'qīng há ké zǐ',
    hex: '#BC84A8',
    rgb: [
      188,
      132,
      168
    ],
    cmyk: [
      24,
      58,
      15,
      1
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 366,
    name: '豆蔻紫',
    pinyin: 'dòu kòu zǐ',
    hex: '#AD6598',
    rgb: [
      173,
      101,
      152
    ],
    cmyk: [
      31,
      71,
      15,
      1
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 367,
    name: '扁豆紫',
    pinyin: 'biǎn dòu zǐ',
    hex: '#A35C8F',
    rgb: [
      163,
      92,
      143
    ],
    cmyk: [
      35,
      75,
      18,
      2
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 368,
    name: '芥花紫',
    pinyin: 'jiè huā zǐ',
    hex: '#983680',
    rgb: [
      152,
      54,
      128
    ],
    cmyk: [
      39,
      91,
      15,
      3
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 369,
    name: '芓紫',
    pinyin: 'zì zǐ',
    hex: '#894276',
    rgb: [
      137,
      66,
      118
    ],
    cmyk: [
      44,
      85,
      24,
      10
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 370,
    name: '葛巾紫',
    pinyin: 'gé jīn zǐ',
    hex: '#7E2065',
    rgb: [
      126,
      32,
      101
    ],
    cmyk: [
      45,
      99,
      24,
      16
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 371,
    name: '牵牛紫',
    pinyin: 'qiān niú zǐ',
    hex: '#681752',
    rgb: [
      104,
      23,
      82
    ],
    cmyk: [
      49,
      100,
      29,
      32
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 372,
    name: '龙睛鱼紫',
    pinyin: 'lóng jīng yú zǐ',
    hex: '#4E2A40',
    rgb: [
      78,
      42,
      64
    ],
    cmyk: [
      55,
      87,
      41,
      52
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 373,
    name: '荸荠紫',
    pinyin: 'bí qí zǐ',
    hex: '#411C35',
    rgb: [
      65,
      28,
      53
    ],
    cmyk: [
      58,
      96,
      40,
      61
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 374,
    name: '鸟梅紫',
    pinyin: 'niǎo méi zǐ',
    hex: '#1E131D',
    rgb: [
      30,
      19,
      29
    ],
    cmyk: [
      81,
      87,
      54,
      84
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 375,
    name: '深牵牛紫',
    pinyin: 'shēn qiān niú zǐ',
    hex: '#1C0D1A',
    rgb: [
      28,
      13,
      26
    ],
    cmyk: [
      83,
      87,
      55,
      86
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 376,
    name: '远山紫',
    pinyin: 'yuǎn shān zǐ',
    hex: '#CCCCD6',
    rgb: [
      204,
      204,
      214
    ],
    cmyk: [
      23,
      18,
      12,
      1
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 377,
    name: '淡蓝紫',
    pinyin: 'dàn lán zǐ',
    hex: '#A7A8BD',
    rgb: [
      167,
      168,
      189
    ],
    cmyk: [
      39,
      31,
      17,
      2
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 378,
    name: '山梗紫',
    pinyin: 'shān gěng zǐ',
    hex: '#61649F',
    rgb: [
      97,
      100,
      159
    ],
    cmyk: [
      74,
      64,
      14,
      1
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 379,
    name: '螺甸紫',
    pinyin: 'luó diān zǐ',
    hex: '#74759B',
    rgb: [
      116,
      117,
      155
    ],
    cmyk: [
      63,
      53,
      22,
      5
    ],
    desc: '',
    series: 'purple'
  },
  {
    id: 380,
    name: '芡食白',
    pinyin: 'qiàn shí bái',
    hex: '#E2E1E4',
    rgb: [
      226,
      225,
      228
    ],
    cmyk: [
      13,
      10,
      9,
      0
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 381,
    name: '月影白',
    pinyin: 'yuè yǐng bái',
    hex: '#C0C4C3',
    rgb: [
      192,
      196,
      195
    ],
    cmyk: [
      29,
      18,
      21,
      2
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 382,
    name: '甘石粉',
    pinyin: 'gān shí fěn',
    hex: '#EADCD6',
    rgb: [
      234,
      220,
      214
    ],
    cmyk: [
      0,
      6,
      9,
      8
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 383,
    name: '胡粉',
    pinyin: 'hú fěn',
    hex: '#EBE8DB',
    rgb: [
      235,
      232,
      219
    ],
    cmyk: [
      0,
      1,
      7,
      8
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 384,
    name: '蛤粉',
    pinyin: 'há fěn',
    hex: '#EDEADC',
    rgb: [
      237,
      234,
      220
    ],
    cmyk: [
      0,
      1,
      7,
      7
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 385,
    name: '立徳粉',
    pinyin: 'lì dé fěn',
    hex: '#EDEBE0',
    rgb: [
      237,
      235,
      224
    ],
    cmyk: [
      0,
      1,
      5,
      7
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 386,
    name: '月白色',
    pinyin: 'yuè bái sè',
    hex: '#D1E2DE',
    rgb: [
      209,
      226,
      222
    ],
    cmyk: [
      8,
      0,
      2,
      11
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 387,
    name: '蝋白',
    pinyin: 'là bái',
    hex: '#E7E5D0',
    rgb: [
      231,
      229,
      208
    ],
    cmyk: [
      0,
      1,
      10,
      9
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 388,
    name: '大理石色',
    pinyin: 'dà lǐ shí sè',
    hex: '#A2B2A9',
    rgb: [
      162,
      178,
      169
    ],
    cmyk: [
      9,
      0,
      5,
      30
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 389,
    name: '淡藕合',
    pinyin: 'dàn ǒu hé',
    hex: '#D5CCD3',
    rgb: [
      213,
      204,
      211
    ],
    cmyk: [
      0,
      4,
      1,
      16
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 390,
    name: '银白色',
    pinyin: 'yín bái sè',
    hex: '#EBE5D5',
    rgb: [
      235,
      229,
      213
    ],
    cmyk: [
      0,
      3,
      9,
      8
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 391,
    name: '精白',
    pinyin: 'jīng bái',
    hex: '#FFFFFF',
    rgb: [
      255,
      255,
      255
    ],
    cmyk: [
      0,
      0,
      0,
      0
    ],
    desc: '纯白，洁白，净白，粉白。',
    series: 'white'
  },
  {
    id: 392,
    name: '银白',
    pinyin: 'yín bái',
    hex: '#E9E7EF',
    rgb: [
      233,
      231,
      239
    ],
    cmyk: [
      3,
      3,
      0,
      6
    ],
    desc: '带银光的白色',
    series: 'white'
  },
  {
    id: 393,
    name: '铅白',
    pinyin: 'qiān bái',
    hex: '#F0F0F4',
    rgb: [
      240,
      240,
      244
    ],
    cmyk: [
      2,
      2,
      0,
      4
    ],
    desc: '铅粉的白色。铅粉，国画颜料，日久易氧化\'返铅\'变黑。铅粉在古时用以搽脸的化妆品。（冷白）',
    series: 'white'
  },
  {
    id: 394,
    name: '霜色',
    pinyin: 'shuāng sè',
    hex: '#E9F1F6',
    rgb: [
      233,
      241,
      246
    ],
    cmyk: [
      5,
      2,
      0,
      4
    ],
    desc: '白霜的颜色。',
    series: 'white'
  },
  {
    id: 395,
    name: '雪白',
    pinyin: 'xuě bái',
    hex: '#F0FCFF',
    rgb: [
      240,
      252,
      255
    ],
    cmyk: [
      6,
      1,
      0,
      0
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 396,
    name: '象牙白',
    pinyin: 'xiàng yá bái',
    hex: '#FFFBF0',
    rgb: [
      255,
      251,
      240
    ],
    cmyk: [
      0,
      2,
      6,
      0
    ],
    desc: '乳白色',
    series: 'white'
  },
  {
    id: 397,
    name: '缟',
    pinyin: 'gǎo',
    hex: '#F2ECDE',
    rgb: [
      242,
      236,
      222
    ],
    cmyk: [
      0,
      2,
      8,
      5
    ],
    desc: '白色',
    series: 'white'
  },
  {
    id: 398,
    name: '鱼肚白',
    pinyin: 'yú dǔ bái',
    hex: '#FCEFE8',
    rgb: [
      252,
      239,
      232
    ],
    cmyk: [
      0,
      5,
      8,
      1
    ],
    desc: '似鱼腹部的颜色，多指黎明时东方的天色颜色（M5Y5）',
    series: 'white'
  },
  {
    id: 399,
    name: '白粉',
    pinyin: 'bái fěn',
    hex: '#FFF2FD',
    rgb: [
      255,
      242,
      253
    ],
    cmyk: [
      0,
      5,
      1,
      0
    ],
    desc: '',
    series: 'white'
  },
  {
    id: 400,
    name: '荼白',
    pinyin: 'tú bái',
    hex: '#F3F9F1',
    rgb: [
      243,
      249,
      241
    ],
    cmyk: [
      2,
      0,
      3,
      2
    ],
    desc: '如荼之白色',
    series: 'white'
  },
  {
    id: 401,
    name: '素',
    pinyin: 'sù',
    hex: '#E0F0E9',
    rgb: [
      224,
      240,
      233
    ],
    cmyk: [
      7,
      0,
      3,
      6
    ],
    desc: '白色，无色',
    series: 'white'
  },
  {
    id: 402,
    name: '花白',
    pinyin: 'huā bái',
    hex: '#C2CCD0',
    rgb: [
      194,
      204,
      208
    ],
    cmyk: [
      7,
      2,
      0,
      18
    ],
    desc: '白色和黑色混杂的。斑白的夹杂有灰色的白',
    series: 'white'
  },
  {
    id: 403,
    name: '老银',
    pinyin: 'lǎo yín',
    hex: '#BACAC6',
    rgb: [
      186,
      202,
      198
    ],
    cmyk: [
      8,
      0,
      2,
      21
    ],
    desc: '金属氧化后的色彩',
    series: 'white'
  },
  {
    id: 404,
    name: '苍白',
    pinyin: 'cāng bái',
    hex: '#D1D9E0',
    rgb: [
      209,
      217,
      224
    ],
    cmyk: [
      7,
      3,
      0,
      12
    ],
    desc: '准确的说是掺入不同灰度级别的灰色',
    series: 'white'
  },
  {
    id: 405,
    name: '雪白',
    pinyin: 'xuě bái',
    hex: '#F2FDFF',
    rgb: [
      242,
      253,
      255
    ],
    cmyk: [
      5,
      1,
      0,
      0
    ],
    desc: '如雪般洁白',
    series: 'white'
  },
  {
    id: 406,
    name: '景泰蓝',
    pinyin: 'jǐng tài lán',
    hex: '#2775B6',
    rgb: [
      39,
      117,
      182
    ],
    cmyk: [
      95,
      46,
      10,
      1
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 407,
    name: '尼罗蓝',
    pinyin: 'ní luó lán',
    hex: '#2474B5',
    rgb: [
      36,
      116,
      181
    ],
    cmyk: [
      96,
      47,
      11,
      1
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 408,
    name: '星蓝',
    pinyin: 'xīng lán',
    hex: '#93B5CF',
    rgb: [
      147,
      181,
      207
    ],
    cmyk: [
      53,
      19,
      15,
      1
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 409,
    name: '羽扇豆蓝',
    pinyin: 'yǔ shàn dòu lán',
    hex: '#619AC3',
    rgb: [
      97,
      154,
      195
    ],
    cmyk: [
      74,
      27,
      16,
      2
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 410,
    name: '睛蓝',
    pinyin: 'jīng lán',
    hex: '#5698C3',
    rgb: [
      86,
      152,
      195
    ],
    cmyk: [
      78,
      27,
      17,
      2
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 411,
    name: '虹蓝',
    pinyin: 'hóng lán',
    hex: '#2177B8',
    rgb: [
      33,
      119,
      184
    ],
    cmyk: [
      99,
      44,
      10,
      1
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 412,
    name: '湖水蓝',
    pinyin: 'hú shuǐ lán',
    hex: '#B0D5DF',
    rgb: [
      176,
      213,
      223
    ],
    cmyk: [
      43,
      4,
      16,
      0
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 413,
    name: '秋波蓝',
    pinyin: 'qiū bō lán',
    hex: '#8ABCD1',
    rgb: [
      138,
      188,
      209
    ],
    cmyk: [
      59,
      12,
      19,
      0
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 414,
    name: '涧石蓝',
    pinyin: 'jiàn shí lán',
    hex: '#66A9C9',
    rgb: [
      102,
      169,
      201
    ],
    cmyk: [
      73,
      17,
      20,
      1
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 415,
    name: '潮蓝',
    pinyin: 'cháo lán',
    hex: '#2983BB',
    rgb: [
      41,
      131,
      187
    ],
    cmyk: [
      93,
      36,
      15,
      2
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 416,
    name: '宝石蓝',
    pinyin: 'bǎo shí lán',
    hex: '#2486B9',
    rgb: [
      36,
      134,
      185
    ],
    cmyk: [
      94,
      32,
      17,
      3
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 417,
    name: '天蓝',
    pinyin: 'tiān lán',
    hex: '#1677B3',
    rgb: [
      22,
      119,
      179
    ],
    cmyk: [
      98,
      43,
      14,
      2
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 418,
    name: '柏林蓝',
    pinyin: 'bó lín lán',
    hex: '#126BAE',
    rgb: [
      18,
      107,
      174
    ],
    cmyk: [
      100,
      52,
      11,
      1
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 419,
    name: '钴蓝',
    pinyin: 'gǔ lán',
    hex: '#1A94BC',
    rgb: [
      26,
      148,
      188
    ],
    cmyk: [
      94,
      16,
      23,
      3
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 420,
    name: '鸢尾蓝',
    pinyin: 'yuān wěi lán',
    hex: '#158BB8',
    rgb: [
      21,
      139,
      184
    ],
    cmyk: [
      95,
      25,
      20,
      4
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 421,
    name: '牵牛花蓝',
    pinyin: 'qiān niú huā lán',
    hex: '#1177B0',
    rgb: [
      17,
      119,
      176
    ],
    cmyk: [
      98,
      42,
      16,
      3
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 422,
    name: '飞燕草蓝',
    pinyin: 'fēi yàn cǎo lán',
    hex: '#0F59A4',
    rgb: [
      15,
      89,
      164
    ],
    cmyk: [
      100,
      65,
      11,
      1
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 423,
    name: '品蓝',
    pinyin: 'pǐn lán',
    hex: '#2B73AF',
    rgb: [
      43,
      115,
      175
    ],
    cmyk: [
      95,
      47,
      14,
      2
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 424,
    name: '安安蓝',
    pinyin: 'ān ān lán',
    hex: '#3170A7',
    rgb: [
      49,
      112,
      167
    ],
    cmyk: [
      93,
      49,
      17,
      3
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 425,
    name: '钢蓝',
    pinyin: 'gāng lán',
    hex: '#0F1423',
    rgb: [
      15,
      20,
      35
    ],
    cmyk: [
      100,
      89,
      54,
      79
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 426,
    name: '云水蓝',
    pinyin: 'yún shuǐ lán',
    hex: '#BACCD9',
    rgb: [
      186,
      204,
      217
    ],
    cmyk: [
      35,
      13,
      13,
      0
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 427,
    name: '晴山蓝',
    pinyin: 'qíng shān lán',
    hex: '#8FB2C9',
    rgb: [
      143,
      178,
      201
    ],
    cmyk: [
      55,
      20,
      18,
      1
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 428,
    name: '海涛蓝',
    pinyin: 'hǎi tāo lán',
    hex: '#15559A',
    rgb: [
      21,
      85,
      154
    ],
    cmyk: [
      100,
      67,
      16,
      3
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 429,
    name: '蝶翅蓝',
    pinyin: 'dié chì lán',
    hex: '#4E7CA1',
    rgb: [
      78,
      124,
      161
    ],
    cmyk: [
      81,
      41,
      24,
      8
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 430,
    name: '海军蓝',
    pinyin: 'hǎi jūn lán',
    hex: '#346C9C',
    rgb: [
      52,
      108,
      156
    ],
    cmyk: [
      93,
      50,
      21,
      6
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 431,
    name: '燕颔蓝',
    pinyin: 'yàn hàn lán',
    hex: '#131824',
    rgb: [
      19,
      24,
      36
    ],
    cmyk: [
      100,
      86,
      54,
      78
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 432,
    name: '井天蓝',
    pinyin: 'jǐng tiān lán',
    hex: '#C3D7DF',
    rgb: [
      195,
      215,
      223
    ],
    cmyk: [
      32,
      8,
      13,
      0
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 433,
    name: '云山蓝',
    pinyin: 'yún shān lán',
    hex: '#2F90B9',
    rgb: [
      47,
      144,
      185
    ],
    cmyk: [
      91,
      24,
      22,
      4
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 434,
    name: '釉蓝',
    pinyin: 'yòu lán',
    hex: '#1781B5',
    rgb: [
      23,
      129,
      181
    ],
    cmyk: [
      96,
      34,
      18,
      4
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 435,
    name: '搪磁蓝',
    pinyin: 'táng cí lán',
    hex: '#11659A',
    rgb: [
      17,
      101,
      154
    ],
    cmyk: [
      100,
      53,
      21,
      6
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 436,
    name: '鷃蓝',
    pinyin: 'yàn lán',
    hex: '#144A74',
    rgb: [
      20,
      74,
      116
    ],
    cmyk: [
      100,
      68,
      32,
      20
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 437,
    name: '鸽蓝',
    pinyin: 'gē lán',
    hex: '#1C2938',
    rgb: [
      28,
      41,
      56
    ],
    cmyk: [
      100,
      77,
      50,
      62
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 438,
    name: '暗蓝',
    pinyin: 'àn lán',
    hex: '#101F30',
    rgb: [
      16,
      31,
      48
    ],
    cmyk: [
      100,
      84,
      51,
      68
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 439,
    name: '海天蓝',
    pinyin: 'hǎi tiān lán',
    hex: '#C6E6E8',
    rgb: [
      198,
      230,
      232
    ],
    cmyk: [
      33,
      0,
      14,
      0
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 440,
    name: '清水蓝',
    pinyin: 'qīng shuǐ lán',
    hex: '#93D5DC',
    rgb: [
      147,
      213,
      220
    ],
    cmyk: [
      57,
      0,
      22,
      0
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 441,
    name: '瀑布蓝',
    pinyin: 'pù bù lán',
    hex: '#51C4D3',
    rgb: [
      81,
      196,
      211
    ],
    cmyk: [
      79,
      0,
      27,
      0
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 442,
    name: '蔚蓝',
    pinyin: 'wèi lán',
    hex: '#29B7CB',
    rgb: [
      41,
      183,
      203
    ],
    cmyk: [
      89,
      0,
      29,
      0
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 443,
    name: '孔雀蓝',
    pinyin: 'kǒng què lán',
    hex: '#0EB0C9',
    rgb: [
      14,
      176,
      201
    ],
    cmyk: [
      92,
      0,
      28,
      0
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 444,
    name: '甸子蓝',
    pinyin: 'diàn zǐ lán',
    hex: '#10AEC2',
    rgb: [
      16,
      174,
      194
    ],
    cmyk: [
      93,
      0,
      31,
      0
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 445,
    name: '翠蓝',
    pinyin: 'cuì lán',
    hex: '#1E9EB3',
    rgb: [
      30,
      158,
      179
    ],
    cmyk: [
      94,
      11,
      33,
      1
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 446,
    name: '胆矾蓝',
    pinyin: 'dǎn fán lán',
    hex: '#0F95B0',
    rgb: [
      15,
      149,
      176
    ],
    cmyk: [
      96,
      16,
      31,
      3
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 447,
    name: '樫鸟蓝',
    pinyin: 'jiān niǎo lán',
    hex: '#1491A8',
    rgb: [
      20,
      145,
      168
    ],
    cmyk: [
      96,
      18,
      34,
      4
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 448,
    name: '闪蓝',
    pinyin: 'shǎn lán',
    hex: '#7CABB1',
    rgb: [
      124,
      171,
      177
    ],
    cmyk: [
      64,
      18,
      32,
      2
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 449,
    name: '冰山蓝',
    pinyin: 'bīng shān lán',
    hex: '#A4ACA7',
    rgb: [
      164,
      172,
      167
    ],
    cmyk: [
      40,
      24,
      32,
      6
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 450,
    name: '晚波蓝',
    pinyin: 'wǎn bō lán',
    hex: '#648E93',
    rgb: [
      100,
      142,
      147
    ],
    cmyk: [
      71,
      28,
      39,
      10
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 451,
    name: '蜻蜓蓝',
    pinyin: 'qīng tíng lán',
    hex: '#3B818C',
    rgb: [
      59,
      129,
      140
    ],
    cmyk: [
      89,
      27,
      41,
      13
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 452,
    name: '玉鈫蓝',
    pinyin: 'yù qín lán',
    hex: '#126E82',
    rgb: [
      18,
      110,
      130
    ],
    cmyk: [
      99,
      33,
      38,
      21
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 453,
    name: '苍蓝',
    pinyin: 'cāng lán',
    hex: '#134857',
    rgb: [
      19,
      72,
      87
    ],
    cmyk: [
      100,
      52,
      46,
      43
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 454,
    name: '灰蓝',
    pinyin: 'huī lán',
    hex: '#21373D',
    rgb: [
      33,
      55,
      61
    ],
    cmyk: [
      94,
      58,
      54,
      60
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 455,
    name: '深灰蓝',
    pinyin: 'shēn huī lán',
    hex: '#132C33',
    rgb: [
      19,
      44,
      51
    ],
    cmyk: [
      100,
      64,
      56,
      68
    ],
    desc: '',
    series: 'blue'
  },
  {
    id: 456,
    name: '蔚蓝',
    pinyin: 'wèi lán',
    hex: '#70F3FF',
    rgb: [
      112,
      243,
      255
    ],
    cmyk: [
      56,
      5,
      0,
      0
    ],
    desc: '类似晴朗天空的颜色的一种蓝色',
    series: 'blue'
  },
  {
    id: 457,
    name: '蓝',
    pinyin: 'lán',
    hex: '#44CEF6',
    rgb: [
      68,
      206,
      246
    ],
    cmyk: [
      72,
      16,
      0,
      4
    ],
    desc: '三原色的一种。像晴天天空的颜色（这里的蓝色指的不是RGB色彩中的B，而是CMY色彩中的C）',
    series: 'blue'
  },
  {
    id: 458,
    name: '碧蓝',
    pinyin: 'bì lán',
    hex: '#3EEDE7',
    rgb: [
      62,
      237,
      231
    ],
    cmyk: [
      74,
      0,
      3,
      7
    ],
    desc: '青蓝色',
    series: 'blue'
  },
  {
    id: 459,
    name: '靛青',
    pinyin: 'diàn qīng',
    hex: '#177CB0',
    rgb: [
      23,
      124,
      176
    ],
    cmyk: [
      87,
      30,
      0,
      31
    ],
    desc: '也叫\'蓝靛\'。用蓼蓝叶泡水调和与石灰沉淀所得的蓝色染料。呈深蓝绿色（靛，发音dian四声，有些地方将蓝墨水称为\'靛水\'或者\'兰靛水\'）',
    series: 'blue'
  },
  {
    id: 460,
    name: '靛蓝',
    pinyin: 'diàn lán',
    hex: '#065279',
    rgb: [
      6,
      82,
      121
    ],
    cmyk: [
      95,
      32,
      0,
      53
    ],
    desc: '由植物(例如靛蓝或菘蓝属植物)得到的蓝色染料',
    series: 'blue'
  },
  {
    id: 461,
    name: '宝蓝',
    pinyin: 'bǎo lán',
    hex: '#4B5CC4',
    rgb: [
      75,
      92,
      196
    ],
    cmyk: [
      62,
      53,
      0,
      23
    ],
    desc: '鲜艳明亮的蓝色（英文中为RoyalBlue即皇家蓝色，是皇室选用的色彩，多和小面积纯黄色（金色）配合使用。）',
    series: 'blue'
  },
  {
    id: 462,
    name: '蓝灰色',
    pinyin: 'lán huī sè',
    hex: '#A1AFC9',
    rgb: [
      161,
      175,
      201
    ],
    cmyk: [
      20,
      13,
      0,
      21
    ],
    desc: '一种近于灰略带蓝的深灰色',
    series: 'blue'
  },
  {
    id: 463,
    name: '藏青',
    pinyin: 'zàng qīng',
    hex: '#2E4E7E',
    rgb: [
      46,
      78,
      126
    ],
    cmyk: [
      63,
      38,
      0,
      51
    ],
    desc: '蓝而近黑',
    series: 'blue'
  },
  {
    id: 464,
    name: '藏蓝',
    pinyin: 'zàng lán',
    hex: '#3B2E7E',
    rgb: [
      59,
      46,
      126
    ],
    cmyk: [
      53,
      63,
      0,
      51
    ],
    desc: '蓝里略透红色',
    series: 'blue'
  },
  {
    id: 465,
    name: '黛',
    pinyin: 'dài',
    hex: '#4A4266',
    rgb: [
      74,
      66,
      102
    ],
    cmyk: [
      27,
      35,
      0,
      60
    ],
    desc: '别名：黛色，黛螺。青黑色的颜料。古代女子用以画眉。绘画或画眉所使用的青黑色颜料，代指女子眉妩。',
    series: 'blue'
  },
  {
    id: 466,
    name: '黛绿',
    pinyin: 'dài lǜ',
    hex: '#426666',
    rgb: [
      66,
      102,
      102
    ],
    cmyk: [
      35,
      0,
      0,
      60
    ],
    desc: '墨绿',
    series: 'blue'
  },
  {
    id: 467,
    name: '黛蓝',
    pinyin: 'dài lán',
    hex: '#425066',
    rgb: [
      66,
      80,
      102
    ],
    cmyk: [
      35,
      22,
      0,
      60
    ],
    desc: '深蓝色',
    series: 'blue'
  },
  {
    id: 468,
    name: '黛紫',
    pinyin: 'dài zǐ',
    hex: '#574266',
    rgb: [
      87,
      66,
      102
    ],
    cmyk: [
      15,
      35,
      0,
      60
    ],
    desc: '深紫色',
    series: 'blue'
  },
  {
    id: 469,
    name: '紫色',
    pinyin: 'zǐ sè',
    hex: '#8D4BBB',
    rgb: [
      141,
      75,
      187
    ],
    cmyk: [
      25,
      60,
      0,
      27
    ],
    desc: '蓝和红组成的颜色。古人以紫为祥瑞的颜色。代指与帝王、皇宫有关的事物',
    series: 'blue'
  },
  {
    id: 470,
    name: '紫酱',
    pinyin: 'zǐ jiàng',
    hex: '#815463',
    rgb: [
      129,
      84,
      99
    ],
    cmyk: [
      0,
      35,
      23,
      49
    ],
    desc: '浑浊的紫色',
    series: 'blue'
  },
  {
    id: 471,
    name: '酱紫',
    pinyin: 'jiàng zǐ',
    hex: '#815476',
    rgb: [
      129,
      84,
      118
    ],
    cmyk: [
      0,
      35,
      9,
      49
    ],
    desc: '紫中略带红的颜色',
    series: 'blue'
  },
  {
    id: 472,
    name: '紫檀',
    pinyin: 'zǐ tán',
    hex: '#4C221B',
    rgb: [
      76,
      34,
      27
    ],
    cmyk: [
      0,
      55,
      64,
      70
    ],
    desc: '檀木的颜色，也称乌檀色乌木色',
    series: 'blue'
  },
  {
    id: 473,
    name: '绀青绀紫',
    pinyin: 'gàn qīng gàn zǐ',
    hex: '#003371',
    rgb: [
      0,
      51,
      113
    ],
    cmyk: [
      100,
      55,
      0,
      56
    ],
    desc: '纯度较低的深紫色',
    series: 'blue'
  },
  {
    id: 474,
    name: '紫棠',
    pinyin: 'zǐ táng',
    hex: '#56004F',
    rgb: [
      86,
      0,
      79
    ],
    cmyk: [
      0,
      100,
      8,
      66
    ],
    desc: '黑红色',
    series: 'blue'
  },
  {
    id: 475,
    name: '青莲',
    pinyin: 'qīng lián',
    hex: '#801DAE',
    rgb: [
      128,
      29,
      174
    ],
    cmyk: [
      26,
      83,
      0,
      32
    ],
    desc: '偏蓝的紫色',
    series: 'blue'
  },
  {
    id: 476,
    name: '群青',
    pinyin: 'qún qīng',
    hex: '#4C8DAE',
    rgb: [
      76,
      141,
      174
    ],
    cmyk: [
      56,
      19,
      0,
      32
    ],
    desc: '深蓝色',
    series: 'blue'
  },
  {
    id: 477,
    name: '雪青',
    pinyin: 'xuě qīng',
    hex: '#B0A4E3',
    rgb: [
      176,
      164,
      227
    ],
    cmyk: [
      22,
      28,
      0,
      11
    ],
    desc: '浅蓝紫色',
    series: 'blue'
  },
  {
    id: 478,
    name: '丁香色',
    pinyin: 'dīng xiāng sè',
    hex: '#CCA4E3',
    rgb: [
      204,
      164,
      227
    ],
    cmyk: [
      10,
      28,
      0,
      11
    ],
    desc: '紫丁香的颜色，浅浅的紫色，很娇柔淡雅的色彩',
    series: 'blue'
  },
  {
    id: 479,
    name: '藕色',
    pinyin: 'ǒu sè',
    hex: '#EDD1D8',
    rgb: [
      237,
      209,
      216
    ],
    cmyk: [
      0,
      12,
      9,
      7
    ],
    desc: '浅灰而略带红的颜色',
    series: 'blue'
  },
  {
    id: 480,
    name: '藕荷色',
    pinyin: 'ǒu hé sè',
    hex: '#E4C6D0',
    rgb: [
      228,
      198,
      208
    ],
    cmyk: [
      0,
      13,
      9,
      11
    ],
    desc: '浅紫而略带红的颜色',
    series: 'blue'
  },
  {
    id: 481,
    name: '粗晶皀',
    pinyin: 'cū jīng bī',
    hex: '#43454A',
    rgb: [
      67,
      69,
      74
    ],
    cmyk: [
      9,
      7,
      0,
      71
    ],
    desc: '',
    series: 'black'
  },
  {
    id: 482,
    name: '百草霜',
    pinyin: 'bǎi cǎo shuāng',
    hex: '#303030',
    rgb: [
      48,
      48,
      48
    ],
    cmyk: [
      0,
      0,
      0,
      81
    ],
    desc: '',
    series: 'black'
  },
  {
    id: 483,
    name: '油烟墨',
    pinyin: 'yóu yān mò',
    hex: '#3F3F3C',
    rgb: [
      63,
      63,
      60
    ],
    cmyk: [
      0,
      0,
      5,
      75
    ],
    desc: '',
    series: 'black'
  },
  {
    id: 484,
    name: '黝',
    pinyin: 'yǒu',
    hex: '#6B6882',
    rgb: [
      107,
      104,
      130
    ],
    cmyk: [
      18,
      20,
      0,
      49
    ],
    desc: '本义为淡黑色或微青黑色。',
    series: 'black'
  },
  {
    id: 485,
    name: '乌色',
    pinyin: 'wū sè',
    hex: '#725E82',
    rgb: [
      114,
      94,
      130
    ],
    cmyk: [
      12,
      28,
      0,
      49
    ],
    desc: '暗而呈黑的颜色',
    series: 'black'
  },
  {
    id: 486,
    name: '玄青',
    pinyin: 'xuán qīng',
    hex: '#3D3B4F',
    rgb: [
      61,
      59,
      79
    ],
    cmyk: [
      23,
      25,
      0,
      69
    ],
    desc: '深黑色',
    series: 'black'
  },
  {
    id: 487,
    name: '乌黑',
    pinyin: 'wū hēi',
    hex: '#392F41',
    rgb: [
      57,
      47,
      65
    ],
    cmyk: [
      12,
      28,
      0,
      75
    ],
    desc: '深黑；漆黑',
    series: 'black'
  },
  {
    id: 488,
    name: '黎',
    pinyin: 'lí',
    hex: '#75664D',
    rgb: [
      117,
      102,
      77
    ],
    cmyk: [
      0,
      13,
      34,
      54
    ],
    desc: '黑中带黄似黎草色',
    series: 'black'
  },
  {
    id: 489,
    name: '黧',
    pinyin: 'lí',
    hex: '#5D513C',
    rgb: [
      93,
      81,
      60
    ],
    cmyk: [
      0,
      13,
      35,
      64
    ],
    desc: '黑中带黄的颜色',
    series: 'black'
  },
  {
    id: 490,
    name: '黝黑',
    pinyin: 'yǒu hēi',
    hex: '#665757',
    rgb: [
      102,
      87,
      87
    ],
    cmyk: [
      0,
      15,
      15,
      60
    ],
    desc: '（皮肤暴露在太阳光下而晒成的）青黑色',
    series: 'black'
  },
  {
    id: 491,
    name: '缁色',
    pinyin: 'zī sè',
    hex: '#493131',
    rgb: [
      73,
      49,
      49
    ],
    cmyk: [
      0,
      33,
      33,
      71
    ],
    desc: '帛黑色',
    series: 'black'
  },
  {
    id: 492,
    name: '煤黑',
    pinyin: 'méi hēi',
    hex: '#312520',
    rgb: [
      49,
      37,
      32
    ],
    cmyk: [
      0,
      24,
      35,
      81
    ],
    desc: '别称：象牙黑。都是黑，不过有冷暖之分',
    series: 'black'
  },
  {
    id: 493,
    name: '漆黑',
    pinyin: 'qī hēi',
    hex: '#161823',
    rgb: [
      22,
      24,
      35
    ],
    cmyk: [
      37,
      31,
      0,
      86
    ],
    desc: '非常黑的',
    series: 'black'
  },
  {
    id: 494,
    name: '黑色',
    pinyin: 'hēi sè',
    hex: '#000000',
    rgb: [
      0,
      0,
      0
    ],
    cmyk: [
      0,
      0,
      0,
      100
    ],
    desc: '亮度最低的非彩色的或消色差的物体的颜色；最暗的灰色；与白色截然不同的消色差的颜色；被认为特别属于那些既不能反射、又不能透过能使人感觉到的微小入射光的物体,任何亮度很低的物体颜色。',
    series: 'black'
  },
  {
    id: 495,
    name: '墨灰',
    pinyin: 'mò huī',
    hex: '#758A99',
    rgb: [
      117,
      138,
      153
    ],
    cmyk: [
      24,
      10,
      0,
      40
    ],
    desc: '即黑灰',
    series: 'black'
  },
  {
    id: 496,
    name: '墨色',
    pinyin: 'mò sè',
    hex: '#50616D',
    rgb: [
      80,
      97,
      109
    ],
    cmyk: [
      27,
      11,
      0,
      57
    ],
    desc: '即黑色',
    series: 'black'
  },
  {
    id: 497,
    name: '黯',
    pinyin: 'àn',
    hex: '#41555D',
    rgb: [
      65,
      85,
      93
    ],
    cmyk: [
      30,
      9,
      0,
      64
    ],
    desc: '深黑色、泛指黑色',
    series: 'black'
  },
  {
    id: 498,
    name: '玄色',
    pinyin: 'xuán sè',
    hex: '#622A1D',
    rgb: [
      98,
      42,
      29
    ],
    cmyk: [
      0,
      57,
      70,
      62
    ],
    desc: '赤黑色，黑中带红的颜色，又泛指黑色',
    series: 'black'
  }
];

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
