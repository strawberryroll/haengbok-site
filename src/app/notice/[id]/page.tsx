'use client';

import Badge from '@/components/notice/Badge';
import Button from '@/components/ui/Button';
import { Notice, notices } from '@/data/notices';
import {
  deleteStoredNotice,
  getStoredNoticesSnapshot,
  subscribeToStoredNotices,
} from '@/lib/notices-storage';
import { formatNoticeDate } from '@/lib/utils';
import { Pin } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams, useRouter } from 'next/navigation';
import { useState, useSyncExternalStore } from 'react';

const EMPTY_NOTICES: Notice[] = [];

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const storedNotices = useSyncExternalStore(
    subscribeToStoredNotices,
    getStoredNoticesSnapshot,
    () => EMPTY_NOTICES,
  );

  // 정적 데이터와 localStorage 글을 각각 따로 찾아둔다.
  // staticNotice가 있으면(정적 데이터 소속) 수정/삭제 대상이 아니므로 구분이 필요하다.
  const staticNotice = notices.find((notice) => notice.id === id);
  const storedNotice = storedNotices.find((notice) => notice.id === id);
  const notice = staticNotice ?? storedNotice;

  // 삭제 처리 중에는 deleteStoredNotice가 발행하는 이벤트로 이 컴포넌트가
  // 즉시 리렌더링되어 notice가 사라진 상태를 보게 되므로, 이 순간에는
  // notFound()를 띄우지 않고 router.push가 페이지를 이동시킬 때까지 기다린다.
  if (!notice && !isDeleting) return notFound();

  if (!notice) return null;

  const isEditable = !staticNotice && !!storedNotice;

  const handleDelete = () => {
    const result = window.confirm('정말 삭제하시겠습니까?');
    if (result) {
      setIsDeleting(true);
      deleteStoredNotice(id);
      router.push('/notice');
    }
  };

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
        <div className="flex justify-end gap-2">
          {isEditable ? (
            <>
              <Link href={`/notice/${id}/edit`}>
                <Button variant="outline">수정</Button>
              </Link>
              <Button variant="outline" onClick={handleDelete}>
                삭제
              </Button>
            </>
          ) : null}
          <Link href="/notice">
            <Button variant="outline">목록으로</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
