import { Button } from '~/components/ui/button';

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex min-h-0 flex-1 flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <div className="max-w-[100vw] p-4">Crypto Dashboard</div>
        </header>
        <div className="w-full max-w-[300px] space-y-6 px-4">
          <Button>Click me</Button>
        </div>
      </div>
    </main>
  );
}
