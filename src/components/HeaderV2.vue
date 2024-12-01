<script setup>
import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue'

const emit = defineEmits(['open-terminal'])

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
  updateTime() // Initial update
  timeInterval = setInterval(updateTime, 60000) // Update every minute
})

onBeforeUnmount(() => {
  if (timeInterval) clearInterval(timeInterval)
})

const handleConsoleClick = () => {
  emit('open-terminal')
}
</script>

<template>
  <div class="bg-[#1a1a1a] h-8 flex items-center justify-between px-4 text-gray-300 text-xs">
    <div class="flex items-center gap-4">
      <div>Activities</div>
      <div 
        class="flex items-center gap-1 hover:bg-gray-700 px-2 py-1 rounded cursor-pointer"
        @click="handleConsoleClick"
      >
        <div class="i-mdi-console w-3.5 h-3.5"></div>
        <span>Console</span>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div>{{ currentTime }}</div>
      <div class="i-mdi-account-multiple w-3.5 h-3.5"></div>
    </div>
  </div>
</template> 