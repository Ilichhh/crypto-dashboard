import { create } from 'zustand';

interface FiltersState {
  selectedMetrics: string[];

  setSelectedMetrics: (metrics: string[]) => void;
  toggleMetric: (metric: string, checked: boolean) => void;
  toggleGroup: (metrics: string[], checked: boolean) => void;
  clearFilters: () => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  selectedMetrics: [],

  setSelectedMetrics: (metrics) => set({ selectedMetrics: metrics }),

  toggleMetric: (metric, checked) =>
    set((state) => ({
      selectedMetrics: checked
        ? [...state.selectedMetrics, metric]
        : state.selectedMetrics.filter((item) => item !== metric),
    })),

  toggleGroup: (metrics, checked) =>
    set((state) => ({
      selectedMetrics: checked
        ? [...new Set([...state.selectedMetrics, ...metrics])]
        : state.selectedMetrics.filter((item) => !metrics.includes(item)),
    })),

  clearFilters: () => set({ selectedMetrics: [] }),
}));
