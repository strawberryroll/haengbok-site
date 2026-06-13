'use client';

import { navItems } from '@/lib/nav-items';
import Link from 'next/link';
import { useState } from 'react';
import SidebarAccordionItem from './SidebarAccordionItem';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [openGroups, setOpenGroups] = useState<Set<string>>(new Set());
  function toggleGroup(id: string) {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }
  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-40 bg-charcoal/50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-80 max-w-[80vw] bg-white p-10 shadow-xl transition-transform duration-500 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex justify-between">
          <h2>행복한 교회</h2>
          <button type="button" onClick={onClose}>
            <X />
          </button>
        </div>
        <nav>
          <ul>
            {navItems.map((item) =>
              item.type === 'link' ? (
                <li key={item.href}>
                  <Link onClick={onClose} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.id}>
                  <SidebarAccordionItem
                    item={item}
                    isOpen={openGroups.has(item.id)}
                    onToggle={() => toggleGroup(item.id)}
                    onLinkClick={onClose}
                  />
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}
