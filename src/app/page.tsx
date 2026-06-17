import Hero from '@/components/home/Hero';
import Schedule from '@/components/home/Schedule';
import Sermon from '@/components/home/Sermon';
import Values from '@/components/home/Values';
import Welcome from '@/components/home/Welcome';

export default function Home() {
  return (
    <main>
      <Hero />
      <Values />
      <Welcome />
      <Schedule />
      <Sermon />
    </main>
  );
}
