import { useMetricsSchema } from '~/hooks/useMetricsSchema';

import { FiltersGroup } from './FiltersGroup';
import type { MetricsSchema } from '~/types/metrics';
import { Button } from '~/components/ui/Button';
import { useFiltersStore } from '~/lib/store/useFiltersStore';

export function FiltersList() {
  const { data, isLoading } = useMetricsSchema();
  const { selectedMetrics, clearFilters } = useFiltersStore();

  if (isLoading || !data) return '';

  return (
    <div className="flex flex-col items-start gap-6 px-4 py-4">
      <h2>Filters</h2>
      {(Object.keys(data) as Array<keyof MetricsSchema>).map((metricsGroup) => (
        <FiltersGroup
          key={metricsGroup}
          metricsGroup={metricsGroup}
          metricsGroupList={data[metricsGroup]}
        />
      ))}
      <Button
        className="w-full"
        variant="outline"
        disabled={!selectedMetrics.length}
        onClick={clearFilters}
      >
        Clear all
      </Button>
    </div>
  );
}
