import type { LucideIcon } from 'lucide-react';
import { Film } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/now-showing", label: "Cartelera", icon: Film },
];

