import { useQuery } from '@tanstack/react-query';
import { api } from '~/api/api';

import type { MetricsSchema } from '~/types/metrics';

export const useMetricsSchema = () => {
  const { data, error, isLoading } = useQuery<MetricsSchema>({
    queryKey: ['metricsSchema'],
    queryFn: async () => {
      const response = await api.get('/api/metrics/schema');
      return response.data;
    },
  });

  return { data, error, isLoading };
};
