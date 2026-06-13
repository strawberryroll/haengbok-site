import { Church, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative flex h-16 items-center justify-between px-6">
      <Church />
      <h2 className="absolute left-1/2 -translate-x-1/2">행복한 교회</h2>
      <Menu />
    </header>
  );
}
