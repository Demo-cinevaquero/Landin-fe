import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { Logo } from '@/components/icons/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center">
        <Link href="/" className="flex items-center">
          <Logo />
          <span className="sr-only">Cine Vaquero Inicio</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex md:ml-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/70 transition-colors hover:bg-gradient-to-r hover:from-primary hover:to-[hsl(22_100%_60%)] hover:bg-clip-text hover:text-transparent flex items-center gap-2 py-2"
            >
              {link.icon && <link.icon className="h-5 w-5" />}
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center md:hidden ml-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Alternar menú de navegación</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <Logo />
                  <span className="sr-only">Cine Vaquero</span>
                </Link>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:bg-gradient-to-r hover:from-primary hover:to-[hsl(22_100%_60%)] hover:bg-clip-text hover:text-transparent flex items-center gap-3 py-2"
                  >
                    {link.icon && <link.icon className="h-6 w-6" />}
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
