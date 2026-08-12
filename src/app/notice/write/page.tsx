'use client';

import NoticeForm from '@/components/notice/NoticeForm';
import { Notice } from '@/data/notices';
import { NoticeFormValues } from '@/lib/notice-schema';
import { addStoredNotice } from '@/lib/notices-storage';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleSubmit = (values: NoticeFormValues) => {
    const newNotice: Notice = {
      id: crypto.randomUUID(),
      date: new Date().toISOString().split('T')[0],
      ...values,
    };

    addStoredNotice(newNotice);
    router.push('/notice');
  };

  return (
    <div className="px-6 pt-10 pb-16 md:pt-20 md:pb-25">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 md:gap-8">
        <h1 className="text-2xl font-bold text-charcoal md:text-3xl">
          공지사항 작성
        </h1>
        <NoticeForm onSubmit={handleSubmit} submitLabel="등록" />
      </div>
    </div>
  );
}
