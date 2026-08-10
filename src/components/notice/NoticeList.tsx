'use client';

import { Notice } from '@/data/notices';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import NoticeRow from './NoticeRow';

interface NoticeListProps {
  notices: Notice[];
}

const PAGE_SIZE = 6;

export default function NoticeList({ notices }: NoticeListProps) {
  const [currentPage, setCurrentPage] = useState(1);

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
