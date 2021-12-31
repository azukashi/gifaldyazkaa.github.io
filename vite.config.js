import { defineConfig } from 'vite';
import { createRequire } from 'module';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import { svelte } from '@sveltejs/vite-plugin-svelte';
const require = createRequire(import.meta.url);
const manifest = require('./manifest.json');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    pwa({
      strategies: 'injectManifest',
      srcDir: '',
      filename: 'service-worker.js',
      manifest,
    }),
  ],
});
