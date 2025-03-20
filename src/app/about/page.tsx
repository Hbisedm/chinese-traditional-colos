'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ColorFooter } from '@/components/ColorFooter';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="app-background"></div>

      <header className="bg-background sticky top-0 z-10 border-b">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">中国传统色</h1>
            <Link href="/">
              <Button variant="ghost">返回主页</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">关于本站</h1>

          <div className="prose prose-zinc dark:prose-invert">
            <p>
              中国传统色（Traditional Chinese Colors）是一个展示和学习中国传统颜色的网站。
              这些颜色从中国古代文学、绘画、陶瓷、染料和其他各种艺术形式中提取，拥有上千年的历史。
            </p>

            <h2>中国传统色彩系统</h2>
            <p>
              中国传统色彩有着独特而丰富的体系，不仅包含了五行学说中的青（绿）、赤（红）、黄、白、黑五色，
              还包括了更多衍生的美丽色彩。这些颜色的命名独具诗意，如"霜天月明"、"胭脂水"等，
              富有文化意境与历史背景。
            </p>

            <h2>关于这个项目</h2>
            <p>
              本项目旨在整理和展示中国传统色系，提供颜色的名称、拼音、十六进制值、RGB值、CMYK值以及相关描述，
              让设计师、艺术家、开发者以及对传统文化感兴趣的人能够方便地使用这些颜色，将中国传统美学带入现代设计。
            </p>

            <h2>数据来源</h2>
            <p>
              本站的颜色数据收集整理自多种公开资料，包括但不限于：
            </p>
            <ul>
              <li>古代文献记载的色彩描述</li>
              <li>传统绘画使用的色彩</li>
              <li>中国传统染色工艺用色</li>
              <li>现代色彩学研究成果</li>
            </ul>

            <h2>隐私声明</h2>
            <p>
              本网站不收集任何个人信息，所有功能均在本地运行，无需担心隐私问题。
            </p>

            <h2>开放源代码</h2>
            <p>
              本项目代码已在GitHub开源，欢迎访问
              <a href="https://github.com/imoyao/GUSCSS" target="_blank" rel="noreferrer" className="mx-1">
                GitHub 仓库
              </a>
              了解更多信息或贡献代码。
            </p>
          </div>
        </div>
      </main>

      <ColorFooter />
    </div>
  );
}
