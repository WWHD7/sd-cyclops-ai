'use client';

export function OGTemplate() {
  return (
    // This is a visual template for the 1200x630px OpenGraph image
    <div className="relative w-[1200px] h-[630px] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Accent Light Effects */}
      <div className="absolute -left-40 -top-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 w-full h-full p-16 flex flex-col">
        {/* Header Section */}
        <div className="flex items-center gap-8 mb-12">
          <div className="w-24 h-24 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center text-sm text-white/50">
            Logo Here
          </div>
          <h2 className="text-4xl font-bold text-white">SD Cyclops AI</h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Left Side - Text Content */}
          <div className="flex-1 pr-12">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-8">
              AI-Powered Defect Detection
            </h1>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  ✓
                </div>
                <p className="text-2xl text-white/80">Assembly Inspection</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  ✓
                </div>
                <p className="text-2xl text-white/80">Cosmetic Analysis</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                  ✓
                </div>
                <p className="text-2xl text-white/80">Real-time Detection</p>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 rounded-3xl border-2 border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-lg text-white/50">
                Product Visual or
                AI Analysis Animation
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between text-white/60">
          <p className="text-xl">A ShakeDeal Product</p>
          <p className="text-xl">sdcyclops.ai</p>
        </div>
      </div>
    </div>
  );
} 