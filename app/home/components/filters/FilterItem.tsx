import { Checkbox } from '~/components/ui/Checkbox';
import { Label } from '~/components/ui/Label';

interface FilterItemProps {
  metric: string;
  checked: boolean | 'indeterminate';
  handleCheckedChange: (checked: boolean) => void;
}

export function FilterItem({ metric, checked, handleCheckedChange }: FilterItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Checkbox id={metric} checked={checked} onCheckedChange={handleCheckedChange} />
      <Label htmlFor={metric}>{metric}</Label>
    </div>
  );
}
