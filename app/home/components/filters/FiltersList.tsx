import { useMetricsSchema } from '~/hooks/useMetricsSchema';

import { FilterItem } from './FilterItem';

export function FiltersList() {
  const { data, isLoading } = useMetricsSchema();

  if (isLoading) return '';
  return (
    <div className="flex flex-col items-start gap-2">
      {Object.keys(data).map((metric) => (
        <FilterItem metric={metric} key={metric}></FilterItem>
      ))}
    </div>
  );
}
