# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

`haengbok-site`는 Next.js (App Router) 기반의 교회 홈페이지입니다. React 19 + TypeScript(strict) + Tailwind CSS v4 스택을 사용하며, pnpm으로 패키지를 관리합니다.

## 명령어

```bash
pnpm install   # 의존성 설치
pnpm dev       # 개발 서버 실행
pnpm build     # 프로덕션 빌드
pnpm start     # 빌드 결과 실행
pnpm lint      # ESLint 실행
```

- 테스트 프레임워크는 설정되어 있지 않습니다.
- 커밋 시 Husky pre-commit 훅이 `lint-staged`를 실행해 변경된 `*.ts(x)/js(x)` 파일에 `eslint --fix` + `prettier --write`, `*.json/css/md` 파일에 `prettier --write`를 자동 적용합니다.
- PR을 `main`에 올리면 GitHub Actions(`pnpm install --frozen-lockfile` → `pnpm lint` → `pnpm build`)가 실행됩니다.

## 아키텍처

### 라우팅 (`src/app`)

Next.js App Router 구조이며, 각 폴더의 `page.tsx`가 라우트가 됩니다. 주요 라우트 그룹:

- `about/` — 비전, 역사, 새가족 안내, 오시는 길
- `worship/` — 예배 시간, 주보
- `community/` — 목장, 전도모임
- `next-gen/` — 주일학교, 학생청년부
- `sermon/`, `notice/` — 말씀, 공지사항

`src/app/layout.tsx`가 루트 레이아웃으로, 모든 페이지에 `Header` → `{children}` → `JoinCta` → `Footer` 순서의 공통 골격을 적용합니다.

### 컴포넌트 (`src/components`)

세 가지 역할로 분리되어 있습니다:

- `ui/` — 범용 UI 프리미티브 (`Button`, `Card`, `ScheduleRow`, `JoinCta`). `cva()`로 variant를 정의하고 `data-slot` 속성을 부여하는 shadcn 스타일 패턴을 따릅니다.
- `home/` — 홈페이지 전용 섹션 (`Hero`, `Values`). 카드형 데이터는 컴포넌트 상단에 배열(`xxxData`)로 정의한 뒤 `.map()`으로 렌더링합니다 (`Values.tsx` 참고).
- `layout/` — 전역 네비게이션 (`Header`, `Footer`, `Sidebar`, `SidebarAccordionItem`).

새 컴포넌트는 `/add-component <Name> [경로]` 슬래시 커맨드로 생성할 수 있습니다 (`.claude/commands/add-component.md`). `@/lib/utils`의 `cn()` import와 Props interface가 포함된 기본 템플릿이 생성됩니다.

### 공유 로직 (`src/lib`)

- `utils.ts` — `cn()` (clsx + tailwind-merge), className 병합에 사용
- `nav-items.ts` — `Header`/`Sidebar`가 공유하는 네비게이션 데이터 단일 소스. `NavItem`은 `link`(단일 링크) | `group`(하위 메뉴 포함) 타입

### 경로 별칭

`@/*`는 `src/*`를 가리킵니다 (`tsconfig.json`). 다른 레이어(`lib`, 다른 `components` 하위 폴더 등)를 참조할 때는 `@/...`를 사용하고, 같은 폴더 내 형제 파일을 참조할 때는 상대경로(`./`, `../`)를 쓰는 것이 기존 코드의 관례입니다.

## 스타일링

- Tailwind CSS v4를 사용하며, `src/app/globals.css`의 `@theme`에서 커스텀 컬러 토큰을 정의합니다: `--color-cream`, `--color-charcoal`, `--color-description`. 클래스에서 `bg-cream`, `text-charcoal` 등으로 사용합니다.
- variant가 필요한 컴포넌트는 `class-variance-authority`(`cva`)로 정의하고, `cn()`으로 외부 `className`과 병합합니다 (`Button.tsx` 참고).
- Prettier에 `prettier-plugin-tailwindcss`가 적용되어 있어 클래스 이름 순서가 저장/커밋 시 자동 정렬됩니다.
- React Compiler(`reactCompiler: true`, `next.config.ts`)가 활성화되어 있습니다.

## Git/PR 컨벤션

- 브랜치 prefix: `feat/*`, `fix/*`, `style/*`, `refactor/*`, `docs/*`, `chore/*`
- 커밋 메시지: `<type>: <한글 설명>` 형식 (예: `feat: 메인 페이지 Hero 섹션 구현`, `refactor: Values 섹션 카드 데이터를 배열로 분리`)
- PR은 `main`을 베이스로 하며, 머지 전 lint와 build를 통과해야 합니다 (`.github/pull_request_template.md` 체크리스트 참고).
