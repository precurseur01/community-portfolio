import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Permet d'accéder au projet depuis d'autres appareils du réseau
    port: 5173,  // Tu peux changer le port si nécessaire
  },
})
