import { useMetrics } from '~/hooks/useMetrics';
import { useDailyReturns } from '~/hooks/useDailyReturns';
import { toast } from 'sonner';

import { MetricsTable } from '~/home/components/table/MetricsTable';
import { generateColumns } from '~/home/components/table/columns';
import { MetricsTableSkeleton } from '~/home/components/table/MetricsTableSkeleton';
import { ScrollArea, ScrollBar } from '~/components/ui/ScrollArea';

export function Metrics() {
  const {
    data: metricsData,
    isLoading,
    isError: isMetricsError,
    error: metricsError,
  } = useMetrics();
  const {
    data: dailyReturnData,
    isError: isDailyReturnsError,
    error: dailyReturnsError,
  } = useDailyReturns();

  if (isMetricsError) {
    toast.error(metricsError?.message);
    return <h2 className="text-5xl">:(</h2>;
  }

  if (isDailyReturnsError) {
    toast.error(dailyReturnsError?.message);
  }

  if (isLoading || !metricsData) {
    return <MetricsTableSkeleton></MetricsTableSkeleton>;
  }

  const columns = generateColumns(metricsData, dailyReturnData, isDailyReturnsError);

  return (
    <ScrollArea className="bg-card relative border-1">
      <MetricsTable columns={columns} data={metricsData} />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
