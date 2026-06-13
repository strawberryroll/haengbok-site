import { type NavGroupItem } from '@/lib/nav-items';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type SidebarAccordionItemProps = {
  item: NavGroupItem;
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
};

export default function SidebarAccordionItem({
  item,
  isOpen,
  onToggle,
  onLinkClick,
}: SidebarAccordionItemProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between"
      >
        <span>{item.label}</span>
        <ChevronRight
          className={
            isOpen ? 'rotate-90 transition-transform' : 'transition-transform'
          }
        />
      </button>
      <div
        className={cn(
          'grid',
          'overflow-hidden',
          'transition-all',
          'duration-300',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <ul className="min-h-0">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link href={child.href} onClick={onLinkClick}>
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
