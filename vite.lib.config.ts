import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/jim-gta-map.js'),
      name: 'JimGtaMap',
      formats: ['iife'],
      fileName: () => 'jim-gta-map.js',
    },
    outDir: 'public',
    emptyOutDir: false,
  },
});
