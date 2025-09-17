import { useQuery } from '@tanstack/react-query';
import { useFiltersStore } from '~/lib/store/useFiltersStore';
import { api } from '~/api/api';

export const useMetrics = () => {
  const { selectedMetrics } = useFiltersStore();

  const { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: ['metrics', selectedMetrics],
    queryFn: async () => {
      const response = await api.get('/api/metrics', {
        params: { metrics: selectedMetrics.length ? selectedMetrics : undefined },
      });
      return response.data;
    },
  });

  return { data, error, isError, isLoading, isFetching };
};
