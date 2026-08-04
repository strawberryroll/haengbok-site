'use client';

import Button from '@/components/ui/Button';
import { Sermon } from '@/data/sermons';
import { useState } from 'react';
import SermonCard from './SermonCard';
import SermonModal from './SermonModal';

interface SermonGridProps {
  sermons: Sermon[];
}

const INITIAL_COUNT = 9;
const PAGE_SIZE = 9;

export default function SermonGrid({ sermons }: SermonGridProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);

  const visibleSermons = sermons.slice(0, visibleCount);
  const hasMore = visibleCount < sermons.length;

  return (
    <div className="px-15 pb-20">
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {visibleSermons.map((sermon) => (
          <SermonCard
            key={sermon.videoId}
            sermon={sermon}
            onClick={() => setSelectedSermon(sermon)}
          />
        ))}
      </div>

      {hasMore ? (
        <div className="flex justify-center pt-10">
          <Button
            variant="outline"
            type="button"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
          >
            더보기
          </Button>
        </div>
      ) : null}

      <SermonModal
        sermon={selectedSermon}
        onClose={() => setSelectedSermon(null)}
      />
    </div>
  );
}
