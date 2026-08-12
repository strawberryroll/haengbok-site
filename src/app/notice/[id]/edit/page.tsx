'use client';

import NoticeForm from '@/components/notice/NoticeForm';
import { Notice, notices } from '@/data/notices';
import { NoticeFormValues } from '@/lib/notice-schema';
import {
  getStoredNoticesSnapshot,
  subscribeToStoredNotices,
  updateStoredNotice,
} from '@/lib/notices-storage';
import { notFound, useParams, useRouter } from 'next/navigation';
import { useSyncExternalStore } from 'react';

const EMPTY_NOTICES: Notice[] = [];

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const storedNotices = useSyncExternalStore(
    subscribeToStoredNotices,
    getStoredNoticesSnapshot,
    () => EMPTY_NOTICES,
  );

  const isStaticNotice = notices.some((notice) => notice.id === id);
  if (isStaticNotice) return notFound();

  const storedNotice = storedNotices.find((notice) => notice.id === id);
  if (!storedNotice) return notFound();

  const handleSubmit = (values: NoticeFormValues) => {
    updateStoredNotice(id, values);
    router.push(`/notice/${id}`);
  };

  return (
    <div className="px-6 pt-10 pb-16 md:pt-20 md:pb-25">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 md:gap-8">
        <h1 className="text-2xl font-bold text-charcoal md:text-3xl">
          공지사항 수정
        </h1>
        <NoticeForm
          defaultValues={storedNotice}
          onSubmit={handleSubmit}
          submitLabel="수정"
        />
      </div>
    </div>
  );
}
