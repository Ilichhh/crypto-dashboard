import { useMetricsSchema } from '~/hooks/useMetricsSchema';

import { FiltersGroup } from './FiltersGroup';
import type { MetricsSchema } from '~/types/metrics';

export function FiltersList() {
  const { data, isLoading } = useMetricsSchema();

  if (isLoading || !data) return '';

  return (
    <div className="flex flex-col items-start gap-8 px-4 py-8">
      {(Object.keys(data) as Array<keyof MetricsSchema>).map((metricsGroup) => (
        <FiltersGroup
          key={metricsGroup}
          metricsGroup={metricsGroup}
          metricsGroupList={data[metricsGroup]}
        />
      ))}
    </div>
  );
}
