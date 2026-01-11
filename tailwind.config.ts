import type { Config } from "tailwindcss";

const withOpacityValue = (variable: string) => {
  return ({ opacityValue }: { opacityValue?: string }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variable}) / ${opacityValue})`;
    }
    return `rgb(var(${variable}))`;
  };
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: withOpacityValue("--background"),
        foreground: withOpacityValue("--foreground"),
        muted: withOpacityValue("--muted"),
        "muted-soft": withOpacityValue("--muted-soft"),
        accent: withOpacityValue("--accent"),
        accent2: withOpacityValue("--accent2"),
        secondary: withOpacityValue("--secondary"),
        surface: withOpacityValue("--surface"),
        "surface-strong": withOpacityValue("--surface-strong"),
        "surface-card": withOpacityValue("--surface-card"),
        "surface-overlay": withOpacityValue("--surface-overlay"),
        "border-subtle": withOpacityValue("--border-subtle"),
        "border-strong": withOpacityValue("--border-strong"),
        divider: withOpacityValue("--divider"),
        "text-muted": withOpacityValue("--text-muted"),
        "text-soft": withOpacityValue("--text-soft"),
      } as any,
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        head: ['var(--font-head)', 'Space Grotesk', 'sans-serif'],
      },
      animation: {
        'aurora': "aurora 60s linear infinite",
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'blink': 'blink 1s infinite',
        'decrypt': 'decrypt 2s ease-out forwards',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 15px #8b5cf6' },
          '100%': { boxShadow: '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        decrypt: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #8b5cf610 1px, transparent 1px), linear-gradient(to bottom, #8b5cf610 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      }
    },
  },
  plugins: [],
};

export default config;
