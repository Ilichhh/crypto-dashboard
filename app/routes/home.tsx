/* eslint-disable no-empty-pattern */
import { Tables } from '~/tables/tables';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Crypto Dashboard' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return <Tables />;
}
