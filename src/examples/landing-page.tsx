import { HeroSection } from '@/components/sections/hero-section';
import { FeatureGrid } from '@/components/sections/feature-grid';
import { ContactForm } from '@/components/sections/contact-form';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function LandingPage() {
  const features = [
    {
      title: 'Feature 1',
      description: 'Description of feature 1',
      icon: '🚀',
    },
    {
      title: 'Feature 2',
      description: 'Description of feature 2',
      icon: '⚡️',
    },
    {
      title: 'Feature 3',
      description: 'Description of feature 3',
      icon: '🎯',
    },
  ];

  const handleContact = async (data: any) => {
    console.log('Form submitted:', data);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        backgroundImage="/images/hero-bg.png"
        withGrid
        withOverlay
      >
        <div className="text-center py-24">
          <Badge>New Release</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl text-white">
            Your Product Name
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Your product description goes here
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button>Get Started</Button>
            <Button variant="secondary" withUnderline>
              Learn More
            </Button>
          </div>
        </div>
      </HeroSection>

      {/* Features Section */}
      <section className="py-24 relative">
        <SectionHeader
          badge="Features"
          title="What We Offer"
          description="Description of your features goes here"
        />
        <div className="mt-16 max-w-7xl mx-auto px-6 lg:px-8">
          <FeatureGrid features={features} columns={3} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeader
            badge="Contact"
            title="Get in Touch"
            description="We'd love to hear from you"
          />
          <div className="mt-16">
            <ContactForm onSubmit={handleContact} />
          </div>
        </div>
      </section>
    </div>
  );
} 