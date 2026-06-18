import { Card, CardDescription, CardTitle } from '@/components/ui/Card';
import { MapPin } from 'lucide-react';
import KakaoMap from './KakaoMap';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';

const locationData = [
  { title: '대중교통', description: '지하철 및 버스 정보를 여기에 안내합니다' },
  {
    title: '주차 안내',
    description: '주차 가능 공간 및 이용 안내를 여기에 표시합니다',
  },
];

export default function Location() {
  return (
    <section className="bg-ivory px-6 py-13">
      <p className="mb-2 text-xs font-semibold text-cream">LOCATION</p>
      <h2 className="mb-8 text-2xl">오시는 길</h2>

      <div className="flex flex-col justify-center gap-5">
        <KakaoMap />

        <Card className="flex-row items-center gap-6 bg-warm-white p-6">
          <div className="shrink-0">
            <MapPin size={32} className="text-cream" />
          </div>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-charcoal">
              인천광역시 미추홀구 매소홀로 374
            </CardTitle>
            <CardDescription className="text-description">
              우편번호 22225
            </CardDescription>
          </div>
        </Card>

        <div className="flex gap-3">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://map.kakao.com/link/map/행복한교회,37.4401985,126.6635782"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'flex flex-1 items-center justify-center gap-3 bg-warm-white hover:bg-cream-light/90',
              'rounded-2xl border border-cream/30 shadow-sm',
            )}
          >
            <Image
              src="/icons/kakaomap_icon.png"
              alt="kakaomap"
              width={25}
              height={25}
            />
            <p className="font-semibold">카카오맵으로 보기</p>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://map.naver.com/p/entry/place/16600562"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'flex flex-1 items-center justify-center gap-3 bg-warm-white hover:bg-cream-light/90',
              'rounded-2xl border border-cream/30 shadow-sm',
            )}
          >
            <Image
              src="/icons/navermap_icon.png"
              alt="navermap"
              width={25}
              height={25}
            />
            <p className="font-semibold">네이버지도로 보기</p>
          </Link>
        </div>

        {locationData.map((item) => (
          <Card
            key={item.title}
            className="flex-row items-center gap-6 bg-cream/10 p-6"
          >
            <div className="flex flex-col gap-1">
              <CardTitle className="text-charcoal">{item.title}</CardTitle>
              <CardDescription className="text-description">
                {item.description}
              </CardDescription>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
