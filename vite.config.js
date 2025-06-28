import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
  base: '/portafolio_actualizado/',
  plugins: [purgecss()],
  css: {
    preprocessorOptions: {
      less: {}
    }
  }
})

