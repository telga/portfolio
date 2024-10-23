<template>
  <footer class="bg-bg-secondary py-4">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <p class="text-text-secondary">© {{ currentYear }} {{ $t('footer.copyright') }}</p>
        <div class="flex space-x-4">
          <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
             class="text-text-secondary hover:text-accent transition-colors">
            <component :is="link.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { GlobeAltIcon, UserIcon, CameraIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const currentYear = computed(() => new Date().getFullYear())

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/telga', icon: GlobeAltIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/bnguy23', icon: UserIcon },
  { name: 'Instagram', url: 'https://instagram.com/br.ainn', icon: CameraIcon },
  { name: 'Email', url: 'mailto:briann2305@gmail.com', icon: EnvelopeIcon },
]
</script>
