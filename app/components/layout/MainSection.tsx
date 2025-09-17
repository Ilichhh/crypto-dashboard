import { Metrics } from '~/home/components/Metrics';

export function MainSection() {
  return (
    <section className="m-4 flex h-full flex-1 flex-col gap-4 overflow-hidden">
      <h1>Strategy Performance Report</h1>
      <Metrics></Metrics>
    </section>
  );
}
