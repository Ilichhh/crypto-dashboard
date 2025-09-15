import { FiltersList } from '~/home/components/filters/FiltersList';

export function Sidebar() {
  return (
    <aside className="bg-sidebar flex w-56 flex-col border-1 p-4">
      <div className="pb-2">Metrics</div>
      <FiltersList></FiltersList>
    </aside>
  );
}
