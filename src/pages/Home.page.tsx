import { Welcome } from '../components/Welcome/Welcome';
import { OverallList } from '@/components/OverallList/OverallList';

export function HomePage() {
  return (
    <>
      <Welcome />
      <OverallList />
    </>
  );
}
