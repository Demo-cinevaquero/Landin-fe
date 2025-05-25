import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
}

export function Section({
  title,
  subtitle,
  children,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
  ...props
}: SectionProps) {
  return (
    <section className={cn('py-12 md:py-16', className)} {...props}>
      {(title || subtitle) && (
        <div className="mb-8 md:mb-12 text-center">
          {title && (
            <h2
              className={cn(
                'text-3xl md:text-4xl font-bold tracking-tight text-foreground',
                titleClassName
              )}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={cn(
                'mt-2 md:mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto',
                subtitleClassName
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={cn(contentClassName)}>{children}</div>
    </section>
  );
}
