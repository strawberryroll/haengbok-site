'use client';

import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Textarea from '@/components/ui/Textarea';
import { Notice } from '@/data/notices';
import { addStoredNotice } from '@/lib/notices-storage';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPinned, setIsPinned] = useState(false);

  const isValid = title.trim().length > 0 && content.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newNotice: Notice = {
      id: crypto.randomUUID(),
      title,
      date: new Date().toISOString().split('T')[0],
      isPinned,
      content,
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
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">제목</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="제목을 입력하세요"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="content">내용</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="내용을 입력하세요"
                />
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="isPinned"
                  checked={isPinned}
                  onChange={(e) => setIsPinned(e.target.checked)}
                />
                <Label htmlFor="isPinned">중요 공지</Label>
              </div>

              <div className="flex justify-end gap-2">
                <Link href="/notice">
                  <Button type="button" variant="outline">
                    취소
                  </Button>
                </Link>
                <Button type="submit" variant="secondary" disabled={!isValid}>
                  등록
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
