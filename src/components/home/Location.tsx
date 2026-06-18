'use client';

import { Card, CardDescription, CardTitle } from '@/components/ui/Card';
import { MapPin } from 'lucide-react';
import { useRef } from 'react';
import Script from 'next/script';

const locationData = [
  { title: '대중교통', description: '지하철 및 버스 정보를 여기에 안내합니다' },
  {
    title: '주차 안내',
    description: '주차 가능 공간 및 이용 안내를 여기에 표시합니다',
  },
];

const LAT = 37.4401985;
const LNG = 126.6635782;

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  const initMap = () => {
    window.kakao.maps.load(() => {
      const position = new window.kakao.maps.LatLng(LAT, LNG);
      const options = { center: position, level: 3 };
      const map = new window.kakao.maps.Map(mapRef.current, options);
      const marker = new window.kakao.maps.Marker({ position });
      marker.setMap(map);
    });
  };

  return (
    <section className="bg-ivory px-6 py-13">
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={initMap}
      />
      <p className="mb-2 text-xs font-semibold text-cream">LOCATION</p>
      <h2 className="mb-8 text-2xl">오시는 길</h2>

      <div className="flex flex-col justify-center gap-5">
        <div>
          {/* 지도 */}
          <div
            ref={mapRef}
            className="h-100 w-full border border-b-0 border-gray-200"
          ></div>
          {/* 하단 바 */}
          <div className="flex items-center justify-between border border-gray-200 bg-white px-4 py-2 text-xs text-gray-600">
            <span className="font-bold text-black">
              kakao<span className="font-normal">map</span>
            </span>
            <div className="flex gap-4">
              <a
                href={`https://map.kakao.com/link/roadview/${LAT},${LNG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                로드뷰
              </a>
              <a
                href={`https://map.kakao.com/link/to/행복한교회,${LAT},${LNG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                길찾기
              </a>
              <a
                href={`https://map.kakao.com/link/map/행복한교회,${LAT},${LNG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500"
              >
                지도 크게 보기
              </a>
            </div>
          </div>
        </div>

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
