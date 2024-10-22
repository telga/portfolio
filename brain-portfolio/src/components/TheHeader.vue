<template>
  <header class="bg-bg-secondary shadow">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold text-accent">{{ $t('siteName') }}</router-link>
      
      <!-- Mobile menu button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-text-primary hover:text-accent">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <!-- Desktop menu -->
      <div class="hidden md:flex space-x-4">
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

      <!-- Theme and Language toggles -->
      <div class="hidden md:flex items-center space-x-4">
        <!-- Theme Toggle Button -->
        <button @click="toggleTheme" :class="[
          'theme-toggle-btn p-1 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary focus:ring-accent',
          currentTheme === 'nord' ? 'bg-solarized-base03 text-solarized-base1' : 'bg-nord-polar-night-1 text-nord-snow-storm-1'
        ]">
          <svg v-if="currentTheme === 'nord'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4" />
          </svg>
        </button>
        <!-- Language Menu -->
        <Menu as="div" class="relative">
          <MenuButton class="lang-toggle-btn flex items-center text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary focus:ring-accent">
            {{ currentLanguage }}
            <ChevronDownIcon class="ml-1 h-5 w-5 transition-transform duration-300" :class="{ 'rotate-180': open }" aria-hidden="true" />
          </MenuButton>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <MenuItems class="absolute right-0 mt-2 w-40 origin-top-right bg-bg-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-md overflow-hidden">
              <MenuItem v-for="lang in availableLanguages" :key="lang.code" v-slot="{ active }">
                <button 
                  @click="changeLanguage(lang.code)" 
                  :class="[
                    active ? 'bg-accent text-bg-primary' : 'text-text-primary',
                    'block w-full text-left px-4 py-2 text-sm transition-colors duration-150'
                  ]"
                >
                  {{ lang.name }}
                </button>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </nav>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-bg-secondary">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link 
            v-for="item in navItems" 
            :key="item.to" 
            :to="item.to" 
            class="block text-text-primary hover:text-accent text-base transition-colors duration-200 px-2 py-2"
            :class="{ 'active-mobile-link': isActiveRoute(item.to) }"
            @click="isMenuOpen = false"
          >
            {{ $t(item.label) }}
          </router-link>
        </div>
        <div class="px-2 py-3 border-t border-bg-primary flex justify-between items-center">
          <!-- Theme Toggle Button (Mobile) -->
          <button @click="toggleTheme" :class="[
            'theme-toggle-btn p-1 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary focus:ring-accent',
            currentTheme === 'nord' ? 'bg-solarized-base03 text-solarized-base1' : 'bg-nord-polar-night-1 text-nord-snow-storm-1'
          ]">
            <svg v-if="currentTheme === 'nord'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4" />
            </svg>
          </button>
          <!-- Language Menu (Mobile) -->
          <Menu as="div" class="relative">
            <MenuButton class="lang-toggle-btn flex items-center text-text-primary hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-secondary focus:ring-accent">
              {{ currentLanguage }}
              <ChevronDownIcon class="ml-1 h-5 w-5 transition-transform duration-300" :class="{ 'rotate-180': open }" aria-hidden="true" />
            </MenuButton>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <MenuItems class="absolute right-0 mt-2 w-40 origin-top-right bg-bg-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-md overflow-hidden">
                <MenuItem v-for="lang in availableLanguages" :key="lang.code" v-slot="{ active }">
                  <button 
                    @click="changeLanguage(lang.code)" 
                    :class="[
                      active ? 'bg-accent text-bg-primary' : 'text-text-primary',
                      'block w-full text-left px-4 py-2 text-sm transition-colors duration-150'
                    ]"
                  >
                    {{ lang.name }}
                  </button>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'
import { useTheme } from '@/utils/useTheme'

const route = useRoute()
const { locale } = useI18n()
const { currentTheme, toggleTheme } = useTheme()
const open = ref(false)
const isMenuOpen = ref(false)

const navItems = [
  { to: '/', label: 'nav.home' },
  { to: '/AboutPage', label: 'nav.about' },
  { to: '/ProjectsPage', label: 'nav.projects' },
  { to: '/ExperiencesPage', label: 'nav.experiences' },
  { to: '/SkillsPage', label: 'nav.skills' },
  { to: '/ResumePage', label: 'nav.resume' }
]

const isActiveRoute = (path) => {
  return route.path === path || (path !== '/' && route.path.startsWith(path))
}

const availableLanguages = [
  { code: 'en', name: 'english' },
  { code: 'jp', name: '日本語' },
]

const currentLanguage = computed(() => {
  return availableLanguages.find(lang => lang.code === locale.value)?.name
})

const changeLanguage = (langCode) => {
  locale.value = langCode
}
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
</style>
