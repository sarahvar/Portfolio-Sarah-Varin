import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: {
      // Middleware pour définir le type MIME des fichiers .js
      '*.@(js)': (req, res, next) => {
        res.setHeader('Content-Type', 'application/javascript');
        next();
      },
    },
  },
});
