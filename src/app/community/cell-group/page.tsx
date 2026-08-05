import { Card, CardContent, CardDescription } from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import { CalendarHeart, Users } from 'lucide-react';

interface CellGroupItem {
  name: string;
  leader: string;
  description: string;
}

const cellGroupsData: CellGroupItem[] = [
  {
    name: '1목장',
    leader: '김성호 장로',
    description: '믿음의 연륜으로 서로를 격려하는 목장입니다',
  },
  {
    name: '2목장',
    leader: '박순임 권사',
    description: '오랜 기도와 섬김의 본을 나누는 여전도회 목장입니다',
  },
  {
    name: '3목장',
    leader: '이정숙 집사',
    description: '가정과 신앙을 함께 세워가는 목장입니다',
  },
  {
    name: '4목장',
    leader: '최말순 권사',
    description: '말씀 안에서 함께 늙어가는 은혜를 나누는 목장입니다',
  },
  {
    name: '5목장',
    leader: '정광수 집사',
    description: '인생의 중반을 신앙으로 다잡아가는 집사님들의 목장입니다',
  },
];

export default function Page() {
  return (
    <>
      <div className="bg-cream-light px-6 pb-15">
        <PageHeader
          eyebrow="CELL GROUP"
          title="목장"
          description="함께 말씀나누고 삶을 나누는 행복한 교회의 소그룹 공동체입니다"
        />
      </div>
      <div className="px-6 pb-20">
        {/* 목장이란 */}
        <div className="flex flex-col gap-6 pt-15">
          <SectionHeading eyebrow="ABOUT" title="목장이란" />
          <Card className="bg-ivory">
            <CardContent className="flex items-start gap-5">
              <div className="shrink-0">
                <Users className="text-cream" />
              </div>
              <CardDescription className="text-base text-description">
                목장은 삶의 자리가 비슷한 성도들이 모여 말씀을 나누고 기도하며
                서로의 삶을 돌보는 소그룹입니다.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="bg-ivory">
            <CardContent className="flex items-start gap-5">
              <div className="shrink-0">
                <CalendarHeart className="text-cream" />
              </div>
              <CardDescription className="text-base text-description">
                주일 예배와 연계하여 매월 첫째·셋째주 주일에 함께 모여 교제하며,
                <br />
                주일 예배만으로 채워지지 않는 돌봄과 나눔이 목장 안에서
                이루어집니다.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* 목장들 */}
        <div className="flex flex-col gap-6 pt-20">
          <div>
            <p className="pb-1">
              행복한 교회의 목장은 아래와 같이 나뉘어 있습니다.
            </p>
            <p className="text-description">
              아래에서 내가 속한 목장을 확인해보세요.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {cellGroupsData.map((group) => (
              <Card key={group.name} className="gap-0 overflow-hidden">
                <div className="h-1.5 w-full bg-cream/40" />
                <CardContent className="flex flex-col gap-2 p-5">
                  <p className="text-lg font-semibold text-charcoal">
                    {group.name}
                  </p>
                  <Divider className="w-full border-t text-cream/40" />
                  <p className="flex items-center gap-2 text-sm whitespace-nowrap">
                    <span className="shrink-0 text-xs text-gold">목자</span>
                    <span className="text-sm font-semibold text-charcoal">
                      {group.leader}
                    </span>
                  </p>
                  <CardDescription className="text-sm text-description">
                    {group.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
