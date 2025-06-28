export default defineConfig({
  base: '/portafolio_actualizado/',
  plugins: [purgecss()],
  css: {
    preprocessorOptions: {
      less: {}
    }
  }
})



