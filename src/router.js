import { createRouter, createWebHistory } from 'vue-router'
import Gear from './views/GearPage.vue'
import BusinessCard from './views/BusinessCard.vue'
import HomeAbout from './views/HomeAbout.vue'
import HomeV2 from './views/v2/HomeV2.vue'
import GalleryPage from './views/GalleryPage.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import jp from './locales/jp.json'

// Create i18n instance with the same configuration as main.js
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('userLanguage') || 'en',
  fallbackLocale: 'en',
  messages: { en, jp }
})

const routes = [
  {
    path: '/', 
    component: HomeAbout,
    meta: { titleKey: 'pageTitles.home' }
  },
  { 
    path: '/GearPage', 
    component: Gear,
    meta: { titleKey: 'pageTitles.gear' }
  },
  { 
    path: '/BusinessCard', 
    component: BusinessCard,
    meta: { 
      hideHeaderFooter: true,
      titleKey: 'pageTitles.businessCard'
    },
    redirect: '/'
  },
  {
    path: '/GalleryPage',
    component: GalleryPage,
    meta: { titleKey: 'pageTitles.gallery' }
  },
  {
    path: '/v2',
    name: 'HomeV2',
    component: HomeV2,
    meta: { 
      hideHeaderFooter: true,
      titleKey: 'pageTitles.v2'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Watch for localStorage changes
window.addEventListener('storage', (event) => {
  if (event.key === 'userLanguage') {
    i18n.global.locale.value = event.newValue || 'en'
    // Update title for current route
    const currentRoute = router.currentRoute.value
    if (currentRoute.meta.titleKey) {
      document.title = i18n.global.t(currentRoute.meta.titleKey)
    }
  }
})

router.beforeEach((to, from, next) => {
  try {
    const titleKey = to.meta.titleKey
    
    if (titleKey) {
      // Get current locale from localStorage
      const currentLocale = localStorage.getItem('userLanguage') || 'en'
      i18n.global.locale.value = currentLocale
      
      // Wrap the translation in a try-catch to silently handle any translation errors
      try {
        const translatedTitle = i18n.global.t(titleKey)
        document.title = translatedTitle
      } catch {
        // Fallback to default title without logging the error
        document.title = 'BN'
      }
    } else {
      document.title = 'BN'
    }
  } catch {
    // Remove error logging and silently set default title
    document.title = 'BN'
  }
  next()
})

export default router