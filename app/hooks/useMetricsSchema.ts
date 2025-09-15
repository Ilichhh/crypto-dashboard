import { useQuery } from '@tanstack/react-query';

export const useMetricsSchema = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['metricsSchema'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/api/metrics/schema');
      return await response.json();
    },
  });

  console.log(data);
  return { data, isLoading };
};
