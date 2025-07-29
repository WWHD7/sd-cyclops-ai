import { ReactNode } from 'react';
import { patterns, cn } from '@/styles/design-system';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}

export function SectionHeader({ 
  badge, 
  title, 
  description, 
  className,
  children 
}: SectionHeaderProps) {
  return (
    <div className={cn(patterns.sectionHeader.wrapper, className)}>
      {badge && (
        <div className={patterns.sectionHeader.badge}>
          {badge}
        </div>
      )}
      <h2 className={patterns.sectionHeader.heading}>
        {title}
      </h2>
      {description && (
        <p className={patterns.sectionHeader.description}>
          {description}
        </p>
      )}
      {children}
    </div>
  );
} 