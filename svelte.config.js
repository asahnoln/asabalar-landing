import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// Static adapter
		// adapter: adapter({
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null
		// })

		// Node adapter
		adapter: adapter({
			out: 'build',
			precompress: false
			// env: {
			// 	host: 'localhost',
			// 	port: '80'
			// }
		})
	}
};

export default config;
