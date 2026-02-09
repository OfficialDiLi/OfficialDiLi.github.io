// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Luxury Emerald & Gold Palette
        emerald: {
          900: '#022c22', // Deep Background
          700: '#064e3b', // Hover state
          500: '#10b981', // Main Accent
        },
        offwhite: '#f9f7f1', // Soft Background
        golden: {
          DEFAULT: '#c8b273', // Primary Gold
          dark: '#E3AD00',    // Hover Gold

        }
      },
    },
  },
  plugins: [],
}