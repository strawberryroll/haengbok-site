'use client';

import Badge from '@/components/notice/Badge';
import Button from '@/components/ui/Button';
import { Notice, notices } from '@/data/notices';
import {
  getStoredNoticesSnapshot,
  subscribeToStoredNotices,
} from '@/lib/notices-storage';
import { formatNoticeDate } from '@/lib/utils';
import { Pin } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useSyncExternalStore } from 'react';

const EMPTY_NOTICES: Notice[] = [];

export default function Page() {
  const { id } = useParams<{ id: string }>();

  const storedNotices = useSyncExternalStore(
    subscribeToStoredNotices,
    getStoredNoticesSnapshot,
    () => EMPTY_NOTICES,
  );

  // 정적 데이터를 먼저 찾고, 없으면 localStorage에 저장된 글에서 찾는다.
  // find()는 못 찾으면 undefined를 반환하므로 ||로 두 소스를 순서대로 시도할 수 있다.
  const notice: Notice | undefined =
    notices.find((notice) => notice.id === id) ||
    storedNotices.find((notice) => notice.id === id);

  if (!notice) return notFound();

  return (
    <div className="px-6 pt-10 pb-16 md:pt-20 md:pb-25">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-3">
          {notice.isPinned ? (
            <Badge variant="important" className="w-fit">
              <Pin className="size-3" />
              중요
            </Badge>
          ) : null}
          <h1 className="text-2xl font-bold text-charcoal md:text-3xl">
            {notice.title}
          </h1>
          <span className="text-sm text-description">
            {formatNoticeDate(notice.date)}
          </span>
        </div>
        <div className="border-t border-charcoal/10" />
        <p className="leading-relaxed whitespace-pre-wrap text-charcoal">
          {notice.content}
        </p>
        <div className="flex justify-end">
          <Link href="/notice">
            <Button variant="outline">목록으로</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
