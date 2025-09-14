import { type ColumnDef } from '@tanstack/react-table';

export type MetricRow = {
  strategy: string;
  [key: string]: string | number;
};

const formatValue = (value: unknown, key: string) => {
  if (!value) return '-';
  if (typeof value !== 'number') return value;

  if (key.includes('%')) return `${value.toFixed(1)}%`;
  if (key.includes('days')) return value;
  return value.toFixed(4);
};

export function generateColumns(data: MetricRow[]): ColumnDef<MetricRow>[] {
  if (!data || data.length === 0) return [];

  return Object.keys(data[0]).map((key) => ({
    accessorKey: key,
    header: key,
    cell: (info) => formatValue(info.getValue(), key),
  }));
}
