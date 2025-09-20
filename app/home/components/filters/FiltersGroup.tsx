import { useState } from 'react';
import { useFiltersStore } from '~/lib/store/useFiltersStore';

import { FilterItem } from './FilterItem';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible';
import { Button } from '~/components/ui/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FiltersGroupProps {
  metricsGroup: string;
  metricsGroupList: string[];
}

export function FiltersGroup({ metricsGroup, metricsGroupList }: FiltersGroupProps) {
  const { selectedMetrics, toggleMetric, toggleGroup } = useFiltersStore();
  const [isOpen, setIsOpen] = useState(false);

  const selectedInGroup = metricsGroupList.filter((metric) => selectedMetrics.includes(metric));

  const allChecked = metricsGroupList.length && selectedInGroup.length === metricsGroupList.length;
  const partiallyChecked =
    selectedInGroup.length && selectedInGroup.length < metricsGroupList.length;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <div className="flex flex-1 items-center gap-2">
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </Button>
        </CollapsibleTrigger>
        <FilterItem
          metric={metricsGroup}
          checked={allChecked ? true : partiallyChecked ? 'indeterminate' : false}
          handleCheckedChange={(value) => toggleGroup(metricsGroupList, value)}
        ></FilterItem>
      </div>
      <CollapsibleContent className="space-y-2 pt-2 pl-10">
        {metricsGroupList.map((metric) => (
          <FilterItem
            metric={metric}
            key={metric}
            checked={selectedInGroup.includes(metric)}
            handleCheckedChange={(value) => toggleMetric(metric, value)}
          ></FilterItem>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
