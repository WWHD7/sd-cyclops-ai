import { ReactNode } from 'react';
import { designSystem, cn } from '@/styles/design-system';

interface CardProps {
  children: ReactNode;
  withGlow?: boolean;
  className?: string;
}

export function Card({ children, withGlow = true, className }: CardProps) {
  if (withGlow) {
    return (
      <div className={designSystem.components.card.glow.wrapper}>
        <div className={designSystem.components.card.glow.effect} />
        <div className={cn(
          designSystem.components.card.base,
          designSystem.components.card.hover,
          className
        )}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      designSystem.components.card.base,
      designSystem.components.card.hover,
      className
    )}>
      {children}
    </div>
  );
} 