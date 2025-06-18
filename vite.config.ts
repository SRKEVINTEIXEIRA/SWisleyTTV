import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SWisleyTTV/'     // <-- cuidado com a barra inicial e final
})