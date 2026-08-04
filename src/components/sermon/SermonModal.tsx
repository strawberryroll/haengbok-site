'use client';

import Button from '@/components/ui/Button';
import { formatSermonDate } from '@/lib/utils';
import { Sermon } from '@/data/sermons';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface SermonModalProps {
  sermon: Sermon | null;
  onClose: () => void;
}

export default function SermonModal({ sermon, onClose }: SermonModalProps) {
  useEffect(() => {
    if (!sermon) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [sermon, onClose]);

  if (!sermon) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-charcoal/70"
        aria-hidden
      />

      <div className="relative z-10 flex w-full max-w-2xl flex-col gap-4 rounded-2xl bg-white p-4 shadow-xl">
        <div className="flex items-center justify-end">
          <Button
            size="icon-xs"
            variant="ghost"
            type="button"
            onClick={onClose}
          >
            <X className="size-4 text-charcoal/50" />
          </Button>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-charcoal">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${sermon.videoId}?autoplay=1`}
            title={sermon.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col gap-1.5 px-2 pb-2">
          <h2 className="text-base font-semibold text-charcoal">
            {sermon.title}
          </h2>
          <span className="text-sm text-description">
            {formatSermonDate(sermon.date)} · {sermon.preacher} 목사
          </span>
          {sermon.scripture ? (
            <span className="text-sm font-bold text-gold">
              {sermon.scripture}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
