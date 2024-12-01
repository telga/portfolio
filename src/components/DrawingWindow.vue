<template>
  <div 
    class="absolute shadow-xl overflow-hidden bg-[#002b36]"
    :style="{
      left: typeof position.x === 'number' ? `${position.x}px` : position.x,
      top: typeof position.y === 'number' ? `${position.y}px` : position.y,
      width: `${size.width}px`,
      height: `${size.height}px`,
    }"
  >
    <!-- Resize Handles -->
    <div class="resize-handle resize-e" @mousedown="(e) => startResize('e', e)"></div>
    <div class="resize-handle resize-w" @mousedown="(e) => startResize('w', e)"></div>
    <div class="resize-handle resize-s" @mousedown="(e) => startResize('s', e)"></div>
    <div class="resize-handle resize-se" @mousedown="(e) => startResize('se', e)"></div>
    <div class="resize-handle resize-sw" @mousedown="(e) => startResize('sw', e)"></div>
    
    <!-- Window Header -->
    <div 
      class="h-8 flex items-center relative select-none bg-[var(--bg-primary)]"
      @mousedown="startDrag"
      :style="{ cursor: isDragging ? 'grabbing' : 'grab' }"
    >
      <!-- Centered text -->
      <div class="absolute w-full text-center text-[var(--accent)] text-sm pointer-events-none">
        Drawing App
      </div>
      
      <!-- Window Controls -->
      <div class="flex items-stretch h-full ml-auto">
        <button 
          @click="$emit('minimize')"
          class="hover:bg-gray-600 w-11 flex items-center justify-center cursor-pointer"
        >
          <MinusSmallIcon class="w-5 h-5 text-gray-300" />
        </button>
        <button 
          @click="$emit('maximize')"
          class="hover:bg-gray-600 w-11 flex items-center justify-center cursor-pointer"
        >
          <Square2StackIcon class="w-4 h-4 text-gray-300" />
        </button>
        <button 
          @click="handleClose"
          class="hover:bg-red-500 w-11 flex items-center justify-center cursor-pointer relative"
        >
          <XMarkIcon class="w-5 h-5 text-gray-300" />
        </button>
      </div>
    </div>

    <!-- Drawing Area -->
    <div class="flex flex-col h-[calc(100%-32px)]">
      <!-- Tools -->
      <div class="flex items-center gap-4 p-2 bg-[var(--bg-secondary)]">
        <button 
          @click="currentTool = 'pen'"
          :class="['p-2 rounded', currentTool === 'pen' ? 'bg-[var(--accent)]' : 'hover:bg-gray-700']"
        >
          <PencilIcon class="w-5 h-5 text-gray-300" />
        </button>
        <button 
          @click="currentTool = 'eraser'"
          :class="['p-2 rounded', currentTool === 'eraser' ? 'bg-[var(--accent)]' : 'hover:bg-gray-700']"
        >
          <BackspaceIcon class="w-5 h-5 text-gray-300" />
        </button>
        <input 
          type="color" 
          v-model="currentColor"
          class="w-8 h-8 rounded cursor-pointer"
          :disabled="currentTool === 'eraser'"
        >
        <div class="flex items-center gap-2">
          <span class="text-gray-300 text-sm">Size:</span>
          <input 
            type="range" 
            v-model="currentSize" 
            min="1" 
            max="50"
            class="w-24"
          >
        </div>
      </div>

      <!-- Canvas -->
      <canvas 
        ref="canvas"
        class="flex-1 bg-white cursor-crosshair"
        @mousedown="startDrawing"
        @mousemove="draw"
        @mouseup="stopDrawing"
        @mouseleave="stopDrawing"
      ></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, defineProps, defineEmits, onUnmounted } from 'vue'
import { 
  MinusSmallIcon, 
  Square2StackIcon, 
  XMarkIcon, 
  PencilIcon,
  BackspaceIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
  position: {
    type: Object,
    required: true
  },
  size: {
    type: Object,
    required: true
  },
  isMaximized: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:position', 'update:size', 'minimize', 'maximize', 'close'])

// Dragging state
const isDragging = ref(false)
const dragOffset = ref({ x: 0, y: 0 })

// Window dragging functions
const startDrag = (e) => {
  if (props.isMaximized) return
  isDragging.value = true
  dragOffset.value = {
    x: e.clientX - props.position.x,
    y: e.clientY - props.position.y
  }
  window.addEventListener('mousemove', handleDrag)
  window.addEventListener('mouseup', stopDrag)
}

const handleDrag = (e) => {
  if (!isDragging.value) return
  emit('update:position', {
    x: e.clientX - dragOffset.value.x,
    y: e.clientY - dragOffset.value.y
  })
}

const stopDrag = () => {
  isDragging.value = false
  window.removeEventListener('mousemove', handleDrag)
  window.removeEventListener('mouseup', stopDrag)
}

// Resizing state
const isResizing = ref(false)
const resizeDirection = ref(null)
const initialSize = ref({ width: 0, height: 0 })
const initialPosition = ref({ x: 0, y: 0 })
const initialMousePosition = ref({ x: 0, y: 0 })

// Window resizing functions
const startResize = (direction, e) => {
  if (props.isMaximized) return
  e.preventDefault()
  isResizing.value = true
  resizeDirection.value = direction
  initialSize.value = { ...props.size }
  initialPosition.value = { ...props.position }
  initialMousePosition.value = { x: e.clientX, y: e.clientY }
  window.addEventListener('mousemove', handleResize)
  window.addEventListener('mouseup', stopResize)
}

const handleResize = (e) => {
  if (!isResizing.value) return
  const dx = e.clientX - initialMousePosition.value.x
  const dy = e.clientY - initialMousePosition.value.y
  const newSize = { ...initialSize.value }
  const newPosition = { ...initialPosition.value }

  if (resizeDirection.value.includes('e')) {
    newSize.width = initialSize.value.width + dx
  }
  if (resizeDirection.value.includes('w')) {
    newSize.width = initialSize.value.width - dx
    newPosition.x = initialPosition.value.x + dx
  }
  if (resizeDirection.value.includes('s')) {
    newSize.height = initialSize.value.height + dy
  }

  // Enforce minimum size
  newSize.width = Math.max(newSize.width, 400)
  newSize.height = Math.max(newSize.height, 300)

  emit('update:size', newSize)
  emit('update:position', newPosition)
}

const stopResize = () => {
  isResizing.value = false
  window.removeEventListener('mousemove', handleResize)
  window.removeEventListener('mouseup', stopResize)
}

// Drawing state
const canvas = ref(null)
const ctx = ref(null)
const isDrawing = ref(false)
const currentTool = ref('pen')
const currentColor = ref('#000000')
const currentSize = ref(5)
const lastX = ref(0)
const lastY = ref(0)

// Initialize canvas
onMounted(() => {
  ctx.value = canvas.value.getContext('2d')
  resizeCanvas()
})

// Resize canvas when window size changes
watch(() => props.size, resizeCanvas, { deep: true })

function resizeCanvas() {
  if (!canvas.value) return
  canvas.value.width = props.size.width
  canvas.value.height = props.size.height - 74 // Subtract header and toolbar height
}

function startDrawing(e) {
  isDrawing.value = true
  const rect = canvas.value.getBoundingClientRect()
  lastX.value = e.clientX - rect.left
  lastY.value = e.clientY - rect.top
}

function draw(e) {
  if (!isDrawing.value) return

  const rect = canvas.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  ctx.value.beginPath()
  ctx.value.moveTo(lastX.value, lastY.value)
  ctx.value.lineTo(x, y)
  
  if (currentTool.value === 'pen') {
    ctx.value.strokeStyle = currentColor.value
    ctx.value.lineWidth = currentSize.value
    ctx.value.lineCap = 'round'
    ctx.value.stroke()
  } else {
    ctx.value.strokeStyle = 'white'
    ctx.value.lineWidth = currentSize.value
    ctx.value.lineCap = 'round'
    ctx.value.stroke()
  }

  lastX.value = x
  lastY.value = y
}

function stopDrawing() {
  isDrawing.value = false
}

const handleClose = () => {
  // Clear the canvas before closing
  if (canvas.value && ctx.value) {
    ctx.value.fillStyle = 'white'
    ctx.value.fillRect(0, 0, canvas.value.width, canvas.value.height)
  }
  emit('close')
}

// Make sure to clean up event listeners
onUnmounted(() => {
  window.removeEventListener('mousemove', handleDrag)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('mousemove', handleResize)
  window.removeEventListener('mouseup', stopResize)
})
</script>

<style scoped>
.resize-handle {
  position: absolute;
  background: transparent;
}

.resize-e {
  right: 0;
  top: 0;
  width: 4px;
  height: 100%;
  cursor: e-resize;
}

.resize-w {
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  cursor: w-resize;
}

.resize-s {
  bottom: 0;
  left: 0;
  height: 4px;
  width: 100%;
  cursor: s-resize;
}

.resize-se {
  right: 0;
  bottom: 0;
  width: 8px;
  height: 8px;
  cursor: se-resize;
}

.resize-sw {
  left: 0;
  bottom: 0;
  width: 8px;
  height: 8px;
  cursor: sw-resize;
}
</style> 