<template>
  <Transition
    enter-active-class="transition-opacity duration-500"
    leave-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isLoading || alwaysShow" 
      class="fixed inset-0 z-50 bg-[#000000] flex flex-col items-center justify-center"
    >
      <!-- Logo -->
      <div class="text-[#ffffff] text-4xl font-mono mb-8">
        bn:os
      </div>
      
      <!-- Loading Circle -->
      <div class="w-8 h-8 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'

const props = defineProps({
  alwaysShow: {
    type: Boolean,
    default: false
  }
})

const isLoading = ref(true)

onMounted(() => {
  if (!props.alwaysShow) {
    setTimeout(() => {
      isLoading.value = false
    }, 1000)
  }
})
</script> 