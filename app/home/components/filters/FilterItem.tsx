import { Checkbox } from '~/components/ui/checkbox';
import { Label } from '~/components/ui/label';

interface FilterItemProps {
  metric: string;
}

export function FilterItem({ metric }: FilterItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Checkbox id={metric} />
      <Label htmlFor={metric}>{metric}</Label>
    </div>
  );
}
