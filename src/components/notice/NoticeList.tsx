'use client';

import { Notice } from '@/data/notices';
import {
  getStoredNoticesSnapshot,
  subscribeToStoredNotices,
} from '@/lib/notices-storage';
import { cn } from '@/lib/utils';
import { useState, useSyncExternalStore } from 'react';
import NoticeRow from './NoticeRow';

interface NoticeListProps {
  notices: Notice[];
}

const PAGE_SIZE = 6;

// getServerSnapshot에서 매번 새 배열을 만들면 useSyncExternalStore가
// "값이 바뀌었다"고 오인해 리렌더링을 반복하므로, 빈 배열을 하나만 만들어 재사용한다.
const EMPTY_NOTICES: Notice[] = [];

export default function NoticeList({
  notices: initialNotices,
}: NoticeListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // localStorage(React 바깥의 데이터)를 구독해 작성 폼에서 저장한 글을 읽어온다.
  // 서버에는 localStorage가 없으므로 서버 렌더링 시엔 EMPTY_NOTICES를 사용해
  // hydration mismatch를 피하고, 클라이언트에서 mount된 뒤 실제 값으로 바뀐다.
  const storedNotices = useSyncExternalStore(
    subscribeToStoredNotices,
    getStoredNoticesSnapshot,
    () => EMPTY_NOTICES,
  );
  // localStorage에 저장된 글(최신순) + 정적 데이터(notices.ts)를 합쳐서 렌더링
  const notices = [...storedNotices, ...initialNotices];

  const pinned = notices.filter((notice) => notice.isPinned);
  const regular = notices.filter((notice) => !notice.isPinned);

  const visibleRegular: Notice[] = regular.slice(
    PAGE_SIZE * (currentPage - 1),
    PAGE_SIZE * (currentPage - 1) + PAGE_SIZE,
  );
  const totalPages = Math.ceil(regular.length / PAGE_SIZE);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        {pinned.map((notice) => (
          <NoticeRow key={notice.id} notice={notice} />
        ))}
      </div>

      <div className="flex flex-col">
        {visibleRegular.map((notice) => (
          <NoticeRow key={notice.id} notice={notice} />
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="flex justify-center gap-2 pt-6">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={cn(
                  'flex size-9 items-center justify-center rounded-full text-sm font-medium',
                  page === currentPage
                    ? 'bg-charcoal text-cream'
                    : 'text-charcoal hover:bg-charcoal/10',
                )}
              >
                {page}
              </button>
            ),
          )}
        </div>
      ) : null}
    </div>
  );
}
