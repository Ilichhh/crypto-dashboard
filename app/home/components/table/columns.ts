import type { ColumnDef } from '@tanstack/react-table';
import type { StrategyMetrics } from '~/types/metrics';

const formatValue = (value: unknown, key: string) => {
  if (!value && typeof value !== 'number') return '-';
  if (typeof value !== 'number') return value;

  if (key.includes('%')) return `${value.toFixed(1)}%`;
  if (key.includes('days')) return value;
  return value.toFixed(4);
};

export function generateColumns(data: StrategyMetrics[]): ColumnDef<StrategyMetrics>[] {
  if (!data || data.length === 0) return [];

  return Object.keys(data[0]).map((key) => ({
    accessorKey: key,
    header: key,
    cell: (info) => formatValue(info.getValue(), key),
  }));
}
