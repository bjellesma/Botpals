import { defineConfig } from 'vite'
// import plugin that we'll use
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  }
})
