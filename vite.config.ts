import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // opcional: força o JSX clássico
      // jsxRuntime: 'classic'
    })
  ],
  base: '/SWisleyTTV/',
})