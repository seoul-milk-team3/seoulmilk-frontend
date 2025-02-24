import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // React 플러그인
    react(),
    // tsconfig.json 경로 설정
    tsconfigPaths(),
  ],
});
