<template>
    <div class="min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8 lg:p-12">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl font-bold text-accent mb-8 sm:mb-12 animate-fade-in-up text-center lg:text-left">{{ $t('about.title') }}</h1>
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div class="lg:w-1/3 animate-fade-in-up" style="animation-delay: 100ms;">
            <div class="flex flex-col items-center lg:items-start">
              <img :src="profileImage" :alt="$t('about.imageAlt')" class="w-48 h-48 object-cover rounded-full shadow-lg">
              <ul class="flex flex-wrap justify-center gap-2 mt-4 w-48">
                <a v-for="(link, index) in socialLinks" 
                   :key="link.name" 
                   :href="link.url" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="text-accent hover:text-accent-hover transition-colors hover:scale-110 transform duration-200 animate-slide-in-bottom"
                   :style="{ animationDelay: `${index * 100}ms` }">
                  <component :is="link.icon" class="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </ul>
            </div>
            <h2 class="text-2xl font-bold text-accent mt-8 mb-4 text-center lg:text-left animate-fade-in-up" style="animation-delay: 200ms;">{{ $t('about.skills') }}</h2>
            <ul class="flex flex-wrap justify-center lg:justify-start gap-2">
              <li v-for="(skill, index) in skills" :key="skill" 
                  class="bg-bg-secondary text-text-primary px-3 py-1 rounded-full text-sm shadow animate-fade-in-up"
                  :style="{ animationDelay: `${300 + index * 25}ms` }">
                {{ skill }}
              </li>
            </ul>
          </div>
          <div class="lg:w-2/3">
            <div class="space-y-6">
              <p v-for="(paragraph, index) in bioParagraphs" :key="index" 
                 class="text-text-secondary leading-relaxed animate-fade-in-up"
                 :style="{ animationDelay: `${200 + index * 30}ms` }">
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import profileImageSrc from '/public/images/userpic.png'
  import { CodeBracketIcon, UserIcon, CameraIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
  
  const { t } = useI18n()
  const profileImage = ref(profileImageSrc)
  const skills = ref(['Vue.js', 'React.js', 'Node.js', 'HTML', 'CSS', 'Python', 'Java', 'JavaScript', 'WSL', 'Linux (Arch, Ubuntu)'])

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/telga', icon: CodeBracketIcon },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/bnguy23', icon: UserIcon },
    { name: 'Instagram', url: 'https://instagram.com/br.ainn', icon: CameraIcon },
    { name: 'Email', url: 'mailto:briann2305@gmail.com', icon: EnvelopeIcon },
  ]
  
  const bioParagraphs = computed(() => {
    return t('about.bio').split('\n\n')
  })
  </script>
  
  <style scoped>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.3s ease-out forwards;
    opacity: 0;
  }
  </style>
