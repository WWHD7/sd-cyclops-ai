import { designSystem, cn } from '@/styles/design-system';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          designSystem.components.input.base,
          designSystem.components.input.focus,
          className
        )}
        {...props}
      />
    </div>
  );
} 