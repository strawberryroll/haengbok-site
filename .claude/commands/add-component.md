---
description: 새 React 컴포넌트 파일을 생성하고 기본 템플릿을 추가합니다
argument-hint: <ComponentName> [경로(예: ui, home, layout)]
---

# add-component 커맨드

새 React 함수형 컴포넌트를 `src/components/` 폴더에 생성합니다.

## 사용법

```
/add-component MyComponent
/add-component MyButton ui
/add-component HeroSection home
/add-component LayoutWrapper layout
```

## 동작

1. 첫 번째 인자(`$1`)에서 컴포넌트 이름을 받습니다 (PascalCase로 정규화)
2. 두 번째 인자(선택사항)에서 하위 경로를 받습니다 (예: `ui`, `home`, `layout`)
3. TypeScript + Tailwind CSS를 사용하는 기본 템플릿으로 파일을 생성합니다:
   - `@/lib/utils`의 `cn()` 유틸 import
   - Props interface 정의
   - 기본 JSX 마크업

## 생성 경로

- `/add-component Button` → `src/components/Button.tsx`
- `/add-component Button ui` → `src/components/ui/Button.tsx`
- `/add-component HeroSection home` → `src/components/home/HeroSection.tsx`

## 템플릿

생성되는 파일의 기본 템플릿:

```tsx
import { cn } from '@/lib/utils';

interface ComponentNameProps {
  className?: string;
}

export default function ComponentName({ className }: ComponentNameProps) {
  return <div className={cn('', className)}>ComponentName</div>;
}
```

이미 같은 이름의 파일이 존재하면 Claude가 알림을 표시하고 덮어쓰지 않습니다.
