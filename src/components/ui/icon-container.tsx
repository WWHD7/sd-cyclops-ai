import { ReactNode } from 'react';
import { designSystem, cn } from '@/styles/design-system';

interface IconContainerProps {
  children: ReactNode;
  variant?: 'primary';
  className?: string;
}

export function IconContainer({ 
  children, 
  variant = 'primary', 
  className 
}: IconContainerProps) {
  return (
    <div className={cn(
      designSystem.components.iconContainer.base,
      variant === 'primary' && designSystem.components.iconContainer.primary,
      className
    )}>
      {children}
    </div>
  );
} 