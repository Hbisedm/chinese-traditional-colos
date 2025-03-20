'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import zhColors, { colorSeries } from '@/data/zh-colors';
import { Color } from '@/lib/types';
import { ColorCard } from '@/components/ColorCard';
import { ColorSeriesPicker } from '@/components/ColorSeriesPicker';
import { RandomButton } from '@/components/RandomButton';
import { ColorDetailModal } from '@/components/ColorDetailModal';
import { ColorFooter } from '@/components/ColorFooter';
import { getRandomColor } from '@/lib/color-utils';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';

export default function Home() {
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [displayColors, setDisplayColors] = useState<Color[]>(zhColors);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Filter colors by selected series
  useEffect(() => {
    if (selectedSeries === 'all') {
      setDisplayColors(zhColors);
    } else {
      setDisplayColors(colorSeries[selectedSeries] || []);
    }
  }, [selectedSeries]);

  const handleRandomColor = () => {
    const randomColor = getRandomColor(zhColors);
    setSelectedColor(randomColor);
    setIsModalOpen(true);
  };

  const handleColorClick = (color: Color) => {
    setSelectedColor(color);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="app-background"></div>

      <header className="bg-background sticky top-0 z-10 border-b">
        <div className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">中国传统色</h1>
            <div className="flex items-center space-x-2">
              <Link href="/about">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Info size={16} />
                  <span>关于</span>
                </Button>
              </Link>
              <RandomButton onClick={handleRandomColor} />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6 flex-1">
        <div className="space-y-8">
          <div>
            <ColorSeriesPicker
              activeSeries={selectedSeries}
              onChange={setSelectedSeries}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayColors.map((color) => (
              <ColorCard
                key={color.id}
                color={color}
                onClick={() => handleColorClick(color)}
                isSelected={selectedColor?.id === color.id}
              />
            ))}
          </div>
        </div>
      </main>

      <ColorFooter />

      <ColorDetailModal
        color={selectedColor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
