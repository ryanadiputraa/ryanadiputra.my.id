import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: "300ms",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'move-right-return': 'move-right-return 1s infinite',
      },
      keyframes: {
        'move-right-return': {
          '0%': { transform: 'translateX(0)' },
          '30%': { transform: 'translateX(0.8rem)' },
          '70%': { transform: 'translateX(0.8rem)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
