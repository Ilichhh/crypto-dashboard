import { Button } from '~/components/ui/button';

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="max-w-[100vw] p-4">Crypto Dashboard</div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <Button>Click me</Button>
        </div>
      </div>
    </main>
  );
}
