import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'fass',
    https: {
      cert: 'frontend.cer',
      key: 'frontend.key',
    },
    port: 5173, // Puerto para el servidor
  },
  base: './',
});
