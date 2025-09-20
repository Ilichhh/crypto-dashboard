import { FiltersList } from '~/home/components/filters/FiltersList';

export function Sidebar() {
  return (
    <aside className="bg-sidebar w-58 border-r">
      <FiltersList />
    </aside>
  );
}
