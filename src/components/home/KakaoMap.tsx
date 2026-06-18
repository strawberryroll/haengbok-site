'use client';

import Script from 'next/script';
import { useRef } from 'react';

const LAT = 37.4401985;
const LNG = 126.6635782;

export default function KakaoMap() {
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
    <div>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`}
        strategy="afterInteractive"
        onLoad={initMap}
      />

      {/* 지도 */}
      <div
        ref={mapRef}
        className="h-100 w-full border border-b-0 border-gray-200"
      ></div>

      {/* 하단 바 */}
      <div className="flex items-center justify-between border border-gray-200 bg-white px-4 py-2 text-xs text-gray-600">
        <span className="font-normal text-black">
          kakao<span className="font-bold">map</span>
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
  );
}
