<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8">
    <div class="max-w-4xl mx-auto">
      
      <section v-if="experiencesData.education" 
               class="bg-bg-secondary rounded-lg shadow-lg p-6 mb-8 animate-slide-in-right transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:-translate-y-2">
        <h2 class="text-2xl font-semibold mb-6 text-accent animate-slide-in-right">{{ $t('experiences.education.title') }}</h2>
        <div v-for="(edu, key) in experiencesData.education.items" :key="key" 
             class="bg-bg-primary p-6 rounded-lg shadow-md mb-6 animate-slide-in-right"
             :style="{ animationDelay: `${key * 100}ms` }">
          <h3 class="text-xl font-medium text-accent">{{ $t(`experiences.education.items.${key}.degree`) }}</h3>
          <p class="text-lg mt-2">{{ $t(`experiences.education.items.${key}.school`) }}, {{ $t(`experiences.education.items.${key}.location`) }}</p>
          <p class="text-md text-text-secondary mt-1">{{ $t(`experiences.education.items.${key}.duration`) }}</p>
          <ul class="mt-4 list-disc list-inside">
            <li v-for="(detail, detailKey) in edu.details" :key="detailKey" class="text-sm mt-2 animate-slide-in-right" :style="{ animationDelay: `${(key * 100) + (detailKey * 50)}ms` }">
              {{ $t(`experiences.education.items.${key}.details.${detailKey}`) }}
            </li>
          </ul>
        </div>
      </section>

      <section v-if="experiencesData.work" 
               class="bg-bg-secondary rounded-lg shadow-lg p-6 animate-slide-in-right transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:-translate-y-2" 
               style="animation-delay: 300ms;">
        <h2 class="text-2xl font-semibold mb-6 text-accent animate-slide-in-right">{{ $t('experiences.work.title') }}</h2>
        <div v-for="(job, key) in experiencesData.work.items" :key="key" 
             class="bg-bg-primary p-6 rounded-lg shadow-md mb-6 animate-slide-in-right"
             :style="{ animationDelay: `${400 + (key * 100)}ms` }">
          <h3 class="text-xl font-medium text-accent">{{ $t(`experiences.work.items.${key}.title`) }}</h3>
          <p class="text-lg mt-2">{{ $t(`experiences.work.items.${key}.company`) }}, {{ $t(`experiences.work.items.${key}.location`) }}</p>
          <p class="text-md text-text-secondary mt-1">{{ $t(`experiences.work.items.${key}.duration`) }}</p>
          <ul class="mt-4 list-disc list-inside">
            <li v-for="(responsibility, respKey) in job.responsibilities" :key="respKey" class="text-sm mt-2 animate-slide-in-right" :style="{ animationDelay: `${400 + (key * 100) + (respKey * 50)}ms` }">
              {{ $t(`experiences.work.items.${key}.responsibilities.${respKey}`) }}
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import experiencesData from '@/data/experiencesData.js'
</script>

<style scoped>
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 0.5s ease-out forwards;
  opacity: 0;
}

@media (max-width: 768px) {
  .animate-slide-in-right {
    animation: none;
    opacity: 1;
  }
}
</style>
