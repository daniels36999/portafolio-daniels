import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: 'https://daniels36999.github.io/portafolio-daniels',
  base: '/portafolio-daniels/',
})

