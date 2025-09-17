import { Header } from '~/components/layout/Header';
import { Sidebar } from '~/components/layout/Sidebar';
import { MainSection } from '~/components/layout/MainSection';

export function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1">
        <Sidebar />
        <MainSection />
      </main>
    </div>
  );
}
