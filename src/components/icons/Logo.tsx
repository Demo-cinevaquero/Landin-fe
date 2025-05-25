import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  // This component assumes you have placed the logo image (the one you provided)
  // in the /public folder and named it 'logo.png'.
  // The original image is 1000x1000px.
  return (
    <Image
      src="/logo.png"
      alt="Cine Vaquero Logo"
      width={1000} // Intrinsic width of the source image
      height={1000} // Intrinsic height of the source image
      className={cn('h-8 w-8', className)} // Styles the image to 32x32px
      priority // Logos are usually important for LCP
    />
  );
}
