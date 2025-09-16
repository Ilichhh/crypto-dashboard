import { FiltersList } from '~/home/components/filters/FiltersList';

export function Sidebar() {
  return (
    <aside className="bg-sidebar w-56 border-r">
      <FiltersList />
    </aside>
  );
}
