// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				about: resolve(__dirname, "about/index.html"),
				contact: resolve(__dirname, "contact/index.html"),
				app: resolve(__dirname, "app/index.html"),
				locations: resolve(__dirname, "locations/index.html"),
				graphic: resolve(__dirname, "graphic/index.html"),
				web: resolve(__dirname, "web/index.html"),
			},
		},
	},
});
