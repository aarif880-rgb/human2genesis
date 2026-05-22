import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Design Tokens ─────────────────────────────────────────
      colors: {
        bg: {
          base:    "#080B10",
          subtle:  "#0D1117",
          muted:   "#111820",
          surface: "#141B24",
        },
        border: {
          subtle: "rgba(255,255,255,0.07)",
          base:   "rgba(255,255,255,0.12)",
          strong: "rgba(255,255,255,0.20)",
        },
        text: {
          primary:   "#F0F4FA",
          secondary: "#7A8899",
          tertiary:  "#4A5568",
        },
        accent: {
          blue:  "#0070F3",
          cyan:  "#00C2FF",
          gold:  "#E8C547",
          green: "#22C55E",
          red:   "#EF4444",
        },
      },

      // ── Typography ────────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-dm-sans)", "sans-serif"],
        mono:    ["var(--font-jetbrains-mono)", "monospace"],
      },

      fontSize: {
        "2xs": ["10px", { lineHeight: "14px", letterSpacing: "0.06em" }],
        xs:    ["12px", { lineHeight: "16px" }],
        sm:    ["13px", { lineHeight: "20px" }],
        base:  ["15px", { lineHeight: "24px" }],
        lg:    ["17px", { lineHeight: "26px" }],
        xl:    ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "30px" }],
        "3xl": ["30px", { lineHeight: "36px" }],
        "4xl": ["38px", { lineHeight: "42px" }],
        "5xl": ["48px", { lineHeight: "52px" }],
        "6xl": ["60px", { lineHeight: "64px" }],
        "7xl": ["76px", { lineHeight: "80px" }],
      },

      letterSpacing: {
        tighter:  "-0.04em",
        tight:    "-0.02em",
        snug:     "-0.01em",
        normal:   "0em",
        wide:     "0.04em",
        wider:    "0.08em",
        widest:   "0.12em",
      },

      // ── Spacing ───────────────────────────────────────────────
      spacing: {
        "18":  "72px",
        "22":  "88px",
        "26":  "104px",
        "30":  "120px",
        "section": "100px",
      },

      // ── Border Radius ─────────────────────────────────────────
      borderRadius: {
        "4":  "4px",
        "6":  "6px",
        "10": "10px",
        "14": "14px",
        "20": "20px",
      },

      // ── Box Shadow ────────────────────────────────────────────
      boxShadow: {
        "glow-blue":  "0 0 40px rgba(0,112,243,0.30)",
        "glow-blue-lg":"0 0 80px rgba(0,112,243,0.35)",
        "glow-cyan":  "0 0 40px rgba(0,194,255,0.20)",
        "card":       "0 1px 3px rgba(0,0,0,0.4)",
        "card-hover": "0 4px 24px rgba(0,0,0,0.5)",
      },

      // ── Background Image ──────────────────────────────────────
      backgroundImage: {
        "gradient-accent":   "linear-gradient(135deg, #0070F3 0%, #00C2FF 100%)",
        "gradient-hero-text":"linear-gradient(90deg, #00C2FF 0%, #7B61FF 100%)",
        "grid-pattern": `linear-gradient(rgba(0,194,255,0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,194,255,0.03) 1px, transparent 1px)`,
      },

      backgroundSize: {
        "grid": "60px 60px",
      },

      // ── Animation ─────────────────────────────────────────────
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1",   transform: "scale(1)" },
          "50%":      { opacity: "0.4", transform: "scale(0.8)" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.6s ease both",
        "fade-in":    "fade-in 0.5s ease both",
        "pulse-dot":  "pulse-dot 2s ease-in-out infinite",
        "shimmer":    "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
