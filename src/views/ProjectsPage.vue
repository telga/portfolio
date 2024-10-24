<template>
  <div class="projects-page container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 animate-fade-in" style="color: var(--accent);">{{ $t('projects.title') }}</h1>
    <div v-if="portfolioStore.loading" class="animate-pulse" style="color: var(--text-secondary);"></div>
    <div v-else-if="portfolioStore.error" style="color: var(--text-secondary);">{{ portfolioStore.error }}</div>
    <div 
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div 
        v-for="(project, index) in localizedProjects" 
        :key="project.id" 
        class="rounded-lg overflow-hidden shadow-lg animate-fade-in-up flex flex-col"
        :style="{ 
          animationDelay: `${index * 100}ms`,
          backgroundColor: 'var(--bg-secondary)',
        }"
      >
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover text-accent text-center">
        <div class="p-6 flex-grow flex flex-col">
          <h2 class="text-xl font-bold mb-2" style="color: var(--text-primary);">{{ project.title }}</h2>
          <p class="mb-4 flex-grow" style="color: var(--text-secondary);">{{ project.description }}</p>
          <div class="flex justify-between mt-auto">
            <a 
              :href="project.github" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="animated-button github-button"
            >
              {{ $t('projects.github') }}
            </a>
            <a 
              :href="project.demo" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="animated-button demo-button"
            >
              {{ $t('projects.demo') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { usePortfolioStore } from '@/store/portfolioStore'
import { useI18n } from 'vue-i18n'

const portfolioStore = usePortfolioStore()
const { locale } = useI18n()

const localizedProjects = ref([])

const updateLocalizedProjects = () => {
  localizedProjects.value = portfolioStore.projects.map(project => ({
    ...project,
    title: project.title[locale.value] || project.title.en,
    description: project.description[locale.value] || project.description.en,
    image: `/portfolio/images/${project.image}` // Adjust the path here
  }))
}

watch(locale, updateLocalizedProjects)

watch(() => portfolioStore.projects, updateLocalizedProjects, { immediate: true })

onMounted(() => {
  portfolioStore.fetchProjects()
})
</script>

<style scoped>
.projects-page {
  min-height: calc(100vh - 64px - 64px); /* Adjust these values based on your header and footer heights */
  display: flex;
  flex-direction: column;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

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

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out;
}

.animated-button {
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: bold;
}

.github-button {
  background-color: var(--accent-hover);
  color: white;
}

.demo-button {
  background-color: var(--accent);
  color: white;
}

.animated-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.animated-button:active {
  transform: translateY(0);
  box-shadow: none;
}
</style>
