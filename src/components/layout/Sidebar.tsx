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
  function handleClose() {
    onClose();
    setOpenGroups(new Set());
  }
  return (
    <>
      {/* 오버레이 레이어 */}
      <div
        onClick={handleClose}
        className={cn(
          'fixed inset-0 z-40 bg-charcoal/50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />

      {/* 콘텐츠 */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-[80vw] max-w-[80vw] bg-white px-8 shadow-xl transition-transform duration-500 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-16 items-center justify-between">
          <h2 className="text-lg">행복한 교회</h2>
          <button type="button" onClick={handleClose}>
            <X size={20} className="text-charcoal/30" />
          </button>
        </div>
        <hr className="-mx-8 border-charcoal/10" />
        <nav className="pt-5">
          <ul className="flex flex-col gap-5">
            {navItems.map((item) =>
              item.type === 'link' ? (
                <li key={item.href}>
                  <Link onClick={handleClose} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.id}>
                  <SidebarAccordionItem
                    item={item}
                    isOpen={openGroups.has(item.id)}
                    onToggle={() => toggleGroup(item.id)}
                    onLinkClick={handleClose}
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
