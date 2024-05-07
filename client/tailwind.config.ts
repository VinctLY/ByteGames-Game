import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["selector", "[data-mode='dark']"],
	theme: {
		extend: {
			colors: {
				primary: "#2cc2b2",
				dark: "#222831",
				darker: "#171b21",
				light: "#EEEEEE",
			},
		},
	},
	plugins: [],
};
export default config;
