import { defineConfig } from 'vite';
import { resolve, join } from 'path';
import { copyFileSync, writeFileSync } from 'fs';

export default defineConfig(({ command }) => ({
  root: '.',
  publicDir: command === 'serve' ? 'public' : false,
  base: './',
  server: {
    port: 5173,
    open: '/',
  },
  build: {
    outDir: 'preview-dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: command === 'build'
    ? [{
        name: 'pages-static',
        closeBundle() {
          copyFileSync('public/leaflet.css', join('preview-dist', 'leaflet.css'));
          writeFileSync(join('preview-dist', '.nojekyll'), '');
        },
      }]
    : [],
}));
