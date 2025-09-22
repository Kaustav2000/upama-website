import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

// Type declarations for Vanta.js
interface VantaFogOptions {
  el: HTMLElement | null;
  mouseControls: boolean;
  touchControls: boolean;
  gyroControls: boolean;
  minHeight: number;
  minWidth: number;
  highlightColor: number;
  midtoneColor: number;
  lowlightColor: number;
  baseColor: number;
  blurFactor: number;
  speed: number;
  zoom: number;
}

interface VantaEffect {
  destroy: () => void;
}

declare global {
  interface Window {
    VANTA: {
      FOG: (options: VantaFogOptions) => VantaEffect;
    };
  }
}

const HeroSection = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.VANTA) {
      const vantaEffect = window.VANTA.FOG({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x2a5aaa,
        midtoneColor: 0x1e746f,
        lowlightColor: 0x1a3c6e,
        baseColor: 0x145450,
        blurFactor: 0.5,
        speed: 1.0,
        zoom: 0.8,
      });

      return () => {
        if (vantaEffect && vantaEffect.destroy) {
          vantaEffect.destroy();
        }
      };
    }
  }, []);

  return (
    <section
      ref={vantaRef}
      className="relative text-white w-full overflow-hidden"
      style={{
        minHeight: "40vh",
        background: `linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 50%, var(--secondary-dark) 100%)`,
      }}
    >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
            <span
              className="w-2 h-2 rounded-full mr-2 animate-pulse"
              style={{ backgroundColor: "var(--accent-gold)" }}
            ></span>
            Trusted by 500+ Companies Worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
            Expert Financial Advisory Services
          </h1>
          <p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--light)" }}
          >
            Strategic guidance for fundraising and financial advisory needs. We
            help businesses navigate complex financial landscapes with
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/about">
              <button
                className="text-white group border-2 px-10 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)`,
                  borderColor: "var(--primary-light)",
                }}
              >
                <span className="flex items-center hover:cursor-pointer">
                  Learn More
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
