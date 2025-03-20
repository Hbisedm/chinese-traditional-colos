import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { Color } from '@/lib/types';
import { getContrastTextColor } from '@/lib/color-utils';

interface ColorCardProps {
  color: Color;
  onClick?: () => void;
  isSelected?: boolean;
}

export function ColorCard({ color, onClick, isSelected }: ColorCardProps) {
  const [copied, setCopied] = React.useState<string | null>(null);

  const contrastColor = getContrastTextColor(color.hex);

  const handleCopy = (value: string, type: string) => {
    navigator.clipboard.writeText(value);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Card
      className={`w-full overflow-hidden transition-all ${isSelected ? 'ring-2 ring-primary' : ''}`}
      onClick={onClick}
    >
      <div
        className="h-40 flex items-center justify-center relative"
        style={{
          backgroundColor: color.hex,
          color: contrastColor
        }}
      >
        <div className="chinese-text text-center font-bold text-3xl leading-none p-2 absolute left-0 top-0">{color.name}</div>
        <div className="pinyin-text text-lg absolute bottom-2 right-2">{color.pinyin}</div>
      </div>
      <CardContent className="p-4 space-y-3 mt-2">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">HEX</div>
          <div className="flex items-center space-x-2">
            <code className="bg-muted rounded px-2 py-1 text-sm">{color.hex}</code>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.stopPropagation();
                handleCopy(color.hex, 'hex');
              }}
            >
              {copied === 'hex' ? <Check size={16} /> : <Copy size={16} />}
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm font-medium">RGB</div>
          <div className="flex items-center space-x-2">
            <code className="bg-muted rounded px-2 py-1 text-sm">{`rgb(${color.rgb.join(', ')})`}</code>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={(e) => {
                e.stopPropagation();
                handleCopy(`rgb(${color.rgb.join(', ')})`, 'rgb');
              }}
            >
              {copied === 'rgb' ? <Check size={16} /> : <Copy size={16} />}
            </Button>
          </div>
        </div>

        {color.cmyk && (
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">CMYK</div>
            <div className="flex items-center space-x-2">
              <code className="bg-muted rounded px-2 py-1 text-sm">{`cmyk(${color.cmyk.join(', ')})`}</code>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation();
                  if (color.cmyk) {
                    handleCopy(`cmyk(${color.cmyk.join(', ')})`, 'cmyk');
                  }
                }}
              >
                {copied === 'cmyk' ? <Check size={16} /> : <Copy size={16} />}
              </Button>
            </div>
          </div>
        )}

        {color.desc && (
          <div className="text-sm mt-2">
            <span className="font-medium">描述：</span>
            <span className="chinese-text">{color.desc}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
