import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const babelConfig = {
  presets: ['@babel/preset-react'],
};

export default defineConfig({
  plugins: [react(babelConfig)],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
      output: {
        manualChunks: {
          'react-router-dom': ['react-router-dom'],
        },
      },
    },
  },
  server: {
    fs: {
      strict: false,
    },
    middleware: (req, res, next) => {
      if (req.originalUrl.endsWith('.jsx')) {
        res.type('application/javascript; charset=utf-8'); // Ajout de "; charset=utf-8"
      }
      next();
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/sarahvar/Portfolio-Sarah-Varin/' : '/',
});
