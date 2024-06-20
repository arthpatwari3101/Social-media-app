import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false
    },
    proxy: {
			"/api": {
				target: "http://localhost:5015",
				changeOrigin: true,
				secure: false,
			},
		},
  },
  resolve: {
    alias: {
      '@chakra-ui/color-mode': path.resolve(__dirname, 'node_modules/@chakra-ui/color-mode')
    }
  },
  build: {
    rollupOptions: {
      external: ['@chakra-ui/utils']
    }
  },
});
