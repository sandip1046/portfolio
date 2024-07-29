import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {      //this lets us use the camelcase in all our css modules
    modules: {
      localsConvention:'camelCase'
    }
  }
})
