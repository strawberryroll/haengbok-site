import { HandHeart, Handshake, type LucideIcon, Sprout } from 'lucide-react';
import { Card, CardDescription, CardTitle } from '@/components/ui/Card';

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string[];
}

const valuesData: ValueItem[] = [
  {
    icon: HandHeart,
    title: '예배',
    description: ['하나님을 기쁘시게 하는 삶을', '함께 살아갑니다'],
  },
  {
    icon: Sprout,
    title: '성장',
    description: ['말씀 안에서 날마다', '성숙해가는 성도입니다'],
  },
  {
    icon: Handshake,
    title: '섬김',
    description: ['사람을 행복하게 하는', '따뜻한 손길이 됩니다'],
  },
];

export default function Values() {
  return (
    <section className="px-6 py-13">
      <p className="mb-2 text-xs font-semibold text-cream">VISION</p>
      <h2 className="mb-8 text-2xl">비전 & 핵심 가치</h2>

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
    </section>
  );
}
