/* eslint-disable no-empty-pattern */
import { Home } from '~/home/Home';
import type { Route } from '../+types/root';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Crypto Dashboard' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function HomePage() {
  return <Home />;
}
