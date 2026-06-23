export default function PageHeader() {
  return (
    <div className="flex flex-col gap-5 bg-cream-light px-6 py-13">
      <p className="text-xs font-semibold text-cream">LOCATION</p>
      <h2 className="text-4xl font-bold">오시는 길</h2>
      <div className="w-8 border-t-2 text-cream" />
      <p className="text-lg text-description">
        행복한 교회로 오시는 길을 안내합니다
      </p>
    </div>
  );
}
