import { Checkbox } from '~/components/ui/Checkbox';
import { Label } from '~/components/ui/Label';

interface FilterItemProps {
  metric: string;
  checked: boolean | 'indeterminate';
  handleCheckedChange: (checked: boolean) => void;
}

export function FilterItem({ metric, checked, handleCheckedChange }: FilterItemProps) {
  return (
    <div className="flex flex-1 justify-between gap-2">
      <Label htmlFor={metric}>{metric}</Label>
      <Checkbox id={metric} checked={checked} onCheckedChange={handleCheckedChange} />
    </div>
  );
}
