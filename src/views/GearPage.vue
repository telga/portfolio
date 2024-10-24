<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8">
    <div class="flex flex-col md:flex-row">
      <!-- Buttons -->
      <div class="md:w-56 mb-4 md:mb-0 md:mr-8">
        <div class="md:sticky md:top-8 w-full">
          <div class="flex md:flex-col space-x-2 md:space-x-0 md:space-y-4 md:mt-[3.75rem]">
            <button
              v-for="category in gearData.categories"
              :key="category.name"
              @click="currentCategory = category.name"
              class="group flex items-center justify-between flex-1 md:w-full py-3 px-4 rounded-lg transition-all duration-300 ease-in-out text-sm md:text-base bg-bg-secondary text-text-secondary focus:outline-none active:scale-95"
            >
              <span>{{ $t(`gear.categories.${category.name}`) }}</span>
              <span 
                class="w-2 h-2 rounded-full bg-accent-hover transition-all duration-300 ease-in-out"
                :class="currentCategory === category.name ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-75'"
              ></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Main content area -->
      <div class="flex-grow max-w-3xl">
        <h1 class="text-2xl md:text-3xl font-bold mb-6 text-accent animate-slide-in-right">
          {{ $t(`gear.categories.${currentCategory}`) }}
        </h1>
        
        <div v-for="item in currentCategoryItems" :key="item.name">
          <GearCard :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import gearData from '@/data/gear.json'
import GearCard from '@/components/GearCard.vue'

const currentCategory = ref('hardware')

const currentCategoryItems = computed(() => 
  gearData.categories.find(category => category.name === currentCategory.value)?.items || []
)
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
  animation: slideInRight 0.5s ease-out;
}

@media (max-width: 768px) {
  .animate-slide-in-right {
    animation: none;
  }
}

/* New subtle hover animation */
@keyframes subtleScale {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
}

.group:hover {
  animation: subtleScale 0.3s ease-out;
}
</style>
