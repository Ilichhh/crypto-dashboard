import { useQuery } from '@tanstack/react-query';
import { api } from '~/api/api';

import type { DailyReturn } from '~/types/dailyReturn';

export const useDailyReturns = () => {
  const { data, error, isError, isLoading, isFetching } = useQuery<DailyReturn[]>({
    queryKey: ['dailyReturns'],
    queryFn: async () => {
      const response = await api.get('/api/daily-returns');
      return response.data;
    },
  });

  return { data, error, isError, isLoading, isFetching };
};
