export default function ScheduleRow({
  title,
  place,
  time,
}: {
  title: string;
  place: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-4">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-description">{place}</p>
      </div>
      <div>
        <p className="shrink-0 text-sm font-semibold text-cream">{time}</p>
      </div>
    </div>
  );
}
