import type { Config } from "tailwindcss"
import { breakpoints } from "./lib/utils"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        none: "0",
        xxs: "var(--br-xxs)",
        xs: "var(--br-xs)",
        sm: "var(--br-sm)",
        md: "var(--br-ms)",
        lg: "var(--br-lg)",
        xl: "var(--br-xl)",
      },
    },
    screens: {
      tablet: `${breakpoints.mobile}px`,
      // => @media (min-width: 800px) { ... }
      desktop: `${breakpoints.tablet}px`,
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
}
export default config
