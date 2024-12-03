<template>
  <div class="min-h-screen bg-bg-primary text-text-primary px-2 pt-8 sm:pt-8 lg:pt-8">
    <div class="flex flex-col md:flex-row">
      <!-- Buttons -->
      <div class="md:w-56 mb-4 md:mb-0 md:mr-8">
        <div class="md:sticky md:top-8 w-full">
          <div class="flex md:flex-col space-x-2 md:space-x-0 md:space-y-4">
            <button
              v-for="category in gearData.categories"
              :key="category.name"
              @click="setCurrentCategory(category.name)"
              class="group flex items-center justify-between flex-1 md:w-full py-3 px-4 rounded-lg transition-all duration-300 ease-in-out text-sm md:text-base bg-bg-secondary text-text-secondary font-bold active:scale-95"
            >
              <span>{{ $t(`gear.categories.${category.name}`) }}</span>
              <span 
                class="w-2 h-2 rounded-full bg-[var(--accent-secondary)] hover:bg-[var(--accent-hover)] transition-all duration-300 ease-in-out"
                :class="currentCategory === category.name ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-75 group-hover:bg-[var(--accent-hover)]'"
              ></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Main content area -->
      <div class="flex-grow max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <div v-for="item in currentCategoryItems" :key="item.name">
          <GearCard :item="item" :category="currentCategory" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import gearData from '@/data/gear.json'
import GearCard from '@/components/GearCard.vue'

const currentCategory = ref('hardware')

const setCurrentCategory = (category) => {
  currentCategory.value = category
  localStorage.setItem('currentGearCategory', category)
}

const currentCategoryItems = computed(() => 
  gearData.categories.find(category => category.name === currentCategory.value)?.items || []
)

onMounted(() => {
  const savedCategory = localStorage.getItem('currentGearCategory')
  if (savedCategory && gearData.categories.some(cat => cat.name === savedCategory)) {
    currentCategory.value = savedCategory
  }
})

// Optional: Update localStorage when currentCategory changes
watch(currentCategory, (newCategory) => {
  localStorage.setItem('currentGearCategory', newCategory)
})
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
