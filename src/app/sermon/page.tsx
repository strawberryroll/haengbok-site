import PageHeader from '@/components/ui/PageHeader';

export default function Page() {
  return (
    <>
      <div className="bg-cream-light px-6 pb-15">
        <PageHeader
          eyebrow="SERMON"
          title="말씀"
          description="함께한 예배의 말씀을 다시 들을 수 있습니다"
        />
      </div>
      <div className="flex h-10 items-center gap-3 bg-ivory px-6 py-10">
        {/* 원마커 */}
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-cream bg-white">
          <div className="h-1.5 w-1.5 rounded-full bg-cream" />
        </div>
        <p className="text-sm text-description">
          현재 예배 영상 촬영이 중단되어 최신 영상이 업데이트되지 않고 있습니다.
        </p>
      </div>
    </>
  );
}
