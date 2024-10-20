import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true, // Включите глобальные функции для тестирования
    environment: 'jsdom', // Или 'node' в зависимости от ваших тестов
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
