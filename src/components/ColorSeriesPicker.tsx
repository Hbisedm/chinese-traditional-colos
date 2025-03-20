import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { seriesNames } from '@/data/zh-colors';

interface ColorSeriesPickerProps {
  activeSeries: string;
  onChange: (series: string) => void;
}

export function ColorSeriesPicker({ activeSeries, onChange }: ColorSeriesPickerProps) {
  // Convert object to array and sort by value
  const seriesEntries = Object.entries(seriesNames).sort(([, a], [, b]) => a.localeCompare(b));

  return (
    <Tabs value={activeSeries} className="w-full mb-6">
      <TabsList className="flex flex-wrap justify-start w-full h-auto bg-transparent">
        <TabsTrigger
          value="all"
          className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          onClick={() => onChange('all')}
        >
          全部
        </TabsTrigger>
        {seriesEntries.map(([id, name]) => (
          <TabsTrigger
            key={id}
            value={id}
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            onClick={() => onChange(id)}
          >
            {name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
