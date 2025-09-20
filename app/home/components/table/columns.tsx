import { CumulativeReturnSparkline } from './CumulativeReturnSparkline';

import type { ColumnDef } from '@tanstack/react-table';
import type { DailyReturn } from '~/types/dailyReturn';
import type { StrategyMetrics } from '~/types/metrics';

const formatValue = (value: unknown, key: string) => {
  if (!value && typeof value !== 'number') return '-';
  if (typeof value !== 'number') return value;

  if (key.includes('%')) return `${value.toFixed(1)}%`;
  if (key.includes('days')) return value;
  return (value as number).toFixed(4);
};

function computeCumulativeReturnsForAll(data: DailyReturn[]): DailyReturn[] {
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

export function generateColumns(
  metricsData: StrategyMetrics[],
  dailyReturnData: DailyReturn[] | undefined,
  isDailyReturnsError: boolean
): ColumnDef<StrategyMetrics>[] {
  if (!metricsData || !metricsData.length) return [];

  let cumulativeData: DailyReturn[] | undefined;
  if (dailyReturnData) {
    cumulativeData = computeCumulativeReturnsForAll(dailyReturnData);
  }

  const sparklineColumn: ColumnDef<StrategyMetrics> = {
    accessorKey: 'All time',
    header: 'All time',
    cell: (info) => {
      if (isDailyReturnsError)
        return <span className="text-muted-foreground min-w-30">oops...</span>;
      if (!cumulativeData) return <div className="text-muted-foreground min-w-30">loading...</div>;

      const strategy = info.row.original.Strategy as keyof DailyReturn;
      const lastRow = cumulativeData[cumulativeData.length - 1];
      const key = strategy as Exclude<keyof DailyReturn, 'date'>;
      const isPositive = lastRow[key] >= 1;

      return (
        <CumulativeReturnSparkline
          data={cumulativeData}
          strategy={strategy}
          isPositive={isPositive}
        />
      );
    },
  };

  const baseColumns: ColumnDef<StrategyMetrics>[] = Object.keys(metricsData[0]).map((key) => ({
    accessorKey: key,
    header: key,
    cell: (info) => formatValue(info.getValue(), key),
  }));

  baseColumns.splice(1, 0, sparklineColumn);
  return baseColumns;
}
