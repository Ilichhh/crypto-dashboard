import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { DailyReturn } from '~/types/dailyReturn';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTableValue = (value: unknown, key: string) => {
  if (!value && typeof value !== 'number') return '-';
  if (typeof value !== 'number') return value;

  if (key.includes('%')) return `${value.toFixed(1)}%`;
  if (key.includes('days')) return value;
  return (value as number).toFixed(4);
};

export function computeCumulativeReturnsForAll(data: DailyReturn[]): DailyReturn[] {
  const strategies = Object.keys(data[0]).filter((k) => k !== 'date') as Exclude<
    keyof DailyReturn,
    'date'
  >[];
  const cumulative: Record<string, number> = {};
  strategies.forEach((s) => (cumulative[s] = 1));

  return data.map((row) => {
    const newRow: DailyReturn = { ...row };
    strategies.forEach((s) => {
      const value = Number(row[s]);
      cumulative[s] = (1 + value) * cumulative[s];
      newRow[s] = cumulative[s];
    });
    return newRow;
  });
}
