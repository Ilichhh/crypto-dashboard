import { useQuery } from '@tanstack/react-query';
import { useFiltersStore } from '~/lib/store/useFiltersStore';

export const useMetrics = () => {
  const { selectedMetrics } = useFiltersStore();

  const { data, isLoading } = useQuery({
    queryKey: ['metrics', selectedMetrics],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedMetrics.length > 0) {
        params.set('metrics', selectedMetrics.join(','));
      }
      const response = await fetch(`http://localhost:5000/api/metrics?${params.toString()}`);
      return await response.json();
    },
  });

  return { data, isLoading };
};
