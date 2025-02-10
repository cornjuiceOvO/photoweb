import { defineConfig } from 'vite';

export default defineConfig({
  base: '/photoweb/', 
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});