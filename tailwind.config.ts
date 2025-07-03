
import type { Config } from "tailwindcss";
import { allColors } from "./src/config/tailwind/colors";
import { fontFamilies } from "./src/config/tailwind/typography";
import { keyframes, animations } from "./src/config/tailwind/animations";
import { borderRadius } from "./src/config/tailwind/borderRadius";
import { containerConfig } from "./src/config/tailwind/container";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: containerConfig,
		extend: {
			fontFamily: fontFamilies,
			colors: allColors,
			borderRadius,
			keyframes,
			animation: animations
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
