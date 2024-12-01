<script setup>
import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue'
import { useTheme } from '@/utils/useTheme'

const { currentTheme, toggleTheme } = useTheme()

const emit = defineEmits(['open-terminal', 'toggle-terminal'])

const currentTime = ref('')
let timeInterval

const updateTime = () => {
  const now = new Date()
  const month = now.toLocaleString('en-US', { month: 'short' })
  const day = now.getDate()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  currentTime.value = `${month} ${day} ${hours}:${minutes}`
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 60000)
})

onBeforeUnmount(() => {
  if (timeInterval) clearInterval(timeInterval)
})

const handleConsoleClick = () => {
  emit('toggle-terminal')
}

const handleThemeToggle = () => {
  toggleTheme()
  // Store the current theme in localStorage
  localStorage.setItem('lastTheme', currentTheme.value)
}
</script>

<template>
  <div class="bg-[var(--bg-primary)] h-8 flex items-center justify-between px-4 text-[var(--text-primary)] text-sm relative shadow-md">
    <!-- Left section -->
    <div class="w-[200px] flex items-center gap-4">
      <router-link 
        to="/" 
        class="h-8 flex items-center px-2 cursor-pointer group"
      >
        <span class="relative whitespace-nowrap">
          Regular Site
          <div 
            class="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          ></div>
        </span>
      </router-link>
      
      <button 
        @click="handleThemeToggle" 
        class="h-8 flex items-center px-2 cursor-pointer group"
      >
        <span class="relative whitespace-nowrap">
          Switch Theme
          <div 
            class="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          ></div>
        </span>
      </button>
    </div>
    
    <!-- Center section - Terminal Tab -->
    <div 
      v-if="$attrs.isTerminalExists" 
      class="absolute inset-x-0 mx-auto w-fit h-8 flex items-center justify-center cursor-pointer group -translate-x-4"
      @click="handleConsoleClick"
    >
      <div class="flex items-center gap-1">
        <div class="i-mdi-console w-4 h-4"></div>
        <span class="relative inline-block whitespace-nowrap">
          portfolio@brian-nguyen
          <!-- Active underline -->
          <div 
            class="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] transition-transform duration-200"
            :class="{ 'scale-x-100': !$attrs.isMinimized, 'scale-x-0': $attrs.isMinimized }"
          ></div>
          <!-- Hover underline -->
          <div 
            class="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
            v-if="$attrs.isMinimized"
          ></div>
        </span>
      </div>
    </div>
    
    <!-- Right section -->
    <div class="w-[200px] flex items-center justify-end gap-2">
      <div>{{ currentTime }}</div>
      <div class="i-mdi-account-multiple w-4 h-4"></div>
    </div>
  </div>
</template>

<style scoped>
.scale-x-0 {
  transform: scaleX(0);
}

.scale-x-100 {
  transform: scaleX(1);
}

/* Prevent text selection */
.group {
  user-select: none;
}
</style> 