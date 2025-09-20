import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from '~/components/ThemeProvider';

import type { PropsWithChildren } from 'react';

const queryClient = new QueryClient();

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
