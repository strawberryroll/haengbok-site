import { Card, CardContent } from '@/components/ui/Card';
import { formatSermonDate } from '@/lib/utils';
import { Sermon } from '@/data/sermons';
import { Play } from 'lucide-react';
import Image from 'next/image';

interface SermonCardProps {
  sermon: Sermon;
  onClick: () => void;
}

export default function SermonCard({ sermon, onClick }: SermonCardProps) {
  return (
    <button type="button" onClick={onClick} className="h-full text-left">
      <Card className="h-full gap-3 overflow-hidden border-cream/60 bg-warm-white">
        <div className="relative aspect-video w-full">
          <Image
            src={sermon.thumbnailUrl}
            alt={sermon.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal/20">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-charcoal">
              <Play size={18} className="ml-0.5" fill="currentColor" />
            </span>
          </div>
        </div>
        <CardContent className="flex flex-1 flex-col gap-1.5 px-4 pt-2">
          <h3 className="line-clamp-2 text-base font-bold text-charcoal">
            {sermon.title}
          </h3>
          <span className="text-sm text-description">
            {formatSermonDate(sermon.date)} · {sermon.preacher} 목사님
          </span>
          {sermon.scripture ? (
            <span className="mt-auto text-sm font-semibold text-gold">
              {sermon.scripture}
            </span>
          ) : null}
        </CardContent>
      </Card>
    </button>
  );
}
