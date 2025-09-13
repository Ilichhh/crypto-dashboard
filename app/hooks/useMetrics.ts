import { useQuery } from '@tanstack/react-query';

export const useMetrics = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['metrics'],
    queryFn: async () => {
      const response = await fetch('http://localhost:5000/api/metrics');
      return await response.json();
    },
  });

  return { data, isLoading };
};
