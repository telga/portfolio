<template>
  <div class="min-h-screen bg-bg-primary text-text-primary flex flex-col justify-center items-center p-8">
    <div class="max-w-3xl w-full">
      <h1 class="text-5xl font-bold mb-2 text-accent">{{ $t('home.name') }}</h1>
      <h2 class="text-3xl font-light mb-6 text-text-secondary">{{ $t('home.title') }}</h2>
      <p class="text-xl mb-8">{{ $t('home.intro') }}</p>
      <div class="flex space-x-4 mb-12">
        <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
           class="text-text-secondary hover:text-accent transition-colors">
          <component :is="link.icon" class="w-6 h-6" />
        </a>
      </div>
      <router-link to="/ProjectsPage" class="bg-accent text-bg-primary px-6 py-3 rounded-full hover:bg-accent-hover transition-colors text-sm sm:text-base">
        {{ $t('home.viewProjects') }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { GlobeAltIcon, UserIcon, CodeBracketIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/telga', icon: GlobeAltIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/bnguy23', icon: UserIcon },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: CodeBracketIcon },
  { name: 'Email', url: 'mailto:briann2305@gmail.com', icon: EnvelopeIcon },
]
</script>
