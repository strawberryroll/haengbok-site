export type NavLinkItem = {
  type: 'link';
  label: string;
  href: string;
};

export type NavGroupItem = {
  type: 'group';
  id: string;
  label: string;
  children: {
    label: string;
    href: string;
  }[];
};

export type NavItem = NavLinkItem | NavGroupItem;

export const navItems: NavItem[] = [
  { type: 'link', label: '홈', href: '/' },
  {
    id: 'about',
    type: 'group',
    label: '교회 안내',
    children: [
      { label: '비전', href: '/about/vision' },
      { label: '역사', href: '/about/history' },
      { label: '새가족 안내', href: '/about/new-member' },
      { label: '오시는 길', href: '/about/directions' },
    ],
  },
  {
    id: 'worship',
    type: 'group',
    label: '예배 안내',
    children: [
      { label: '예배 시간', href: '/worship/schedule' },
      { label: '주보', href: '/worship/bulletin' },
    ],
  },
  { type: 'link', label: '말씀', href: '/sermon' },
  {
    id: 'community',
    type: 'group',
    label: '공동체',
    children: [
      { label: '목장', href: '/community/cell-group' },
      { label: '전도모임', href: '/community/evangelism' },
    ],
  },
  {
    id: 'next-gen',
    type: 'group',
    label: '다음세대',
    children: [
      { label: '주일학교', href: '/next-gen/children-ministry' },
      { label: '학생청년부', href: '/next-gen/youth' },
    ],
  },
  { type: 'link', label: '공지사항', href: '/notice' },
];
