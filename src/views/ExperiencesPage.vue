<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-4 sm:p-8">
    <div class="max-w-4xl mx-auto">
      <section class="bg-bg-secondary rounded-lg shadow-lg p-6 animate-slide-in">
        <h2 class="text-3xl font-semibold mb-8 text-accent">{{ t('resume.education') }}</h2>
        <div class="space-y-8 mb-12">
          <div v-for="(edu, index) in resume.educationDetails" :key="index" 
               class="bg-bg-primary p-6 rounded-lg shadow-md animate-fade-in" :style="{ animationDelay: `${index * 0.1}s` }">
            <h3 class="text-2xl font-medium text-accent">{{ edu.degree }}</h3>
            <p class="text-xl mt-2">{{ edu.school }}, {{ edu.location }}</p>
            <p class="text-lg text-text-secondary mt-1">{{ edu.duration }}</p>
            <ul class="mt-4 list-disc list-inside">
              <li v-for="(detail, detailIndex) in edu.details" :key="detailIndex" class="text-base mt-2">
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>

        <h2 class="text-3xl font-semibold mb-8 text-accent">{{ t('resume.experience') }}</h2>
        <div class="space-y-8">
          <div v-for="(job, index) in resume.workExperience" :key="index" 
               class="bg-bg-primary p-6 rounded-lg shadow-md animate-fade-in" :style="{ animationDelay: `${index * 0.1}s` }">
            <h3 class="text-2xl font-medium text-accent">{{ job.title }}</h3>
            <p class="text-xl mt-2">{{ job.company }}, {{ job.location }}</p>
            <p class="text-lg text-text-secondary mt-1">{{ job.duration }}</p>
            <ul class="mt-4 list-disc list-inside">
              <li v-for="(responsibility, respIndex) in job.responsibilities" :key="respIndex" class="text-base mt-2">
                {{ responsibility }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import resume from '@/data/resume.json'

const { t } = useI18n()
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
