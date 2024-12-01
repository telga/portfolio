<script setup>
import { ref, onMounted } from 'vue'
import { useTheme } from '@/utils/useTheme'
import LoadingScreenV2 from '@/components/LoadingScreenV2.vue'

const { currentTheme } = useTheme()
const showLoadingScreen = ref(true)
const currentTime = ref('')

// Initial loading screen
onMounted(() => {
  setTimeout(() => {
    showLoadingScreen.value = false
  }, 2000)
  updateTime()
  setInterval(updateTime, 1000)
})

const updateTime = () => {
  const now = new Date()
  const month = now.toLocaleString('default', { month: 'short' })
  const day = now.getDate()
  const time = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })
  currentTime.value = `${month} ${day} ${time}`
}

const handleThemeToggle = () => {
  showLoadingScreen.value = true
  const newTheme = currentTheme.value === 'nord' ? 'solarized' : 'nord'
  localStorage.setItem('theme', newTheme)
  window.location.reload()
}
</script>

<template>
  <div class="bg-[var(--bg-primary)] h-8 flex items-center justify-between px-4 text-[var(--text-primary)] text-sm relative shadow-md">
    <LoadingScreenV2 :show="showLoadingScreen" />
    
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
    
    <!-- Center section -->
    <div class="absolute inset-x-0 mx-auto w-fit h-8 flex items-center justify-center gap-4 -translate-x-4">
      <!-- Terminal Tab -->
      <div 
        v-if="$attrs.isTerminalExists" 
        class="cursor-pointer group"
        @click="$emit('toggle-terminal')"
      >
        <div class="flex items-center gap-1">
          <div class="i-mdi-console w-4 h-4"></div>
          <span class="relative inline-block whitespace-nowrap">
            portfolio@brian-nguyen
            <div 
              class="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] transition-transform duration-200"
              :class="{ 'scale-x-100': !$attrs.isMinimized, 'scale-x-0': $attrs.isMinimized }"
            ></div>
            <div 
              class="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
              v-if="$attrs.isMinimized"
            ></div>
          </span>
        </div>
      </div>

      <!-- Drawing Tab -->
      <div 
        v-if="$attrs.isDrawingExists" 
        class="cursor-pointer group"
        @click="$emit('toggle-drawing')"
      >
        <div class="flex items-center gap-1">
          <div class="i-mdi-pencil w-4 h-4"></div>
          <span class="relative inline-block whitespace-nowrap">
            drawing@brian-nguyen
            <div 
              class="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] transition-transform duration-200"
              :class="{ 'scale-x-100': !$attrs.isDrawingMinimized, 'scale-x-0': $attrs.isDrawingMinimized }"
            ></div>
            <div 
              class="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--accent-hover)] scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
              v-if="$attrs.isDrawingMinimized"
            ></div>
          </span>
        </div>
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