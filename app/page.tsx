import { VideoBackground } from "@/components/video-background";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <VideoBackground />

      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, hsl(201 100% 13% / 0.75) 0%, hsl(201 100% 13% / 0.55) 50%, hsl(201 100% 13% / 0.8) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <HeroSection />
        <footer className="mt-auto pb-6 pt-12 text-center">
          <p className="text-xs tracking-wide text-foreground/30">
            &copy; simple 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
