import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuration Babel pour le support JSX
const babelConfig = {
  presets: ['@babel/preset-react'],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      ...babelConfig,
    }),
  ],
  server: {
    fs: {
      // permet d'éviter les erreurs liées à l'extension par défaut ".jsx"
      strict: false,
    },
    middleware: (req, res, next) => {
      // Change le type MIME uniquement pour les fichiers .js et .jsx
      if (req.originalUrl.endsWith('.js') || req.originalUrl.endsWith('.jsx')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
      next();
    },
  },
});

