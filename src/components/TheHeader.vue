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
      <button @click.stop="toggleMenu" class="lg:hidden text-text-primary hover:text-accent p-2 font-bold">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Desktop menu (centered for large screens) -->
      <div class="hidden lg:flex flex-grow justify-center">
        <div class="flex space-x-4 items-center ml-24 font-bold">
          <router-link 
            v-for="item in navItems" 
            :key="item.to" 
            :to="item.to" 
            v-show="!item.desktopOnly || (item.desktopOnly && isLargeScreen)"
            class="text-text-primary hover:text-accent-hover text-base transition-colors duration-200 relative group px-2 py-1"
            :class="{ 'text-accent-secondary': isActiveRoute(item.to) }"
            @click="item.to.hash ? handleNavigation($event, item.to) : null"
          >
            <span class="relative z-10"
              :class="{ 'text-[var(--accent-secondary)]': isActiveRoute(item.to) }"
            >{{ $t(item.label) }}</span>
            <span 
              class="absolute inset-0 border-b-2 transition-colors duration-200"
              :class="{ 
                'border-accent-hover': isActiveRoute(item.to),
                'border-accent opacity-0 group-hover:opacity-100': !isActiveRoute(item.to)
              }"
            ></span>
          </router-link>
        </div>
      </div>

      <!-- Theme and Language toggles -->
      <div class="hidden lg:flex items-center space-x-4">
        <!-- Theme Toggle Button -->
        <div class="flex items-center justify-between">
          <label class="relative inline-block w-[60px] h-[30px]">
            <input 
              type="checkbox" 
              :checked="currentTheme !== 'nord'"
              @change="toggleTheme"
              class="opacity-0 w-0 h-0"
            >
            <span class="absolute cursor-pointer inset-0 bg-[var(--bg-primary)] transition-all duration-300 flex items-center justify-between px-1 rounded-md">
              <oh-vue-icon
                name="la-mountain-solid"
                class="text-text-primary z-[1] ml-1"
                :scale="0.8"
              />
              <oh-vue-icon
                name="wi-solar-eclipse"
                class="text-text-primary z-[1] mr-1"
                :scale="0.8"
              />
              <span 
                class="absolute w-6 h-6 left-[3px] bottom-[3px] bg-[var(--accent-secondary)] transition-transform duration-300 rounded-md z-[2] flex items-center justify-center"
                :class="{ 'translate-x-[30px]': currentTheme !== 'nord' }"
              >
                <oh-vue-icon
                  :name="currentTheme === 'nord' ? 'la-mountain-solid' : 'wi-solar-eclipse'"
                  class="text-bg-secondary"
                  :scale="0.7"
                />
              </span>
            </span>
          </label>
        </div>

        <!-- Language Toggle Button -->
        <div class="flex items-center justify-between">
          <label class="relative inline-block w-[60px] h-[30px]">
            <input 
              type="checkbox" 
              :checked="currentLanguage === 'jp'"
              @change="toggleLanguageWithTransition"
              class="opacity-0 w-0 h-0"
            >
            <span class="absolute cursor-pointer inset-0 bg-[var(--bg-primary)] transition-all duration-300 flex items-center justify-between px-1 rounded-md">
              <span class="text-text-primary z-[1] ml-1 text-sm font-bold">EN</span>
              <span class="text-text-primary z-[1] mr-1 text-sm font-bold">JP</span>
              <span 
                class="absolute w-6 h-6 left-[3px] bottom-[3px] bg-[var(--accent-secondary)] transition-transform duration-300 rounded-md z-[2] flex items-center justify-center"
                :class="{ 'translate-x-[30px]': currentLanguage === 'jp' }"
              >
                <span class="text-bg-secondary text-sm font-bold">{{ currentLanguage === 'en' ? 'EN' : 'JP' }}</span>
              </span>
            </span>
          </label>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div class="lg:hidden">
      <!-- Overlay transition -->
      <transition
        enter-active-class="transition-opacity duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="isMenuOpen"
          class="fixed inset-0 top-16 bg-black bg-opacity-50 z-40"
          @click="closeMenu"
        ></div>
      </transition>

      <!-- Menu content transition -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-full"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-full"
      >
        <div v-if="isMenuOpen" class="fixed inset-0 top-16 z-40">
          <!-- Menu content -->
          <div class="relative bg-bg-secondary p-4">
            <div class="container mx-auto space-y-4">
              <!-- Navigation Links -->
              <div class="bg-bg-primary rounded-lg shadow-md p-4">
                <div class="space-y-1">
                  <router-link 
                    v-for="item in navItems.filter(item => !item.desktopOnly)" 
                    :key="item.to" 
                    :to="item.to" 
                    class="block text-text-primary hover:text-accent transition-colors duration-200 px-3 py-2 rounded-md hover:bg-bg-secondary"
                    :class="{ 
                      'bg-bg-secondary': isActiveRoute(item.to),
                      'active-mobile-link': isActiveRoute(item.to)
                    }"
                    @click="item.to.hash ? handleNavigation($event, item.to) : closeMenu()"
                  >
                    {{ $t(item.label) }}
                  </router-link>
                </div>
              </div>

              <!-- Theme and Language Controls -->
              <div class="bg-bg-primary rounded-lg shadow-md p-4">
                <div class="flex justify-between items-center">
                  <!-- Theme Toggle Button (Mobile) -->
                  <div class="flex items-center justify-between">
                    <label class="relative inline-block w-[60px] h-[30px]">
                      <input 
                        type="checkbox" 
                        :checked="currentTheme !== 'nord'"
                        @change="toggleTheme"
                        class="opacity-0 w-0 h-0"
                      >
                      <span class="absolute cursor-pointer inset-0 bg-[var(--bg-secondary)] transition-all duration-300 flex items-center justify-between px-1 rounded-md">
                        <oh-vue-icon
                          name="la-mountain-solid"
                          class="text-text-primary z-[1] ml-1"
                          :scale="0.8"
                        />
                        <oh-vue-icon
                          name="wi-solar-eclipse"
                          class="text-text-primary z-[1] mr-1"
                          :scale="0.8"
                        />
                        <span 
                          class="absolute w-6 h-6 left-[3px] bottom-[3px] bg-[var(--accent-secondary)] transition-transform duration-300 rounded-md z-[2] flex items-center justify-center"
                          :class="{ 'translate-x-[30px]': currentTheme !== 'nord' }"
                        >
                          <oh-vue-icon
                            :name="currentTheme === 'nord' ? 'la-mountain-solid' : 'wi-solar-eclipse'"
                            class="text-bg-secondary"
                            :scale="0.7"
                          />
                        </span>
                      </span>
                    </label>
                  </div>

                  <!-- Language Toggle Button (Mobile) -->
                  <div class="flex items-center justify-between">
                    <label class="relative inline-block w-[60px] h-[30px]">
                      <input 
                        type="checkbox" 
                        :checked="currentLanguage === 'jp'"
                        @change="toggleLanguageWithTransition"
                        class="opacity-0 w-0 h-0"
                      >
                      <span class="absolute cursor-pointer inset-0 bg-[var(--bg-secondary)] transition-all duration-300 flex items-center justify-between px-1 rounded-md">
                        <span class="text-text-primary z-[1] ml-1 text-sm font-bold">EN</span>
                        <span class="text-text-primary z-[1] mr-1 text-sm font-bold">JP</span>
                        <span 
                          class="absolute w-6 h-6 left-[3px] bottom-[3px] bg-[var(--accent-secondary)] transition-transform duration-300 rounded-md z-[2] flex items-center justify-center"
                          :class="{ 'translate-x-[30px]': currentLanguage === 'jp' }"
                        >
                          <span class="text-bg-secondary text-sm font-bold">{{ currentLanguage === 'en' ? 'EN' : 'JP' }}</span>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from '@/utils/useTheme'
import { useLanguageSwitcher } from '@/utils/useLanguageSwitcher'
import LoadingScreen from '@/components/LoadingScreen.vue'
import { showLoading } from '@/utils/loadingState'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { WiSolarEclipse, LaMountainSolid, LaGlobeAmericasSolid } from 'oh-vue-icons/icons'

// Import the logo image
import nordLogo from '/public/images/nordlogo.png'
import solarizedLogo from '/public/images/solarizedlogo.png'

// Register the icons (add this after imports)
addIcons(WiSolarEclipse, LaMountainSolid, LaGlobeAmericasSolid)

const route = useRoute()
const router = useRouter()
const { currentTheme, toggleTheme } = useTheme()
const { currentLanguage, toggleLanguage } = useLanguageSwitcher()

const isMenuOpen = ref(false)

const navItems = [
  { to: '/', label: 'nav.home' },
  //{ to: '/AboutPage', label: 'nav.about' },
  { to: { path: '/', hash: '#projects' }, label: 'nav.experiences' },
  { to: '/GearPage', label: 'nav.gear' },
  { to: '/v2', label: 'nav.v2', desktopOnly: true }
]

const isActiveRoute = (to) => {
  // Never show active state for experiences link
  if (typeof to === 'object' && to.hash === '#projects') {
    return false
  }
  
  // Check if we're on home page or gear page
  if (typeof to === 'string') {
    if ((to === '/' && route.path === '/') || (to === '/GearPage' && route.path === '/GearPage')) {
      return true
    }
    return route.path === to
  }
  return route.path === to.path
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

const openMenu = () => {
  isMenuOpen.value = true
  document.body.classList.add('overflow-hidden')
}

const toggleMenu = () => {
  if (isMenuOpen.value) {
    closeMenu()
  } else {
    openMenu()
  }
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

// Add viewport width tracking
const viewportWidth = ref(window.innerWidth)

// Update viewport width on resize
const handleResize = () => {
  viewportWidth.value = window.innerWidth
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
  window.removeEventListener('resize', handleResize)
})

// Computed property to check if screen is large enough
const isLargeScreen = computed(() => viewportWidth.value >= 1024)

// Create a computed property for the logo
const currentLogo = computed(() => {
  return currentTheme.value === 'nord' ? nordLogo : solarizedLogo
})

// Add this method to handle hash navigation
const handleNavigation = (event, to) => {
  event.preventDefault()
  
  const scrollToTarget = (targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      // Add small delay for mobile to ensure menu is closed
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  // If we're not already on the home page, navigate there first
  if (route.path !== '/') {
    router.push('/').then(() => {
      nextTick(() => {
        scrollToTarget(to.hash.substring(1))
      })
    })
  } else {
    scrollToTarget(to.hash.substring(1))
  }
  
  // Ensure the URL stays clean without the hash
  if (window.history.pushState) {
    window.history.pushState('', '/', '/')
  }
  
  // Close mobile menu if open
  closeMenu()
}

// Add this near your other watch statements
watch(
  () => route.hash,
  (newHash) => {
    if (newHash) {
      // Clean the URL without affecting scroll position
      window.history.replaceState('', '', route.path)
    }
  },
  { immediate: true } // This ensures it runs on initial load
)
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
  color: var(--accent-secondary);
}

.lang-toggle-container {
  margin-left: 1rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

input:checked + .slider {
  background-color: var(--accent);
}

input:checked + .slider:before {
  transform: translateX(30px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.icon-light, .icon-dark {
  color: var(--text-primary);
  z-index: 1;
}

.icon-light {
  margin-left: 4px;
}

.icon-dark {
  margin-right: 4px;
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
