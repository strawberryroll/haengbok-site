'use client';

import { Church, Menu } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleSidebar = () => setIsOpen((prev) => !prev);
  return (
    <header className="relative flex h-16 items-center justify-between px-6">
      <Link href="/">
        <Church size={20} />
      </Link>
      <Link href="/">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">
          행복한 교회
        </h1>
      </Link>
      <button type="button" onClick={handleToggleSidebar}>
        <Menu size={20} />
      </button>
      <Sidebar isOpen={isOpen} onClose={handleToggleSidebar} />
    </header>
  );
}
