'use client';

import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import Checkbox from '@/components/ui/Checkbox';
import Input from '@/components/ui/Input';
import Label from '@/components/ui/Label';
import Textarea from '@/components/ui/Textarea';
import { NoticeFormValues, noticeFormSchema } from '@/lib/notice-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

interface NoticeFormProps {
  defaultValues?: NoticeFormValues;
  onSubmit: (values: NoticeFormValues) => void;
  submitLabel: string;
}

const EMPTY_VALUES: NoticeFormValues = {
  title: '',
  content: '',
  isPinned: false,
};

export default function NoticeForm({
  defaultValues = EMPTY_VALUES,
  onSubmit,
  submitLabel,
}: NoticeFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NoticeFormValues>({
    resolver: zodResolver(noticeFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">제목</Label>
            <Input
              id="title"
              placeholder="제목을 입력하세요"
              {...register('title')}
            />
            {errors.title ? (
              <p className="text-xs text-red-500">{errors.title.message}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="content">내용</Label>
            <Textarea
              id="content"
              placeholder="내용을 입력하세요"
              {...register('content')}
            />
            {errors.content ? (
              <p className="text-xs text-red-500">{errors.content.message}</p>
            ) : null}
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="isPinned" {...register('isPinned')} />
            <Label htmlFor="isPinned">중요 공지</Label>
          </div>

          <div className="flex justify-end gap-2">
            <Link href="/notice">
              <Button type="button" variant="outline">
                취소
              </Button>
            </Link>
            <Button type="submit" variant="secondary" disabled={!isValid}>
              {submitLabel}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
