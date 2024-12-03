<template>
  <footer class="bg-bg-secondary py-4">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <p class="text-text-secondary">{{ $t('footer.copyright') }}</p>
        <div class="flex space-x-4">
          <a v-for="link in socialLinks" 
             :key="link.name" 
             :href="link.url" 
             :class="['text-text-secondary hover:text-accent transition-colors', 
                      { 'cursor-pointer': link.action }]"
             :target="link.url ? '_blank' : undefined"
             :rel="link.url ? 'noopener noreferrer' : undefined"
             @click="link.action && link.action()">
            <component :is="link.icon" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { CodeBracketIcon, UserIcon, CameraIcon, EnvelopeIcon, CloudIcon } from '@heroicons/vue/24/outline'
import { useToast } from 'vue-toastification'

const toast = useToast()

const copyEmail = () => {
  navigator.clipboard.writeText('briann2305@gmail.com')
  toast.success('Email copied to clipboard!', {
    toastClassName: 'site-toast',
    containerClassName: 'site-toast-container',
    position: "bottom-right",
    timeout: 2000,
    hideProgressBar: true
  })
}

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/telga', icon: CodeBracketIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/bnguy23', icon: UserIcon },
  { name: 'Instagram', url: 'https://instagram.com/br.ainn', icon: CameraIcon },
  { name: 'Bluesky', url: 'https://bsky.app/profile/braighn.bsky.social', icon: CloudIcon },
  { name: 'Email', action: copyEmail, icon: EnvelopeIcon },
]
</script>