<template>
  <LoadingScreen />
  <header class="bg-bg-secondary shadow">
    <nav class="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between lg:flex-nowrap">
      <!-- Logo -->
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img :src="currentLogo" alt="Logo" class="h-8 w-auto max-w-[150px]" />
        </router-link>
      </div>
      
      <!-- Mobile menu button -->
      <button @click.stop="isMenuOpen = !isMenuOpen" class="lg:hidden text-text-primary hover:text-accent p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Desktop menu (centered for large screens) -->
      <div class="hidden lg:flex flex-grow justify-center">
        <div class="flex space-x-4">
          <router-link 
            v-for="item in navItems" 
            :key="item.to" 
            :to="item.to" 
            class="text-text-primary hover:text-accent text-base transition-colors duration-200 relative group px-2 py-1"
            :class="{ 'text-accent-secondary': $route.path === item.to }"
          >
            <span class="relative z-10">{{ $t(item.label) }}</span>
            <span 
              class="absolute inset-0 border-b-2 transition-colors duration-200"
              :class="{ 
                'border-accent-hover': $route.path === item.to,
                'border-accent opacity-0 group-hover:opacity-100': $route.path !== item.to 
              }"
            ></span>
          </router-link>
        </div>
      </div>

      <!-- Theme and Language toggles -->
      <div class="hidden lg:flex items-center space-x-4">
        <!-- Theme Toggle Button -->
        <button @click="toggleTheme" :class="[
          'theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none',
          currentTheme === 'nord' 
            ? 'bg-solarized-base03 text-solarized-base1 border-solarized-base1' 
            : 'bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1',
          'hover:border-accent active:border-accent-secondary'
        ]">
          <svg v-if="currentTheme === 'nord'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4" />
          </svg>
        </button>
        <!-- Language switcher -->
        <button 
        @click="toggleLanguageWithTransition" 
          class="flex items-center text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none ring-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary hover:ring-accent-hover focus:ring-accent rounded-full px-3 py-1 bg-bg-primary"
        >
          <span class="font-medium">{{ currentLanguage === 'en' ? '日本語' : 'english' }}</span>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div v-if="isMenuOpen" class="lg:hidden bg-bg-secondary">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link 
            v-for="item in navItems" 
            :key="item.to" 
            :to="item.to" 
            class="block text-text-primary hover:text-accent text-base transition-colors duration-200 px-2 py-2"
            :class="{ 'active-mobile-link': isActiveRoute(item.to) }"
            @click="closeMenu"
          >
            {{ $t(item.label) }}
          </router-link>
        </div>
        <div class="px-2 py-3 border-t border-bg-primary flex justify-between items-center">
          <!-- Theme Toggle Button (Mobile) -->
          <button @click="toggleTheme" :class="[
            'theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none',
            currentTheme === 'nord' 
              ? 'bg-solarized-base03 text-solarized-base1 border-solarized-base1' 
              : 'bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1',
            'hover:border-accent active:border-accent-secondary'
          ]">
            <svg v-if="currentTheme === 'nord'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4" />
            </svg>
          </button>
          <!-- Language Menu (Mobile) -->
          <button 
          @click="toggleLanguageWithTransition" 
            class="flex items-center text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none ring-2 focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary hover:ring-accent-hover focus:ring-accent rounded-full px-3 py-1 bg-bg-primary"
          >
            <span class="font-medium">{{ currentLanguage === 'en' ? '日本語' : 'english' }}</span>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/utils/useTheme'
import { useLanguageSwitcher } from '@/utils/useLanguageSwitcher'
import LoadingScreen from '@/components/LoadingScreen.vue'
import { showLoading } from '@/utils/loadingState'

// Import the logo image
import nordLogo from '/public/images/nordlogo.png'
import solarizedLogo from '/public/images/solarizedlogo.png'

const route = useRoute()
const { currentTheme, toggleTheme } = useTheme()
const { currentLanguage, toggleLanguage } = useLanguageSwitcher()

const isMenuOpen = ref(false)

const navItems = [
  { to: '/', label: 'nav.home' },
  //{ to: '/AboutPage', label: 'nav.about' },
  { to: '/ProjectsPage', label: 'nav.projects' },
  { to: '/ExperiencesPage', label: 'nav.experiences' },
  { to: '/GearPage', label: 'nav.gear' }
]

const isActiveRoute = (path) => {
  return route.path === path || (path !== '/' && route.path.startsWith(path))
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleLanguageWithTransition = () => {
  closeMenu()
  showLoading()
  setTimeout(() => {
    toggleLanguage()
    // Store the current theme in localStorage before reloading
    localStorage.setItem('lastTheme', currentTheme.value)
    // Add a class to the body element
    document.body.classList.add('page-reload')
    setTimeout(() => {
      window.location.reload()
    }, 300)
  }, 200)
}

// Close menu when route changes
watch(() => route.path, closeMenu)

// Close menu when clicking outside
const handleOutsideClick = (event) => {
  if (isMenuOpen.value && !event.target.closest('header')) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})

// Create a computed property for the logo
const currentLogo = computed(() => {
  return currentTheme.value === 'nord' ? nordLogo : solarizedLogo
})
</script>

<style scoped>
@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.group:hover .border-accent {
  animation: blink 1s ease-in-out infinite;
}

.active-mobile-link {
  color: var(--accent);
}

.lang-toggle-container {
  margin-left: 1rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-secondary);
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: var(--text-primary);
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--accent);
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* Add this new style for the ガキ text */
.border-accent {
  border-color: var(--accent);
}

/* Add this new style */
body {
  transition: background-color 0.3s ease;
}

body.page-reload {
  background-color: var(--bg-primary);
}

/* This style should be in a global CSS file */
:root {
  color-scheme: light dark;
}
</style>
