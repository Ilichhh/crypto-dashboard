import { useMetrics } from '~/hooks/useMetrics';
import { MetricsTable } from '~/home/components/MetricsTable';
import { generateColumns } from '~/home/components/Columns';

export function Metrics() {
  const { data, isLoading } = useMetrics();
  const columns = generateColumns(data);

  return (
    <section className="flex-1 p-4">
      {isLoading ? (
        'Loading...'
      ) : (
        <div className="container border">
          <MetricsTable columns={columns} data={data} />
        </div>
      )}
    </section>
  );
}
