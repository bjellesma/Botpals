import { defineConfig } from 'vite'
// import plugin that we'll use
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    // create a proxy so that anything in the fetch api that say it's going to /api
    // will go to the base url /api
    proxy: {
      '/api': {
        target:'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})
