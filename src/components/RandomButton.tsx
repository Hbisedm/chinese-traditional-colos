import React from 'react';
import { Button } from '@/components/ui/button';
import { Shuffle } from 'lucide-react';

interface RandomButtonProps {
  onClick: () => void;
}

export function RandomButton({ onClick }: RandomButtonProps) {
  return (
    <Button
      variant="secondary"
      className="flex items-center space-x-2"
      onClick={onClick}
    >
      <Shuffle size={16} />
      <span>随机颜色</span>
    </Button>
  );
}
