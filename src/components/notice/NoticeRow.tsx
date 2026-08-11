import { Notice } from '@/data/notices';
import { formatNoticeDate } from '@/lib/utils';
import { Pin } from 'lucide-react';
import Link from 'next/link';
import Badge from './Badge';

interface NoticeRowProps {
  notice: Notice;
}

export default function NoticeRow({ notice }: NoticeRowProps) {
  const { id, title, date, isPinned } = notice;

  if (isPinned) {
    return (
      <Link
        href={`/notice/${id}`}
        className="flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 px-6 py-5"
      >
        <div className="flex items-center gap-3">
          <Badge variant="important">
            <Pin className="size-3" />
            중요
          </Badge>
          <span className="font-medium text-charcoal">{title}</span>
        </div>
        <span className="text-sm text-description">
          {formatNoticeDate(date)}
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/notice/${id}`}
      className="flex items-center justify-between border-b border-charcoal/10 px-2 py-5"
    >
      <span className="text-charcoal">{title}</span>
      <span className="text-sm text-description">{formatNoticeDate(date)}</span>
    </Link>
  );
}
