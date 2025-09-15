import { FilterItem } from './FilterItem';
import { useFiltersStore } from '~/lib/store/useFiltersStore';

interface FiltersGroupProps {
  metricsGroup: string;
  metricsGroupList: string[];
}

export function FiltersGroup({ metricsGroup, metricsGroupList }: FiltersGroupProps) {
  const { selectedMetrics, toggleMetric, toggleGroup } = useFiltersStore();

  const selectedInGroup = metricsGroupList.filter((metric) => selectedMetrics.includes(metric));

  const allChecked = metricsGroupList.length && selectedInGroup.length === metricsGroupList.length;
  const partiallyChecked =
    selectedInGroup.length && selectedInGroup.length < metricsGroupList.length;

  return (
    <div className="space-y-4">
      <FilterItem
        metric={metricsGroup}
        checked={allChecked ? true : partiallyChecked ? 'indeterminate' : false}
        handleCheckedChange={(value) => toggleGroup(metricsGroupList, value)}
      ></FilterItem>
      <div className="space-y-2 pl-6">
        {metricsGroupList.map((metric) => (
          <FilterItem
            metric={metric}
            key={metric}
            checked={selectedInGroup.includes(metric)}
            handleCheckedChange={(value) => toggleMetric(metric, value)}
          ></FilterItem>
        ))}
      </div>
    </div>
  );
}
