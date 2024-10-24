<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8">
    <div class="max-w-4xl mx-auto">
      
      <section v-if="experiencesData.education" class="bg-bg-secondary rounded-lg shadow-lg p-6 mb-8 animate-fade-in">
        <h2 class="text-2xl font-semibold mb-6 text-accent">{{ $t('experiences.education.title') }}</h2>
        <div v-for="(edu, key) in experiencesData.education.items" :key="key" 
             class="bg-bg-primary p-6 rounded-lg shadow-md mb-6 animate-fade-in">
          <h3 class="text-xl font-medium text-accent">{{ $t(`experiences.education.items.${key}.degree`) }}</h3>
          <p class="text-lg mt-2">{{ $t(`experiences.education.items.${key}.school`) }}, {{ $t(`experiences.education.items.${key}.location`) }}</p>
          <p class="text-md text-text-secondary mt-1">{{ $t(`experiences.education.items.${key}.duration`) }}</p>
          <ul class="mt-4 list-disc list-inside">
            <li v-for="(detail, detailKey) in edu.details" :key="detailKey" class="text-sm mt-2">
              {{ $t(`experiences.education.items.${key}.details.${detailKey}`) }}
            </li>
          </ul>
        </div>
      </section>

      <section v-if="experiencesData.work" class="bg-bg-secondary rounded-lg shadow-lg p-6 animate-fade-in">
        <h2 class="text-2xl font-semibold mb-6 text-accent">{{ $t('experiences.work.title') }}</h2>
        <div v-for="(job, key) in experiencesData.work.items" :key="key" 
             class="bg-bg-primary p-6 rounded-lg shadow-md mb-6 animate-fade-in">
          <h3 class="text-xl font-medium text-accent">{{ $t(`experiences.work.items.${key}.title`) }}</h3>
          <p class="text-lg mt-2">{{ $t(`experiences.work.items.${key}.company`) }}, {{ $t(`experiences.work.items.${key}.location`) }}</p>
          <p class="text-md text-text-secondary mt-1">{{ $t(`experiences.work.items.${key}.duration`) }}</p>
          <ul class="mt-4 list-disc list-inside">
            <li v-for="(responsibility, respKey) in job.responsibilities" :key="respKey" class="text-sm mt-2">
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

console.log('Experiences Data:', experiencesData)
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out forwards;
}
</style>
