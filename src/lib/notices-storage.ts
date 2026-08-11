import { Notice } from '@/data/notices';

const STORAGE_KEY = 'notice-drafts';

export function getStoredNotices(): Notice[] {
  if (typeof window === 'undefined') return [];

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  return JSON.parse(raw) as Notice[];
}

export function addStoredNotice(notice: Notice): void {
  const notices = getStoredNotices();
  const updated = [notice, ...notices];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
