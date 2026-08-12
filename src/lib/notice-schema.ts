import { z } from 'zod';

export const noticeFormSchema = z.object({
  title: z.string().trim().min(1, '제목을 입력해주세요'),
  content: z.string().trim().min(1, '내용을 입력해주세요'),
  isPinned: z.boolean(),
});

export type NoticeFormValues = z.infer<typeof noticeFormSchema>;
