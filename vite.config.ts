import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import webfontDownload from 'vite-plugin-webfont-dl';
import { ViteMinifyPlugin as minify } from 'vite-plugin-minify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
    ]),
    minify({}),
    splitVendorChunkPlugin(),
  ],
})