import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
	// Enable Vue to support Vue components.
	site: 'https://fereria.github.io',
	base: '/astro_docs',	
	outDir: "./docs",
	integrations: [vue()],
});
