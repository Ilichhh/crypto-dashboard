import { Header } from '~/components/layout/Header';
import { Sidebar } from '~/components/layout/Sidebar';
import { Metrics } from '~/components/layout/Metrics';

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header></Header>
      <main className="flex flex-1">
        <Sidebar></Sidebar>
        <Metrics></Metrics>
      </main>
    </div>
  );
}
