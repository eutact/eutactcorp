"use client";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20 lg:px-32 overflow-hidden">
      {/* Centered Animated Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,_#4b00d0,_#1a0a4f,_transparent)] blur-[180px] opacity-60 animate-pulse-glow" />
      </div>

      {/* Solid Background Layer */}
      <div className="absolute inset-0 bg-[#09090B] z-[-1]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl w-full">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-5 py-2 mb-6 rounded-full text-sm bg-white/5 border border-white/10 backdrop-blur-sm text-white">
          <span>✨ Setup your AI workflow with us</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-white mb-6">
          We are the Experts in <br />
          AI Business Solutions
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          We provide end-to-end AI integration tailored for your business — from
          intelligent chatbots to full-stack automation. Let’s turn your ideas
          into smart, scalable, real-world solutions.
        </p>

        {/* CTA Button */}
        <div>
          <button className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white px-6 py-3 rounded-lg font-medium text-sm sm:text-base shadow-md hover:scale-105 transition-transform">
            Try AI Examples
          </button>
        </div>
      </div>
    </section>
  );
}
