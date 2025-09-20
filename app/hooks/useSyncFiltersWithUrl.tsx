import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { useFiltersStore } from '~/lib/store/useFiltersStore';

export const useSyncFiltersWithUrl = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectedMetrics, setSelectedMetrics } = useFiltersStore();

  useEffect(() => {
    const metricsFromUrl = searchParams.getAll('metrics');
    if (metricsFromUrl.length) {
      setSelectedMetrics(metricsFromUrl);
    }
  }, []);

  useEffect(() => {
    if (selectedMetrics.length) {
      setSearchParams({ metrics: selectedMetrics });
    } else {
      setSearchParams({});
    }
  }, [selectedMetrics, setSearchParams]);
};
