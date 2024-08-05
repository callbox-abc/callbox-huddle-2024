import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		alias: {
			$api: 'src/api',
			$functions: 'src/functions',
			$store: 'src/store',
			$styles: 'src/styles',
			$actions: 'src/actions'
		}
	},
	preprocess: sveltePreprocess({})
};

export default config;
