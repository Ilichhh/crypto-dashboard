import { computeCumulativeReturnsForAll, formatTableValue } from '~/lib/utils';

import { CumulativeReturnSparkline } from './CumulativeReturnSparkline';

import type { ColumnDef } from '@tanstack/react-table';
import type { DailyReturn } from '~/types/dailyReturn';
import type { StrategyMetrics } from '~/types/metrics';

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
      if (isDailyReturnsError) return <div className="text-muted-foreground min-w-30">oops...</div>;
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
    cell: (info) => formatTableValue(info.getValue(), key),
  }));

  baseColumns.splice(1, 0, sparklineColumn);
  return baseColumns;
}
