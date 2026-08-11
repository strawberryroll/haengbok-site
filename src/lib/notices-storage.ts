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

// useSyncExternalStore용: getSnapshot은 리렌더링 사이에 참조가 같아야
// 무한 루프를 피할 수 있으므로, 값이 바뀌지 않았다면 이전 배열을 그대로 반환한다.
let cachedRaw: string | null = null;
let cachedNotices: Notice[] = [];

export function getStoredNoticesSnapshot(): Notice[] {
  const raw = window.localStorage.getItem(STORAGE_KEY);

  // raw 문자열이 바뀌지 않았다면 JSON.parse를 다시 하지 않고
  // 기존 cachedNotices(같은 배열 참조)를 그대로 반환한다.
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedNotices = getStoredNotices();
  }

  return cachedNotices;
}

export function subscribeToStoredNotices(callback: () => void): () => void {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}
