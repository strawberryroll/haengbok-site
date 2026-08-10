import NoticeList from '@/components/notice/NoticeList';
import Button from '@/components/ui/Button';
import PageHeader from '@/components/ui/PageHeader';
import { notices } from '@/data/notices';
import { Pencil } from 'lucide-react';

export default function Page() {
  return (
    <>
      <div className="bg-cream-light px-6 pb-15">
        <PageHeader
          eyebrow="NOTICES"
          title="공지사항"
          description="행복한 교회의 소식과 안내를 전합니다"
        />
      </div>
      <div className="px-6 pt-15 pb-25">
        <div className="flex justify-end pb-6">
          <Button variant="outline" size="sm">
            <Pencil className="text-charcoal/50" />
            글쓰기
          </Button>
        </div>
        <NoticeList notices={notices} />
      </div>
    </>
  );
}
