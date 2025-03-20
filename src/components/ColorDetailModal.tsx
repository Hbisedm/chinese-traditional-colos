import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { Color } from '@/lib/types';
import { getContrastTextColor } from '@/lib/color-utils';

interface ColorDetailModalProps {
  color: Color | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ColorDetailModal({ color, isOpen, onClose }: ColorDetailModalProps) {
  const [copied, setCopied] = React.useState<string | null>(null);

  if (!color) return null;

  const contrastColor = getContrastTextColor(color.hex);

  const handleCopy = (value: string, type: string) => {
    navigator.clipboard.writeText(value);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl flex items-baseline">
            <span className="chinese-text">{color.name}</span>
            <span className="pinyin-text ml-3 text-xl text-muted-foreground">{color.pinyin}</span>
          </DialogTitle>
          <DialogDescription className="chinese-text">
            {color.desc}
          </DialogDescription>
        </DialogHeader>

        <div
          className="w-full h-52 rounded-md flex items-center justify-center my-4 relative"
          style={{
            backgroundColor: color.hex,
            color: contrastColor
          }}
        >
          <div className="chinese-text text-center font-bold text-4xl">{color.name}</div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
          <div className="space-y-2">
            <div className="text-sm font-medium">十六进制</div>
            <div className="flex items-center">
              <code className="bg-muted rounded px-3 py-2 text-base flex-1">{color.hex}</code>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => handleCopy(color.hex, 'hex')}
              >
                {copied === 'hex' ? <Check size={18} /> : <Copy size={18} />}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">RGB值</div>
            <div className="flex items-center">
              <code className="bg-muted rounded px-3 py-2 text-base flex-1">{`rgb(${color.rgb.join(', ')})`}</code>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => handleCopy(`rgb(${color.rgb.join(', ')})`, 'rgb')}
              >
                {copied === 'rgb' ? <Check size={18} /> : <Copy size={18} />}
              </Button>
            </div>
          </div>

          {color.cmyk && (
            <div className="space-y-2 sm:col-span-2">
              <div className="text-sm font-medium">CMYK值</div>
              <div className="flex items-center">
                <code className="bg-muted rounded px-3 py-2 text-base flex-1">{`cmyk(${color.cmyk.join(', ')})`}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={() => {
                    if (color.cmyk) {
                      handleCopy(`cmyk(${color.cmyk.join(', ')})`, 'cmyk');
                    }
                  }}
                >
                  {copied === 'cmyk' ? <Check size={18} /> : <Copy size={18} />}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
