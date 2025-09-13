import { Header } from '~/components/layout/Header';
import { Sidebar } from '~/components/layout/Sidebar';
import { Table } from '~/components/layout/Table';

export function Tables() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header></Header>
      <main className="flex flex-1">
        <Sidebar></Sidebar>
        <Table></Table>
      </main>
    </div>
  );
}
