<template>
  <div id="projects" class="projects-page container mx-auto px-4 py-8 scroll-mt-[80px] lg:scroll-mt-[100px]">
    <h1 class="text-3xl font-bold mb-8 animate-fade-in" style="color: var(--accent);">
      {{ $t('projects.title') }}
    </h1>

    <!-- Loading State -->
    <div v-if="portfolioStore.loading" class="flex flex-col items-center justify-center min-h-[50vh]">
      <div class="loader mb-4"></div>
      <p class="text-text-secondary">{{ $t('common.loading') }}</p>
    </div>

    <!-- Error State -->
    <div v-else-if="portfolioStore.error" 
         class="text-center p-8 rounded-lg bg-bg-secondary"
         style="color: var(--text-secondary);">
      {{ portfolioStore.error }}
    </div>

    <!-- Projects Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    image: `/images/${project.image}` // Adjust the path here
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

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid var(--bg-secondary);
  border-bottom-color: var(--accent);
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Optional: Add a fade-in animation for the content when it loads */
.grid {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
