import { CumulativeReturnSparkline } from '~/home/components/CumulativeReturnSparkline';
import { Metrics } from '~/home/components/Metrics';
import { useDailyReturns } from '~/hooks/useDailyReturns';

export function MainSection() {
  const { data, isLoading } = useDailyReturns();

  if (isLoading || !data) {
    return 'Loading';
  }
  console.log(data);
  return (
    <section className="m-4 flex h-full flex-1 flex-col gap-4 overflow-hidden">
      <h1>Strategy Performance Report</h1>
      <CumulativeReturnSparkline data={data} strategy="BTC"></CumulativeReturnSparkline>
      <Metrics></Metrics>
    </section>
  );
}
