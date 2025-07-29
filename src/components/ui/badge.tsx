import { ReactNode } from 'react';
import { designSystem, cn } from '@/styles/design-system';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'glass';
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  return (
    <div className={cn(
      designSystem.components.badge.base,
      variant === 'primary' 
        ? designSystem.components.badge.primary
        : designSystem.components.badge.glass,
      className
    )}>
      {children}
    </div>
  );
} 