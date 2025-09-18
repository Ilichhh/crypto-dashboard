import { AreaChart, Area } from 'recharts';
import { type ChartConfig, ChartContainer } from '~/components/ui/chart';
import type { DailyReturn } from '~/types/dailyReturn';

interface CumulativeReturnSparklineProps<K extends keyof DailyReturn> {
  data: DailyReturn[];
  strategy: K;
  isPositive: boolean;
}

export function CumulativeReturnSparkline<K extends keyof DailyReturn>({
  data,
  strategy,
  isPositive,
}: CumulativeReturnSparklineProps<K>) {
  const chartConfig: ChartConfig = {
    [strategy]: {
      label: String(strategy),
    },
  };

  return (
    <ChartContainer config={chartConfig} className="max-h-10 w-full min-w-30">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-positive)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-positive)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-negative)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-negative" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey={strategy}
          stroke={
            isPositive ? 'var(--color-positive-foreground)' : 'var(--color-negative-foreground)'
          }
          fillOpacity={1}
          fill={isPositive ? 'url(#colorPositive)' : 'url(#colorNegative)'}
        />
      </AreaChart>
    </ChartContainer>
  );
}
