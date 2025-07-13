import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: '.',
  server: {
    open: '/index.html',
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
