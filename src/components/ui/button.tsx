import { ReactNode } from 'react';
import { designSystem, cn } from '@/styles/design-system';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  withUnderline?: boolean;
}

export function Button({ 
  variant = 'primary', 
  children, 
  withUnderline = false,
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = variant === 'primary' 
    ? designSystem.components.button.primary
    : designSystem.components.button.secondary;

  return (
    <button
      className={cn(baseStyles, className)}
      {...props}
    >
      {children}
      {withUnderline && variant === 'secondary' && (
        <span className={designSystem.components.button.underline} />
      )}
    </button>
  );
} 