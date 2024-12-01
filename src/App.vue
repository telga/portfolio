<template>
  <div id="app" class="min-h-screen bg-bg-primary">
    <Header v-if="!$route.meta.hideHeaderFooter" />
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
    <Footer v-if="!$route.meta.hideHeaderFooter" />
  </div>
</template>

<script>
import { onMounted, onBeforeMount } from 'vue'
import Header from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'
import { useTheme } from '@/utils/useTheme'
import 'vue/dist/vue.esm-bundler';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    const { applyStoredTheme } = useTheme()

    onBeforeMount(() => {
      applyStoredTheme()
    })

    onMounted(() => {
      // Scroll to top on page refresh
      if (performance.navigation.type === 1) { // Check if it's a refresh
        window.scrollTo(0, 0)
      }
      
      setFavicon()
      removeJsLoading()
    })

    const setFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
      link.type = 'image/png'
      link.rel = 'shortcut icon'
      link.href = require('/public/images/userpic.png')
      document.getElementsByTagName('head')[0].appendChild(link)
    }

    const removeJsLoading = () => {
      // Remove js-loading class after a short delay to ensure styles are applied
      setTimeout(() => {
        document.documentElement.classList.remove('js-loading');
      }, 0);
    }

    return {}
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

html.light {
  background-color: #ffffff;
  color: #000000;
}

html.dark {
  background-color: #1a202c;
  color: #ffffff;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Toast Container */
.site-toast-container {
  --toastify-color-light: var(--bg-secondary);
  --toastify-color-dark: var(--bg-secondary);
  --toastify-text-color-light: var(--text-primary);
  --toastify-text-color-dark: var(--text-primary);
}

/* Individual Toast */
.site-toast {
  font-family: inherit !important;
  font-size: 0.875rem !important;
  padding: 8px 12px !important;
  min-height: unset !important;
  border: 1px solid var(--accent) !important;
  background: var(--bg-secondary) !important;
  color: var(--text-primary) !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
}

/* Close Button */
.site-toast .Vue-Toastification__close-button {
  color: var(--text-secondary) !important;
  opacity: 0.7;
}

.site-toast .Vue-Toastification__close-button:hover {
  opacity: 1;
}

/* Toast Animation */
.toast-enter-active {
  transition: all 0.2s ease-out;
}

.toast-leave-active {
  transition: all 0.2s ease-in;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
