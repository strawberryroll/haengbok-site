export interface Notice {
  id: string;
  title: string;
  date: string;
  isPinned: boolean;
  content: string;
}

export const notices: Notice[] = [
  {
    id: 'notice-8',
    title: '주일 예배 시간 변경 안내 (오전 11시)',
    date: '2025-07-20',
    isPinned: true,
    content:
      '다음 주부터 주일 예배 시간이 오전 11시로 변경됩니다. 성도님들의 많은 참여 바랍니다.',
  },
  {
    id: 'notice-7',
    title: '다음 주 수요 예배 휴무 안내',
    date: '2025-07-18',
    isPinned: true,
    content: '내부 시설 점검으로 인해 다음 주 수요 예배는 휴무합니다.',
  },
  {
    id: 'notice-6',
    title: '2025 여름 수련회 신청 안내',
    date: '2025-07-15',
    isPinned: false,
    content:
      '2025 여름 수련회 신청을 받습니다. 자세한 일정과 장소는 교회 사무실로 문의해 주세요.',
  },
  {
    id: 'notice-5',
    title: '주차장 공사로 인한 주차 안내',
    date: '2025-07-10',
    isPinned: false,
    content:
      '주차장 공사로 인해 임시 주차 공간을 안내드립니다. 안내 요원의 지시에 따라 주차해 주세요.',
  },
  {
    id: 'notice-4',
    title: '다음세대 여름성경학교 봉사자 모집',
    date: '2025-07-07',
    isPinned: false,
    content:
      '다음세대 여름성경학교를 함께 섬길 봉사자를 모집합니다. 관심 있는 분들은 신청해 주세요.',
  },
  {
    id: 'notice-3',
    title: '교회 시설 이용 안내 (개정)',
    date: '2025-07-01',
    isPinned: false,
    content:
      '교회 시설 이용 안내가 개정되었습니다. 변경된 이용 수칙을 확인해 주세요.',
  },
  {
    id: 'notice-2',
    title: '성가대원 추가 모집 안내',
    date: '2025-06-25',
    isPinned: false,
    content:
      '성가대원을 추가로 모집합니다. 찬양을 통해 섬기고 싶으신 분들은 연락 주세요.',
  },
  {
    id: 'notice-1',
    title: '홈페이지 개편 안내',
    date: '2025-06-20',
    isPinned: false,
    content: '교회 홈페이지가 새롭게 개편되었습니다. 많은 이용 바랍니다.',
  },
  {
    id: 'notice-9',
    title: '추석 연휴 예배 일정 안내',
    date: '2025-06-15',
    isPinned: false,
    content:
      '추석 연휴 기간 예배 일정을 안내드립니다. 자세한 내용은 교회 사무실로 문의해 주세요.',
  },
  {
    id: 'notice-10',
    title: '새가족 환영회 안내',
    date: '2025-06-10',
    isPinned: false,
    content:
      '새로 등록하신 가족들을 위한 환영회를 진행합니다. 많은 참여 바랍니다.',
  },
  {
    id: 'notice-11',
    title: '교육관 리모델링 공사 안내',
    date: '2025-06-05',
    isPinned: false,
    content: '교육관 리모델링 공사가 진행됩니다. 이용에 참고 부탁드립니다.',
  },
  {
    id: 'notice-12',
    title: '여름 특별새벽기도회 안내',
    date: '2025-05-28',
    isPinned: false,
    content: '여름 특별새벽기도회를 진행합니다. 성도님들의 많은 참여 바랍니다.',
  },
  {
    id: 'notice-13',
    title: '구역별 심방 일정 공지',
    date: '2025-05-20',
    isPinned: false,
    content:
      '구역별 심방 일정을 공지드립니다. 자세한 일정은 담당 목자에게 문의해 주세요.',
  },
  {
    id: 'notice-14',
    title: '교회 홈페이지 오류 신고 안내',
    date: '2025-05-15',
    isPinned: false,
    content: '홈페이지 이용 중 오류를 발견하시면 교회 사무실로 알려주세요.',
  },
  {
    id: 'notice-15',
    title: '어버이날 감사 예배 안내',
    date: '2025-05-08',
    isPinned: false,
    content:
      '어버이날을 맞아 감사 예배를 드립니다. 온 가족이 함께 참여해 주세요.',
  },
  {
    id: 'notice-16',
    title: '봄맞이 교회 대청소 봉사자 모집',
    date: '2025-05-01',
    isPinned: false,
    content:
      '봄맞이 교회 대청소를 함께할 봉사자를 모집합니다. 많은 참여 바랍니다.',
  },
];
