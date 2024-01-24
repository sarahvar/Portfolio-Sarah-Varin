import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const babelConfig = {
  presets: ['@babel/preset-react'],
};

export default defineConfig({
  plugins: [
    react({
      ...babelConfig,
    }),
  ],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});
