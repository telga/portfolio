<template>
  <div class="min-h-screen bg-bg-primary text-text-primary p-4 md:p-8">
    <div class="flex flex-col md:flex-row">
      <!-- Buttons -->
      <div class="md:w-56 mb-4 md:mb-0 md:mr-8">
        <div class="md:sticky md:top-8 w-full">
          <div class="flex md:flex-col space-x-2 md:space-x-0 md:space-y-4 md:mt-[3.75rem]">
            <button
              v-for="type in ['hardware', 'software']"
              :key="type"
              @click="currentGearType = type"
              class="group flex items-center justify-between flex-1 md:w-full py-3 px-4 rounded-lg transition-all duration-300 ease-in-out text-sm md:text-base bg-bg-secondary text-text-secondary hover:ring-2 hover:ring-accent-hover focus:outline-none active:scale-95"
            >
              <span>{{ $t(`gear.types.${type}`) }}</span>
              <span 
                class="w-2 h-2 rounded-full bg-accent-hover transition-all duration-300 ease-in-out"
                :class="currentGearType === type ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-75'"
              ></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Main content area -->
      <div class="flex-grow max-w-3xl">
        <h1 class="text-2xl md:text-3xl font-bold mb-6 text-accent animate-slide-in-right">
          {{ $t(`gear.title.${currentGearType}`) }}
        </h1>
        
        <component 
          :is="currentView" 
          :hardwareGearItems="hardwareGearItems" 
          :softwareGearItems="softwareGearItems" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import gearData from '@/data/gear.json'
import HardwareGearView from '@/components/HardwareGearView.vue'
import SoftwareGearView from '@/components/SoftwareGearView.vue'

const currentGearType = ref('hardware')
const hardwareGearItems = gearData.hardware
const softwareGearItems = gearData.software

const currentView = computed(() => 
  currentGearType.value === 'hardware' ? HardwareGearView : SoftwareGearView
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

/* Update the pulse animation to affect the ring instead of the background */
@keyframes pulseRing {
  0%, 100% { box-shadow: 0 0 0 0px rgba(var(--color-accent-hover), 0.2); }
  50% { box-shadow: 0 0 0 4px rgba(var(--color-accent-hover), 0.2); }
}

.group:hover {
  animation: pulseRing 2s infinite;
}
</style>
