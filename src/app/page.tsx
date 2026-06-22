import Hero from '@/components/home/Hero';
import Location from '@/components/home/Location';
import Schedule from '@/components/home/Schedule';
import Sermon from '@/components/home/Sermon';
import Values from '@/components/home/Values';
import Welcome from '@/components/home/Welcome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '행복한 교회',
  description:
    '행복한 교회에 오신 것을 환영합니다. 저희는 사랑과 희망을 나누는 공동체입니다.',
  openGraph: {
    title: '행복한 교회',
    description:
      '행복한 교회에 오신 것을 환영합니다. 저희는 사랑과 희망을 나누는 공동체입니다.',
    siteName: '행복한 교회',
    images: [
      {
        url: '/images/church.jpeg',
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Values />
      <Welcome />
      <Schedule />
      <Sermon />
      <Location />
    </main>
  );
}
