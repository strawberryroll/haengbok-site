'use client';

import { Church, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Sidebar from './Sidebar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleSidebar = () => setIsOpen((prev) => !prev);
  return (
    <header className="relative flex h-16 items-center justify-between px-6">
      <Church />
      <h2 className="absolute left-1/2 -translate-x-1/2">행복한 교회</h2>
      <button type="button" onClick={handleToggleSidebar}>
        <Menu />
      </button>
      <Sidebar isOpen={isOpen} onClose={handleToggleSidebar} />
    </header>
  );
}
