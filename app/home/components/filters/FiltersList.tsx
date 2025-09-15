import { useMetricsSchema } from '~/hooks/useMetricsSchema';

import { FiltersGroup } from './FiltersGroup';

export function FiltersList() {
  const { data, isLoading } = useMetricsSchema();

  if (isLoading) return '';
  return (
    <div className="flex flex-col items-start gap-8">
      {Object.keys(data).map((metricsGroup) => (
        <FiltersGroup
          metricsGroup={metricsGroup}
          metricsGroupList={data[metricsGroup]}
          key={metricsGroup}
        ></FiltersGroup>
      ))}
    </div>
  );
}
