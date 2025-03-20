import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const fontSans = FontSans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: '中国传统色 | Traditional Chinese Colors',
  description: '提供中国的传统颜色的信息概览，包括名称，HEX值，RGB值等。',
  authors: [{ name: 'Same', url: 'https://same.dev' }],
  keywords: ['中国传统色', 'chinese colors', 'chinese traditional colors', 'hex', 'rgb', 'cmyk'],
  openGraph: {
    title: '中国传统色 | Traditional Chinese Colors',
    description: '提供中国的传统颜色的信息概览，包括名称，HEX值，RGB值等。',
    url: 'https://colors.masantu.com',
    siteName: '中国传统色 | Traditional Chinese Colors',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
