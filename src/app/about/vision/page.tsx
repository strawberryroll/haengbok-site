import Values, { valuesData } from '@/components/home/Values';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import PageHeader from '@/components/ui/PageHeader';
import { Quote } from 'lucide-react';

export default function Page() {
  return (
    <>
      <div className="bg-cream-light px-6 pb-15">
        <PageHeader
          eyebrow="VISION"
          title="비전"
          description="성령 충만한 교회, 행복한 성도들"
        />
      </div>
      <div className="px-6">
        {/* 교회 표어 */}
        <div className="flex flex-col gap-6 pt-15">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-cream">MOTTO</p>
            <h3 className="text-3xl font-semibold">교회 표어</h3>
          </div>

          <Card className="bg-charcoal">
            <CardContent className="text-2xl font-medium text-white">
              성령 충만한 교회, <br />
              행복한 성도들
            </CardContent>
          </Card>

          <Card className="bg-warm-white">
            <CardContent className="flex flex-col gap-3">
              <Quote className="text-cream" size={20} />
              <p className="text-lg text-description">
                날마다 마음을 같이하여 성전에 모이기를 힘쓰고 집에서 떡을 떼며
                기쁨과 순전한 마음으로 음식을 먹고 하나님을 찬미하며 또 온
                백성에게 칭송을 받으니 주께서 구원 받는 사람을 날마다 더하게
                하시니라
              </p>
              <div className="flex items-center gap-2">
                <Divider />
                <span className="font-semibold text-cream">
                  사도행전 2:46-47
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 교회 목표 */}
        <div className="flex flex-col gap-6 pt-15 pb-20">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-cream">GOALS</p>
            <h3 className="text-3xl font-semibold">교회 목표</h3>
          </div>
          <div className="flex flex-col gap-4">
            {valuesData.map((item) => (
              <Card
                key={item.title}
                className="flex-row items-center gap-6 bg-cream/10 p-6"
              >
                <div className="shrink-0">
                  <item.icon size={32} className="text-cream" />
                </div>
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-charcoal">{item.title}</CardTitle>
                  <CardDescription className="text-description">
                    {item.description[0]} <br /> {item.description[1]}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
