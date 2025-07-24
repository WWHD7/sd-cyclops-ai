import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative isolate">
        {/* Hero Background with Image and Grid */}
        <div className="absolute inset-0 -z-10">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.png"
              alt="Industrial background"
              fill
              className="object-cover object-center brightness-[0.85]"
              priority
              quality={100}
            />
            {/* Dark Blue Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/25 via-blue-950/20 to-background/90" />
            <div className="absolute inset-0 bg-black/15" /> {/* Further reduced darkening layer */}
          </div>

          {/* Grid Overlay */}
          <div className="absolute inset-0">
            {/* Primary Grid - Large */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
            {/* Secondary Grid - Fine */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:1rem_1rem]" />
            
            {/* Radial Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-blue-950/20" />
          </div>

          {/* Accent Lights - Keeping original opacity */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Primary Light */}
            <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px] opacity-20 animate-pulse-slow" />
            
            {/* Secondary Light */}
            <div className="absolute -right-1/4 top-1/3 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[128px] opacity-20 animate-pulse-slow delay-1000" />
            
            {/* Additional Ambient Light */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-blue-500/10 rounded-full blur-[96px] opacity-20 rotate-45 animate-float" />
          </div>
        </div>

        <main className="relative">
          <div className="relative px-6 lg:px-8 max-w-7xl mx-auto pt-20 pb-24 sm:pt-32 sm:pb-32">
            {/* Top Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm text-white mb-8 border border-white/10 shadow-[inset_0px_0px_1px_rgba(255,255,255,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span className="text-white/90">AI-Powered Quality Control</span>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl relative">
                <span className="text-white drop-shadow-lg">
                  Next-Generation
                </span>
                <br />
                <span className="mt-2 block text-white drop-shadow-lg">Defect Detection System</span>
      </h1>
              
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/90 drop-shadow">
                Enhance your production line with real-time AI analysis. Detect defects with unprecedented accuracy and optimize your quality control process.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#demo"
                  className="group relative rounded-lg px-8 py-4 text-sm font-semibold text-white bg-primary/80 hover:bg-primary/90 transition-all duration-300 overflow-hidden backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
                  </div>
                </a>
                <a 
                  href="#features" 
                  className="group relative rounded-lg px-8 py-4 text-sm font-semibold bg-white/10 text-white ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                >
                  View Demo
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-white/70 to-white/0 transition-opacity opacity-0 group-hover:opacity-100" />
                </a>
              </div>

              {/* Stats Grid */}
              <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {[
                  {
                    stat: "99.9%",
                    label: "Accuracy Rate",
                    icon: (
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )
                  },
                  {
                    stat: "50%",
                    label: "Cost Reduction",
                    icon: (
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )
                  },
                  {
                    stat: "2x",
                    label: "Faster QC Process",
                    icon: (
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )
                  },
                  {
                    stat: "24/7",
                    label: "Monitoring",
                    icon: (
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )
                  },
                ].map(({ stat, label, icon }) => (
                  <div key={label} className="relative group">
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                    
                    {/* Card Content */}
                    <div className="relative flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-4 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10 backdrop-blur-sm group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-white/20">
                      {/* Icon Container with Hover Effect */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                        <div className="transition-transform duration-300 group-hover:rotate-12">
                          {icon}
                        </div>
                      </div>
                      
                      {/* Stat with Hover Effect */}
                      <div className="text-2xl font-bold text-white transition-all duration-300 group-hover:text-primary">
                        {stat}
                      </div>
                      
                      {/* Label */}
                      <div className="text-sm text-white/80 transition-all duration-300 group-hover:text-white">
                        {label}
                      </div>

                      {/* Accent Light on Hover */}
                      <div className="absolute -z-10 inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-all duration-300">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/5 to-accent/0 animate-gradient"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </main>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8 border border-primary/10">
              <span>Advanced Features</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Industrial-Grade Detection
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our AI system continuously learns and adapts to your production environment, providing unmatched accuracy in defect detection.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Real-time Analysis",
                  description: "Instant detection and classification of defects during production, enabling immediate corrective action.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Custom AI Models",
                  description: "AI models trained specifically for your products and quality standards.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8" />
                    </svg>
                  ),
                },
                {
                  title: "Smart Automation",
                  description: "Automated quality control processes that integrate seamlessly with your existing systems.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
                {
                  title: "Advanced Analytics",
                  description: "Comprehensive insights and trend analysis to optimize your production process.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                },
                {
                  title: "Multi-Camera Support",
                  description: "Support for multiple camera angles and inspection points throughout your production line.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Secure Platform",
                  description: "Enterprise-grade security with real-time backups and redundancy.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur opacity-5 group-hover:opacity-10 transition duration-500"></div>
                  <div className="relative flex flex-col gap-4 rounded-lg border border-foreground/10 bg-white/5 p-6 transition duration-300 group-hover:border-foreground/20">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold leading-8">{feature.title}</h3>
                    </div>
                    <p className="text-base leading-7 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-2xl p-8 relative overflow-hidden" style={{ backgroundColor: '#1e3a8a' }}>
            {/* Subtle black overlay */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="mx-auto max-w-xl text-center relative z-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Ready to Transform Your Quality Control?
              </h2>
              <p style={{ color: 'white' }} className="mx-auto mt-6 text-lg leading-8">
                Book a personalized demo today and see how SD Cyclops AI can revolutionize your manufacturing process.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#contact"
                  className="rounded-lg px-8 py-4 text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Schedule Demo
                </a>
                <a
                  href="#pricing"
                  className="group relative rounded-lg px-8 py-4 text-sm font-semibold bg-white/10 text-white ring-1 ring-white/20 hover:ring-white/40 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-white/20"
                >
                  View Pricing
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-white/70 to-white/0 transition-opacity opacity-0 group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* Accent light effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -left-1/4 top-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-[64px] opacity-50" />
              <div className="absolute -right-1/4 bottom-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[64px] opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8 border border-primary/10">
              <span>Industries We Serve</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted Across Industries
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our AI-powered quality control solutions are deployed across various manufacturing sectors
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Automotive",
                  description: "Quality control for automotive parts, assembly lines, and final product inspection.",
                  icon: "🚗",
                },
                {
                  title: "Electronics",
                  description: "PCB inspection, component verification, and assembly validation.",
                  icon: "🔌",
                },
                {
                  title: "Pharmaceuticals",
                  description: "Package integrity, label verification, and product quality assurance.",
                  icon: "💊",
                },
                {
                  title: "Food & Beverage",
                  description: "Packaging inspection, contamination detection, and quality verification.",
                  icon: "🥤",
                },
                {
                  title: "Aerospace",
                  description: "High-precision part inspection and critical component validation.",
                  icon: "✈️",
                },
                {
                  title: "Consumer Goods",
                  description: "Product quality control, packaging verification, and defect detection.",
                  icon: "📦",
                },
              ].map((industry) => (
                <div
                  key={industry.title}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur opacity-5 group-hover:opacity-10 transition duration-500"></div>
                  <div className="relative flex flex-col gap-4 rounded-lg border border-foreground/10 bg-white/5 p-6 transition duration-300 group-hover:border-foreground/20">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl group-hover:bg-primary/20 transition-colors">
                        {industry.icon}
                      </div>
                      <h3 className="text-lg font-semibold leading-8">{industry.title}</h3>
                    </div>
                    <p className="text-base leading-7 text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Applications Section */}
      <section id="applications" className="py-24 relative bg-blue-950/5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8 border border-primary/10">
              <span>AI Applications</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Advanced AI Models for Every Need
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our specialized AI models are designed to handle various inspection requirements
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {[
                {
                  title: "Assembly Inspection AI",
                  description: "Automated verification of assembly completeness, component placement, and connection integrity. Real-time detection of assembly errors and misalignments.",
                  features: [
                    "Component presence verification",
                    "Assembly sequence validation",
                    "Connection quality check",
                    "Real-time error detection"
                  ],
                  icon: "🔧"
                },
                {
                  title: "Cosmetic Inspection AI",
                  description: "Advanced surface defect detection for scratches, dents, color variations, and finish imperfections. Ensures consistent product appearance.",
                  features: [
                    "Surface defect detection",
                    "Color consistency check",
                    "Finish quality validation",
                    "Texture analysis"
                  ],
                  icon: "🔍"
                },
                {
                  title: "Dimensioning AI",
                  description: "Precise measurement and verification of product dimensions, tolerances, and geometric specifications. Ensures compliance with design requirements.",
                  features: [
                    "Precise measurements",
                    "Tolerance verification",
                    "Geometric analysis",
                    "3D inspection"
                  ],
                  icon: "📏"
                },
                {
                  title: "Label Inspection AI",
                  description: "Automated verification of label placement, content, barcode quality, and regulatory compliance. Ensures accurate product identification.",
                  features: [
                    "Text verification",
                    "Barcode validation",
                    "Label placement check",
                    "Compliance verification"
                  ],
                  icon: "🏷️"
                },
              ].map((app) => (
                <div
                  key={app.title}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur opacity-5 group-hover:opacity-10 transition duration-500"></div>
                  <div className="relative flex flex-col gap-6 rounded-lg border border-foreground/10 bg-white/5 p-8 transition duration-300 group-hover:border-foreground/20">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-3xl group-hover:bg-primary/20 transition-colors">
                        {app.icon}
                      </div>
                      <h3 className="text-xl font-semibold leading-8">{app.title}</h3>
                    </div>
                    <p className="text-base leading-7 text-muted-foreground">
                      {app.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-3">
                      {app.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm text-primary mb-8 border border-primary/10">
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Start Your AI Journey Today
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Let's discuss how our AI solutions can transform your quality control process
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur opacity-5"></div>
              <div className="relative rounded-lg border border-foreground/10 bg-white/5 p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-2 block w-full rounded-md border border-foreground/10 bg-white/5 px-4 py-2.5 text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-2 block w-full rounded-md border border-foreground/10 bg-white/5 px-4 py-2.5 text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="mt-2 block w-full rounded-md border border-foreground/10 bg-white/5 px-4 py-2.5 text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-2 block w-full rounded-md border border-foreground/10 bg-white/5 px-4 py-2.5 text-foreground placeholder-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Tell us about your quality control needs..."
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
