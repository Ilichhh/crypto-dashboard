import { useMetrics } from '~/hooks/useMetrics';

import { MetricsTable } from '~/home/components/table/MetricsTable';
import { generateColumns } from '~/home/components/table/columns';
import { ScrollArea, ScrollBar } from '../ui/ScrollArea';
import { MetricsTableSkeleton } from '~/home/components/table/MetricsTableSkeleton';

export function Metrics() {
  const { data, isLoading } = useMetrics();
  const columns = generateColumns(data);

  return (
    <section className="m-4 flex h-full flex-1 flex-col gap-4 overflow-hidden">
      <h1>Strategy Performance Report</h1>
      {isLoading ? (
        <MetricsTableSkeleton></MetricsTableSkeleton>
      ) : (
        <ScrollArea className="bg-card relative border-1">
          <MetricsTable columns={columns} data={data} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </section>
  );
}
