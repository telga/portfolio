<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8 lg:p-12 flex items-center justify-center">
    <div class="max-w-md w-full bg-bg-secondary rounded-lg shadow-lg overflow-hidden animate-fade-in-up relative">
      <!-- Theme Toggle Button -->
      <div class="absolute top-2 left-2 z-10">
        <button @click="toggleTheme" :class="[
          'theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none',
          currentTheme === 'solarized' 
            ? 'bg-solarized-base03 text-solarized-base1 border-solarized-base1' 
            : 'bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1',
          'hover:border-accent active:border-accent-secondary'
        ]">
          <svg v-if="currentTheme === 'solarized'" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.5 14.5L8 18l3.5-3.5L15 18l4.5-4.5M4 10l4-4 4 4 4-4 4 4" />
          </svg>
          <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </button>
      </div>

      <!-- Language switcher -->
      <div class="absolute top-2 right-2 z-10">
        <button 
          @click="toggleLanguage" 
          :class="[
            'theme-toggle-btn p-1 ring-2 hover:ring-accent-hover focus:ring-accent rounded-full transition-colors duration-300 focus:outline-none',
            currentTheme === 'solarized' 
              ? 'bg-solarized-base03 text-solarized-base1 border-solarized-base1' 
              : 'bg-nord-polar-night-1 text-nord-snow-storm-1 border-nord-snow-storm-1',
            'hover:border-accent active:border-accent-secondary'
          ]"
        >
          <span class="w-5 h-5 flex items-center justify-center font-bold text-xs">
            {{ currentLanguage === 'en' ? 'jp' : 'en' }}
          </span>
        </button>
      </div>

      <div class="flex flex-col items-center justify-center h-full p-8">
        <!-- Portrait image -->
        <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-accent animate-portrait mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <img :src="portraitUrl" alt="Portrait" class="w-full h-full object-cover" />
        </div>

        <div class="space-y-6 animate-content text-center">
          <h1 class="text-4xl font-bold text-accent animate-text-slide-up">{{ $t('businessCard.name') }}</h1>
          <div class="mt-8">
            <!-- Divider -->
            <div class="flex items-center justify-center mb-6">
              <div class="border-t border-accent w-1/4"></div>
              <span class="text-accent mx-4 text-sm font-medium">{{ $t('businessCard.contact') }}</span>
              <div class="border-t border-accent w-1/4"></div>
            </div>

            <!-- Contact Items -->
            <div class="flex flex-col items-center space-y-4">
              <div v-for="(item, index) in contactItems" 
                   :key="index" 
                   class="relative py-2 group"
              >
                <div class="relative">
                  <template v-if="!item.isEmail">
                    <a 
                      :href="item.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-sm text-text-primary group-hover:text-accent transition-colors duration-300 cursor-pointer"
                    >
                      {{ item.text }}
                    </a>
                  </template>
                  <template v-else>
                    <span 
                      @click="copyEmail"
                      class="text-sm text-text-primary group-hover:text-accent transition-colors duration-300 cursor-pointer"
                    >
                      {{ item.text }}
                    </span>
                  </template>
                  <span 
                    class="absolute -bottom-1 left-0 border-b-2 border-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    :style="{ width: '100%' }"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ToastNotification :show="showToast" message="Email address copied" />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from '@/utils/useTheme'
import { useLanguageSwitcher } from '@/utils/useLanguageSwitcher'
import { useI18n } from 'vue-i18n'
import { CONTACT_EMAIL } from '@/utils/constants'
import ToastNotification from '@/components/ToastNotification.vue'

const { currentTheme, toggleTheme } = useTheme()
const { currentLanguage, toggleLanguage } = useLanguageSwitcher()
const { t } = useI18n()
const email = CONTACT_EMAIL

const portraitUrl = ref('/images/userpic.png')

const copyStatus = ref('Copy email')
const showToast = ref(false)

const contactItems = computed(() => [
  { text: email, href: `mailto:${email}`, isEmail: true },
  { text: t('businessCard.website'), href: 'https://brianguyen.works/', isEmail: false },
])

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
    copyStatus.value = 'Copied!'
    showToast.value = true
    setTimeout(() => {
      copyStatus.value = 'Copy email'
      showToast.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email:', err)
    copyStatus.value = 'Failed to copy'
  }
}
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textSlideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

.animate-text-slide-up {
  animation: textSlideUp 0.5s ease-out forwards;
}

.animation-delay-100 {
  animation-delay: 0.1s;
}

.animate-portrait {
  animation: fadeInUp 0.5s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-content > * {
  opacity: 0;
  animation: fadeInUp 0.5s ease-out forwards;
  animation-delay: calc(var(--animation-order) * 0.1s);
}

@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

.group:hover .border-b-2 {
  animation: blink 1s ease-in-out infinite;
}

.group:not(:hover) .border-b-2 {
  animation: none;
}

.flag-icon {
  font-size: 1.2rem; /* Adjust size as needed */
  line-height: 1;
}

.min-h-screen {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 3rem;
}

@media (min-width: 1024px) {
  .min-h-screen {
    align-items: flex-start;
  }
}
</style>
