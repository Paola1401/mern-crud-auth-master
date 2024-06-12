//Definie la configuración 
import { defineConfig } from 'vite'
//permite el uso de React 
import react from '@vitejs/plugin-react'

//Exporta la configuración
// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [react()]
})
