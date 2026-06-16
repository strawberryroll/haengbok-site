export interface WorshipItem {
  title: string;
  place: string;
  time: string;
}

export default function ScheduleRow({ title, place, time }: WorshipItem) {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <div>
        <h3 className="font-semibold text-charcoal/95">{title}</h3>
        <p className="text-sm text-description">{place}</p>
      </div>
      <div>
        <p className="shrink-0 text-sm font-semibold text-gold">{time}</p>
      </div>
    </div>
  );
}
