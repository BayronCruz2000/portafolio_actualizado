import { defineConfig } from 'vite'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
  base: './',
  plugins: [purgecss()],
  css: {
    preprocessorOptions: {
      less: {}
    }
  }
})


