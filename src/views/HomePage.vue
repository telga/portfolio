<template>
  <div class="h-screen bg-bg-primary text-text-primary flex flex-col items-center justify-center p-8">
    <div class="max-w-3xl w-full flex flex-col">
      <div class="mb-auto"></div> <!-- Top spacer -->
      <h1 class="text-4xl sm:text-5xl font-bold mb-2 text-accent animate-slide-in-right">{{ $t('home.name') }}</h1>
      <p class="text-lg sm:text-xl mb-8 animate-slide-in-left">{{ $t('home.intro') }}</p>
      <div class="flex space-x-4 mb-12">
        <a v-for="(link, index) in socialLinks" 
           :key="link.name" 
           :href="link.url" 
           target="_blank" 
           rel="noopener noreferrer"
           class="text-text-secondary hover:text-accent transition-colors hover:scale-110 transform duration-200 animate-slide-in-bottom"
           :style="{ animationDelay: `${index * 100}ms` }">
          <component :is="link.icon" class="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
      <div class="mb-auto mt-16 sm:mt-24"></div> <!-- Bottom spacer with extra margin -->
    </div>
  </div>
</template>

<script setup>
import { GlobeAltIcon, UserIcon, CameraIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/telga', icon: GlobeAltIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/bnguy23', icon: UserIcon },
  { name: 'Instagram', url: 'https://instagram.com/br.ainn', icon: CameraIcon },
  { name: 'Email', url: 'mailto:briann2305@gmail.com', icon: EnvelopeIcon },
]
</script>

<style scoped>
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-in-bottom {
  animation: slideInBottom 0.6s ease-out forwards;
}
</style>
