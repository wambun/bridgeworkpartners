/**
 * Color utility helpers for premium accent color system
 * Maps accent colors to Tailwind classes dynamically
 */

export type AccentColor = 'primary' | 'accent1' | 'accent2' | 'accent3';

export interface ColorClasses {
  bg: string;
  bgLight: string;
  bgGradient: string;
  text: string;
  textLight: string;
  border: string;
  borderLight: string;
  borderLeft: string;
  borderTop: string;
  shadow: string;
  shadowGlow: string;
  hoverBg: string;
  hoverText: string;
  ring: string;
}

export const accentColorClasses: Record<AccentColor, ColorClasses> = {
  primary: {
    bg: 'bg-primary-500',
    bgLight: 'bg-primary-50',
    bgGradient: 'bg-gradient-to-br from-primary-500 to-primary-700',
    text: 'text-primary-500',
    textLight: 'text-primary-100',
    border: 'border-primary-500',
    borderLight: 'border-primary-200',
    borderLeft: 'border-l-primary-500',
    borderTop: 'border-t-primary-500',
    shadow: 'shadow-primary-500/20',
    shadowGlow: 'shadow-glow-primary',
    hoverBg: 'hover:bg-primary-600',
    hoverText: 'hover:text-primary-600',
    ring: 'ring-primary-500/20',
  },
  accent1: {
    bg: 'bg-accent1-500',
    bgLight: 'bg-accent1-50',
    bgGradient: 'bg-gradient-to-br from-accent1-500 to-accent1-700',
    text: 'text-accent1-500',
    textLight: 'text-accent1-100',
    border: 'border-accent1-500',
    borderLight: 'border-accent1-200',
    borderLeft: 'border-l-accent1-500',
    borderTop: 'border-t-accent1-500',
    shadow: 'shadow-accent1-500/20',
    shadowGlow: 'shadow-glow-accent1',
    hoverBg: 'hover:bg-accent1-600',
    hoverText: 'hover:text-accent1-600',
    ring: 'ring-accent1-500/20',
  },
  accent2: {
    bg: 'bg-accent2-500',
    bgLight: 'bg-accent2-50',
    bgGradient: 'bg-gradient-to-br from-accent2-500 to-accent2-700',
    text: 'text-accent2-500',
    textLight: 'text-accent2-100',
    border: 'border-accent2-500',
    borderLight: 'border-accent2-200',
    borderLeft: 'border-l-accent2-500',
    borderTop: 'border-t-accent2-500',
    shadow: 'shadow-accent2-500/20',
    shadowGlow: 'shadow-glow-accent2',
    hoverBg: 'hover:bg-accent2-600',
    hoverText: 'hover:text-accent2-600',
    ring: 'ring-accent2-500/20',
  },
  accent3: {
    bg: 'bg-accent3-500',
    bgLight: 'bg-accent3-50',
    bgGradient: 'bg-gradient-to-br from-accent3-500 to-accent3-700',
    text: 'text-accent3-500',
    textLight: 'text-accent3-100',
    border: 'border-accent3-500',
    borderLight: 'border-accent3-200',
    borderLeft: 'border-l-accent3-500',
    borderTop: 'border-t-accent3-500',
    shadow: 'shadow-accent3-500/20',
    shadowGlow: 'shadow-glow-accent3',
    hoverBg: 'hover:bg-accent3-600',
    hoverText: 'hover:text-accent3-600',
    ring: 'ring-accent3-500/20',
  },
};

/**
 * Get color classes for a specific accent color
 */
export function getColorClasses(color: AccentColor): ColorClasses {
  return accentColorClasses[color];
}

/**
 * Service ID to accent color mapping
 */
export const serviceAccentColors: Record<string, AccentColor> = {
  bridgeworktech: 'accent2',    // Blue/Indigo - Technology
  bridgeworksearch: 'accent1',  // Orange/Gold - Executive
  bridgeworkstaff: 'accent3',   // Purple/Magenta - Creative
  bridgeworkhr: 'primary',      // Teal - Brand core
  bridgeworksled: 'accent2',    // Blue/Indigo - Government
  bridgeworkrpo: 'accent3',     // Purple/Magenta - Process
};

/**
 * Get accent color for a service by ID
 */
export function getServiceAccentColor(serviceId: string): AccentColor {
  return serviceAccentColors[serviceId] || 'primary';
}

/**
 * Rotating accent colors for lists/grids
 */
export const rotatingAccentColors: AccentColor[] = ['primary', 'accent1', 'accent2', 'accent3'];

/**
 * Get accent color by index (for rotating through colors)
 */
export function getAccentColorByIndex(index: number): AccentColor {
  return rotatingAccentColors[index % rotatingAccentColors.length];
}
