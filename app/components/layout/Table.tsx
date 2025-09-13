import { useMetrics } from '~/hooks/useMetrics';

export function Table() {
  const { data, isLoading } = useMetrics();
  console.log(data);

  return (
    <section className="flex-1 p-4">
      <h2 className="mb-4">Content Area</h2>

      {isLoading ? 'Loading...' : <div>Content loaded</div>}
    </section>
  );
}
