<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-accent mb-8">{{ $t('projects.title') }}</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.id" class="bg-base-200 rounded-lg overflow-hidden shadow-lg">
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-bold text-content-100 mb-2">{{ project.title }}</h2>
          <p class="text-content-200 mb-4">{{ project.description }}</p>
          <div class="flex justify-between">
            <a :href="project.github" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-accent-focus">GitHub</a>
            <a :href="project.demo" target="_blank" rel="noopener noreferrer" class="text-accent hover:text-accent-focus">Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const projects = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/api/projects.json')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    projects.value = data
  } catch (e) {
    console.error('Error fetching projects:', e)
    error.value = 'Failed to load projects. Please try again later.'
  } finally {
    loading.value = false
  }
})
</script>