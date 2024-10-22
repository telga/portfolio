<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8 lg:p-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-bold text-accent mb-8 sm:mb-12n">{{ $t('about.title') }}</h1>
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div class="lg:w-1/3">
          <img :src="profileImage" :alt="$t('about.imageAlt')" class="w-48 h-48 object-cover rounded-full mx-auto lg:mx-0 shadow-lg">
          <h2 class="text-2xl font-bold text-accent mt-8 mb-4 text-center lg:text-left">{{ $t('about.skills') }}</h2>
          <ul class="flex flex-wrap justify-center lg:justify-start gap-2">
            <li v-for="(skill, index) in skills" :key="skill" 
                class="bg-bg-secondary text-text-primary px-3 py-1 rounded-full text-sm shadow"
                :style="{ animationDelay: `${index * 100}ms` }">
              {{ skill }}
            </li>
          </ul>
        </div>
        <div class="lg:w-2/3">
          <div class="space-y-6">
            <p v-for="(paragraph, index) in bioParagraphs" :key="index" 
               class="text-text-secondary leading-relaxed"
               :style="{ animationDelay: `${index * 200}ms` }">
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

const { t } = useI18n()
const profileImage = ref(profileImageSrc)
const skills = ref(['Vue.js', 'React.js', 'Node.js', 'HTML', 'CSS', 'Python', 'Java', 'JavaScript', 'WSL', 'Linux (Arch, Ubuntu)'])

const bioParagraphs = computed(() => {
  return t('about.bio').split('\n\n')
})
</script>

