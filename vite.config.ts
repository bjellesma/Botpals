import { defineConfig } from 'vite'
import dotenv from "dotenv";

// import plugin that we'll use
import react from '@vitejs/plugin-react'
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    // create a proxy so that anything in the fetch api that say it's going to /api
    // will go to the base url /api
    proxy: {
      '/api': {
        target:"https://bjellesma.pythonanywhere.com/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})
