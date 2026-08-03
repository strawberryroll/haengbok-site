export interface MonthlyEventItem {
  startDay: number;
  endDay?: number;
  weekday?: string;
  titles: string[];
}

export default function EventRow({
  startDay,
  endDay,
  weekday,
  titles,
}: MonthlyEventItem) {
  const dayLabel = endDay ? `${startDay}-${endDay}일` : `${startDay}일`;

  return (
    <div className="flex items-center gap-5 px-5 py-2">
      <div className="flex w-16 shrink-0 flex-col items-center justify-center gap-1 py-1">
        <span className="text-sm leading-none font-semibold whitespace-nowrap text-charcoal/95">
          {dayLabel}
        </span>
        {weekday ? (
          <span className="text-[11px] leading-none text-charcoal/70">
            {weekday}
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-1">
        {titles.map((title) => (
          <p key={title} className="text-sm text-charcoal/95">
            {title}
          </p>
        ))}
      </div>
    </div>
  );
}
