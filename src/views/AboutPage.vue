<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-8">
    <h1 class="text-3xl font-bold text-accent mb-8">{{ $t('about.title') }}</h1>
    <div class="flex flex-col md:flex-row gap-8">
      <img :src="profileImage" :alt="$t('about.imageAlt')" class="w-32 h-32 object-cover rounded-full mx-auto md:mx-0">
      <div>
        <p class="text-text-secondary mb-4">{{ $t('about.bio') }}</p>
        <h2 class="text-2xl font-bold text-accent mb-2">{{ $t('about.skills') }}</h2>
        <ul class="flex flex-wrap gap-2">
          <li v-for="skill in skills" :key="skill" class="bg-bg-secondary text-text-primary px-3 py-1 rounded-full text-sm">
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import profileImageSrc from '../assets/userpic.png'

const profileImage = ref(profileImageSrc)
const skills = ref(['Vue.js', 'React.js', 'Node.js', 'HTML', 'CSS', 'Python', 'Java', 'JavaScript', 'WSL', 'Linux (Arch, Ubuntu)'])
</script>
