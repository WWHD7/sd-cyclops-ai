import { ReactNode } from 'react';
import { Card } from '../ui/card';
import { IconContainer } from '../ui/icon-container';
import { designSystem } from '@/styles/design-system';

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid gap-8 ${gridCols[columns]}`}>
      {features.map((feature, index) => (
        <Card key={index}>
          <div className="flex items-center gap-4">
            <IconContainer>
              {feature.icon}
            </IconContainer>
            <h3 className={designSystem.typography.heading.h3}>
              {feature.title}
            </h3>
          </div>
          <p className={`${designSystem.typography.body.base} ${designSystem.typography.body.muted} mt-4`}>
            {feature.description}
          </p>
        </Card>
      ))}
    </div>
  );
} 