import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from '~/components/theme-provider';

import type { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
