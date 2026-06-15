import { HandHeart, Handshake, Sprout } from 'lucide-react';
import { Card, CardDescription, CardTitle } from '../ui/Card';

export default function Values() {
  return (
    <section className="px-6 py-13">
      <p className="mb-2 text-xs font-semibold text-cream">VISION</p>
      <h2 className="mb-8 text-2xl">비전 & 핵심 가치</h2>
      <div className="flex flex-col gap-4">
        <Card className="flex-row items-center gap-6 border-cream/80 bg-cream/10 p-6">
          <div className="shrink-0">
            <HandHeart size={32} className="text-cream" />
          </div>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-charcoal">예배</CardTitle>
            <CardDescription className="text-description">
              하나님을 기쁘시게 하는 삶을 <br /> 함께 살아갑니다
            </CardDescription>
          </div>
        </Card>
        <Card className="flex-row items-center gap-6 border-cream/70 bg-cream/10 p-6">
          <div className="shrink-0">
            <Sprout size={32} className="text-cream" />
          </div>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-charcoal">성장</CardTitle>
            <CardDescription className="text-description">
              말씀 안에서 날마다 <br /> 성숙해가는 성도입니다
            </CardDescription>
          </div>
        </Card>
        <Card className="flex-row items-center gap-6 border-cream/70 bg-cream/10 p-6">
          <div className="shrink-0">
            <Handshake size={32} className="text-cream" />
          </div>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-charcoal">섬김</CardTitle>
            <CardDescription className="text-description">
              사람을 행복하게 하는 <br /> 따뜻한 손길이 됩니다
            </CardDescription>
          </div>
        </Card>
      </div>
    </section>
  );
}
