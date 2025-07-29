import { ReactNode } from 'react';
import { patterns, designSystem, cn } from '@/styles/design-system';

interface HeroSectionProps {
  children: ReactNode;
  backgroundImage?: string;
  withGrid?: boolean;
  withOverlay?: boolean;
  className?: string;
}

export function HeroSection({ 
  children, 
  backgroundImage,
  withGrid = true,
  withOverlay = true,
  className 
}: HeroSectionProps) {
  return (
    <section className={cn(patterns.heroSection.wrapper, className)}>
      <div className={patterns.heroSection.background.wrapper}>
        {backgroundImage && (
          <div className="absolute inset-0">
            <img
              src={backgroundImage}
              alt="Background"
              className={patterns.heroSection.background.image}
            />
            {withOverlay && (
              <>
                <div className={patterns.heroSection.background.overlay} />
                <div className={designSystem.colors.overlay.dark} />
              </>
            )}
          </div>
        )}
        
        {withGrid && (
          <>
            <div className={designSystem.effects.grid.primary} />
            <div className={designSystem.effects.grid.secondary} />
          </>
        )}
      </div>

      <div className={designSystem.layout.container}>
        {children}
      </div>
    </section>
  );
} 