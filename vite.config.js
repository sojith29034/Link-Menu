import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
          logLevel: 'debug',
          rewrite: (path) => path.replace(/^\/api/, ''),
          console.log('Backend URL:', env.VITE_BACKEND_URL);
        }
      }
    }
  }
})
