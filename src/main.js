import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import en from './locales/en.json'
import jp from './locales/jp.json'

import './assets/themes.css'
import './assets/tailwind.css'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, jp }
})


try {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.use(i18n)
  app.use(Toast, {
    toastClassName: "site-toast",
    containerClassName: "site-toast-container",
    transition: {
      enter: "toast-enter",
      leave: "toast-leave"
    }
  })
  app.mount('#app')
} catch (error) {
  console.error('Error initializing app:', error)
  console.error('Error stack:', error.stack)
}
