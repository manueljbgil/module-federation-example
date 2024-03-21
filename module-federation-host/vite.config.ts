import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [federation({
    name: 'host-app',
    remotes: {
        //add remote here
    },
    shared: ['react']
})],
})
