import { create } from 'zustand';

interface FiltersState {
  selected: string[];

  toggleMetric: (metric: string, checked: boolean) => void;
  toggleGroup: (metrics: string[], checked: boolean) => void;
}

export const useFiltersStore = create<FiltersState>((set) => ({
  selected: [],

  toggleMetric: (metric, checked) =>
    set((state) => ({
      selected: checked
        ? [...state.selected, metric]
        : state.selected.filter((item) => item !== metric),
    })),

  toggleGroup: (metrics, checked) =>
    set((state) => ({
      selected: checked
        ? [...new Set([...state.selected, ...metrics])]
        : state.selected.filter((item) => !metrics.includes(item)),
    })),
}));
