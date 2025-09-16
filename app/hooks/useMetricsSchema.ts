import { useQuery } from '@tanstack/react-query';
import { api } from '~/api/api';

export const useMetricsSchema = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['metricsSchema'],
    queryFn: async () => {
      const response = await api.get('/api/metrics/schema');
      return response.data;
    },
  });

  return { data, error, isLoading };
};
