import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'heroBg':"url('public/herobg.jpg')",
        'countBg': "url('public/bg-coundown.png')",
        'starRectangle': "url('public/star/Rectangle 135.png')",
      },
    },
    screens: {
      'xs': '328px', // Add custom 'xs' breakpoint
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    padding: {
      '150px': '150px',
      '50px': '50px',
    },
  },
  plugins: [],
} satisfies Config;
