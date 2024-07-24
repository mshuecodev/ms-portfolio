import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{ts,tsx}", "./content/**/*.mdx", "./public/**/*.svg"],
	theme: {
		extend: {
			colors: {
				gradientStart: "#43cea2",
				gradientEnd: "#185a9d",
				darkBlue: "#185a9d",
				lightBlue: "#2A54F5",
				lightGreen: "#33E5BB"
			},
			fontFamily: {
				catamaran: ["Catamaran", "sans-serif"]
			}
		}
	},
	plugins: [typography]
}
export default config
