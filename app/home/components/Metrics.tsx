import { useMetrics } from '~/hooks/useMetrics';
import { useDailyReturns } from '~/hooks/useDailyReturns';
import { toast } from 'sonner';

import { MetricsTable } from '~/home/components/table/MetricsTable';
import { generateColumns } from '~/home/components/table/columns';
import { MetricsTableSkeleton } from '~/home/components/table/MetricsTableSkeleton';
import { ScrollArea, ScrollBar } from '~/components/ui/ScrollArea';

export function Metrics() {
  const { data: metricsData, isLoading, isError, error } = useMetrics();
  const { data: dailyReturnData } = useDailyReturns();

  if (isLoading || !metricsData || !dailyReturnData) {
    return <MetricsTableSkeleton></MetricsTableSkeleton>;
  }

  if (isError) {
    toast.error(error?.message);
    return <h2 className="text-5xl">:(</h2>;
  }

  const columns = generateColumns(metricsData, dailyReturnData);

  return (
    <ScrollArea className="bg-card relative border-1">
      <MetricsTable columns={columns} data={metricsData} />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
