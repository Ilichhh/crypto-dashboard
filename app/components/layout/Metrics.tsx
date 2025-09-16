import { useMetrics } from '~/hooks/useMetrics';
import { MetricsTable } from '~/home/components/table/MetricsTable';
import { generateColumns } from '~/home/components/table/Columns';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

export function Metrics() {
  const { data, isLoading } = useMetrics();
  const columns = generateColumns(data);

  return (
    <section className="m-4 flex h-full flex-1 flex-col gap-4 overflow-hidden">
      <h1>Strategy Performance Report</h1>
      <ScrollArea className="bg-card relative border-1">
        {isLoading ? 'Loading...' : <MetricsTable columns={columns} data={data} />}
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
}
