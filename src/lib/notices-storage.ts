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
  window.dispatchEvent(new Event(NOTICE_STORAGE_EVENT));
}

export function getStoredNotice(id: string): Notice | undefined {
  return getStoredNotices().find((notice) => notice.id === id);
}

export function updateStoredNotice(
  id: string,
  patch: Pick<Notice, 'title' | 'content' | 'isPinned'>,
): void {
  const notices = getStoredNotices();
  const updated = notices.map((notice) =>
    notice.id === id ? { ...notice, ...patch } : notice,
  );
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event(NOTICE_STORAGE_EVENT));
}

export function deleteStoredNotice(id: string): void {
  const notices = getStoredNotices();
  const updated = notices.filter((notice) => notice.id !== id);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event(NOTICE_STORAGE_EVENT));
}

// storage 이벤트는 다른 탭에서의 변경만 감지하므로, 같은 탭 안에서도
// useSyncExternalStore 구독자에게 변경을 알리기 위한 커스텀 이벤트.
export const NOTICE_STORAGE_EVENT = 'notice-storage-change';

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
  window.addEventListener(NOTICE_STORAGE_EVENT, callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(NOTICE_STORAGE_EVENT, callback);
  };
}
