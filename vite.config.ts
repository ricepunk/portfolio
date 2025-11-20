import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	base: command === "serve" ? "/" : "/portfolio/",

	server: {
		host: "::",
		port: 8080,
	},

	plugins: [react()],

	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
}));
