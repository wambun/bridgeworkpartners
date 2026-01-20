'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'full' | 'icon';
  colorScheme?: 'dark' | 'light';
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * BridgeWork Partners Logo
 *
 * A modern, premium logo featuring an abstract "B" with bridge-inspired arches
 * that symbolize connection and partnership.
 */
const Logo = ({
  variant = 'full',
  colorScheme = 'dark',
  className,
  showText = true,
  size = 'md',
}: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-10 h-10', text: 'text-xl' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl' },
  };

  const colors = {
    dark: {
      primary: '#1B5E5E',      // Teal
      accent: '#E5A855',       // Gold
      textBold: 'text-gray-900',
      textLight: 'text-gray-500',
    },
    light: {
      primary: '#FFFFFF',
      accent: '#E5A855',       // Gold
      textBold: 'text-white',
      textLight: 'text-white/60',
    },
  };

  const currentColors = colors[colorScheme];
  const currentSize = sizes[size];

  // SVG Logo Mark - Abstract "B" with bridge arches
  const LogoMark = () => (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(currentSize.icon, 'flex-shrink-0')}
    >
      {/* Background rounded square */}
      <rect
        x="0"
        y="0"
        width="48"
        height="48"
        rx="10"
        fill={currentColors.primary}
      />

      {/* Bridge arch 1 - larger, represents the top of "B" */}
      <path
        d="M12 28 C12 18, 24 12, 36 18"
        stroke={currentColors.accent}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bridge arch 2 - smaller, represents the bottom of "B" */}
      <path
        d="M12 36 C12 28, 22 24, 32 28"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* Vertical pillar - the stem of "B" */}
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="36"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );

  // Icon only variant
  if (variant === 'icon' || !showText) {
    return (
      <div className={cn('flex items-center', className)}>
        <LogoMark />
      </div>
    );
  }

  // Full logo with text
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <LogoMark />
      <div className={cn('font-display tracking-tight', currentSize.text)}>
        <span className={cn('font-bold', currentColors.textBold)}>
          BRIDGEWORK
        </span>
        <span className={cn('font-medium', currentColors.textLight)}>
          PARTNERS
        </span>
      </div>
    </div>
  );
};

/**
 * Logo wrapped in a Link component for navigation
 */
export const LogoLink = ({
  href = '/',
  ...props
}: LogoProps & { href?: string }) => {
  return (
    <Link href={href} className="flex items-center z-10">
      <Logo {...props} />
    </Link>
  );
};

export default Logo;
