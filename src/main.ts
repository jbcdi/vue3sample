import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@fontsource-variable/inter'

import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

import type { PluginOptions } from 'vue-toastification';
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: { defaultTheme: 'dark' }
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
app.use(vuetify)

const options: PluginOptions = {
  position: POSITION.BOTTOM_CENTER,
  transition: 'Vue-Toastification__fade'
}
app.use(Toast, options)

app.use(pinia)
router.isReady().then(() => {
  app.mount('#app')
})
