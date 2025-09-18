import { AreaChart, Area } from 'recharts';
import { type ChartConfig, ChartContainer } from '~/components/ui/chart';
import type { DailyReturn } from '~/types/dailyReturn';

interface CumulativeReturnSparklineProps<K extends keyof DailyReturn> {
  data: DailyReturn[];
  strategy: K;
}

export function CumulativeReturnSparkline<K extends keyof DailyReturn>({
  data,
  strategy,
}: CumulativeReturnSparklineProps<K>) {
  const chartConfig: ChartConfig = {
    [strategy]: {
      label: String(strategy),
      color: 'var(--color-positive-foreground)',
    },
  };

  let cumulative = 1;
  const chartData = data.map((row) => {
    const value = Number(row[strategy]);
    cumulative = (1 + value) * cumulative;
    return {
      ...row,
      [strategy]: cumulative,
    };
  });

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <AreaChart width={730} height={250} data={chartData}>
        <defs>
          <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-positive-foreground)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-positive-foreground)" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorNegative" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-negative-foreground)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-negative-foreground)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey={strategy}
          stroke="var(--color-positive-foreground)"
          fillOpacity={1}
          fill="url(#colorPositive)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
