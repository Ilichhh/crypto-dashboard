import { FiltersList } from '~/home/components/filters/FiltersList';

export function Sidebar() {
  return (
    <aside className="bg-sidebar flex w-56 flex-col border-1 px-4 py-8">
      <FiltersList></FiltersList>
    </aside>
  );
}
