import { Card, CardDescription, CardTitle } from '@/components/ui/Card';
import { Bus, MapPin, ParkingSquare } from 'lucide-react';
import KakaoMap from './KakaoMap';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';

const transitData = [
  {
    stop: '학익고등학교·학익SKVIEW 하차',
    walk: '도보 1분',
    buses: ['5', '46', '518', '520'],
    note: '교회와 같은 방향 (대동아파트 방면)',
  },
  {
    stop: '학익고등학교·학익SKVIEW 하차',
    walk: '도보 3분',
    buses: ['5', '46', '518', '520'],
    note: '반대편 하차 후 횡단보도 이용 (동아풍림아파트 방면)',
  },
];

const parkingData = [
  { label: '외부 주차장', description: '교회 건물 외부 주차 공간' },
  { label: '건물 내부 주차장', description: '건물 내부 주차 공간' },
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

        <div className="flex w-full gap-3">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://map.kakao.com/link/map/행복한교회,37.4401985,126.6635782"
            className={cn(
              buttonVariants({ size: 'default' }),
              'flex min-w-0 flex-1 items-center justify-center gap-2 bg-warm-white hover:bg-cream-light/90',
              'h-12 rounded-2xl border border-cream/30 shadow-sm',
            )}
          >
            <Image
              src="/icons/kakaomap_icon.png"
              alt="kakaomap"
              width={20}
              height={20}
              className="shrink-0"
            />
            <span className="truncate text-sm font-semibold">
              <span className="sm:hidden">카카오맵</span>
              <span className="hidden sm:inline">카카오맵으로 보기</span>
            </span>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://map.naver.com/p/entry/place/16600562"
            className={cn(
              buttonVariants({ size: 'default' }),
              'flex min-w-0 flex-1 items-center justify-center gap-2 bg-warm-white hover:bg-cream-light/90',
              'h-12 rounded-2xl border border-cream/30 shadow-sm',
            )}
          >
            <Image
              src="/icons/navermap_icon.png"
              alt="navermap"
              width={20}
              height={20}
              className="shrink-0"
            />
            <span className="truncate text-sm font-semibold">
              <span className="sm:hidden">네이버지도</span>
              <span className="hidden sm:inline">네이버지도로 보기</span>
            </span>
          </Link>
        </div>

        <Card className="gap-0 bg-cream/10 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Bus size={20} className="text-cream" />
            <CardTitle className="text-charcoal">대중교통</CardTitle>
          </div>
          <div className="flex flex-col gap-4">
            {transitData.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-charcoal">
                    {item.stop}
                  </span>
                  <span className="rounded-full bg-cream/30 px-2 py-0.5 text-xs text-charcoal">
                    {item.walk}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.buses.map((bus) => (
                    <span
                      key={bus}
                      className="rounded-full bg-warm-white px-2.5 py-0.5 text-sm font-semibold text-charcoal shadow-sm"
                    >
                      {bus}
                    </span>
                  ))}
                </div>
                <CardDescription className="text-description">
                  {item.note}
                </CardDescription>
              </div>
            ))}
          </div>
        </Card>

        <Card className="gap-0 bg-cream/10 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ParkingSquare size={20} className="text-cream" />
              <CardTitle className="text-charcoal">주차 안내</CardTitle>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {parkingData.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-sm font-medium text-charcoal">
                  {item.label}
                </span>
                <CardDescription className="text-description">
                  {item.description}
                </CardDescription>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
