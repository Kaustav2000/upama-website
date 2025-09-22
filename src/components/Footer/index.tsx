import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

// Type declarations for Vanta.js (scoped to this file)
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

const Footer = () => {
  const vantaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.VANTA) {
      const vantaEffect = window.VANTA.FOG({
        el: vantaRef.current as unknown as HTMLElement,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        highlightColor: 0x2a5aaa, // var(--primary)
        midtoneColor: 0x1e746f, // var(--secondary)
        lowlightColor: 0x1a3c6e, // var(--primary-dark)
        baseColor: 0x145450, // var(--secondary-dark)
        blurFactor: 0.5,
        speed: 1.0,
        zoom: 0.9,
      });

      return () => {
        if (vantaEffect && vantaEffect.destroy) vantaEffect.destroy();
      };
    }
  }, []);

  return (
    <footer
      ref={vantaRef}
      className="w-full border-t relative overflow-hidden"
      style={{
        backgroundColor: "var(--dark)",
        borderColor: "var(--gray-light)",
        minHeight: 260,
      }}
    >
      {/* Content wrapper should be relative to sit above Vanta canvas */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "var(--white)" }}
            >
              Finnacle
            </h3>
            <p className="text-sm" style={{ color: "var(--gray-light)" }}>
              Strategic fundraising and financial advisory.
            </p>
          </div>
          <div>
            <h4
              className="text-sm font-semibold mb-2"
              style={{ color: "var(--white)" }}
            >
              Email
            </h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="mailto:admin@finnacleadvisors.com"
                  className="transition-colors"
                  style={{ color: "var(--white)" }}
                >
                  admin@finnacleadvisors.com
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-sm font-semibold mb-2"
              style={{ color: "var(--white)" }}
            >
              Address
            </h4>
            <address
              className="not-italic text-sm"
              style={{ color: "var(--gray-light)" }}
            >
              Address: 7/1A, Gopal Nagar Road, Alipore. Kolkata -700027
            </address>
          </div>
          <div className="md:text-right">
            <div className="inline-flex gap-3">
              <Link
                to="/"
                className="text-sm transition-colors"
                style={{ color: "var(--white)" }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sm transition-colors"
                style={{ color: "var(--white)" }}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
        <div
          className="mt-8 pt-6 border-t"
          style={{ borderColor: "var(--gray-light)" }}
        >
          <p
            className="text-xs text-center"
            style={{ color: "var(--gray-light)" }}
          >
            © {new Date().getFullYear()} Finnacle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
