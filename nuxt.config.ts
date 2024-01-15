import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import path from 'path'
export default defineNuxtConfig({
  //...
  alias: {
    '@components': path.resolve(__dirname, './components'),
    '@stores': path.resolve(__dirname, './stores'),
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  // ssr: false,
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  
})