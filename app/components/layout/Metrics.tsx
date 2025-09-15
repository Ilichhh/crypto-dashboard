import { useMetrics } from '~/hooks/useMetrics';
import { MetricsTable } from '~/home/components/table/MetricsTable';
import { generateColumns } from '~/home/components/table/Columns';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';

export function Metrics() {
  const { data, isLoading } = useMetrics();
  const columns = generateColumns(data);

  return (
    <ScrollArea className="h-full flex-1 overflow-hidden">
      {isLoading ? 'Loading...' : <MetricsTable columns={columns} data={data} />}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
