import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const babelConfig = {
  presets: ['@babel/preset-react'],
};

export default defineConfig({
  plugins: [react(babelConfig)],
  server: {
    fs: {
      strict: false,
    },
    middleware: (req, res, next) => {
      if (req.originalUrl.endsWith('.jsx')) {
        res.type('application/javascript');
      }
      next();
    },
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'], // Ajoutez ici d'autres modules externes si nécessaire
    },
  },
});

