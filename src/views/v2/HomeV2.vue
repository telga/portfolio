<template>
    <div class="absolute inset-0 bg-[#1a1a1a] flex flex-col">
      <HeaderV2 
        @open-terminal="openTerminal" 
        @toggle-terminal="toggleTerminal"
        :isMinimized="isMinimized"
      />
      <div class="flex-1 relative" style="background-image: url('/images/termbg.jpg'); background-size: cover; background-position: center;">
        <!-- Terminal Window -->
        <div 
          v-if="isTerminalVisible" 
          ref="terminalWindow"
          class="absolute bg-[#002b36] shadow-xl overflow-hidden"
          :style="{
            left: typeof position.x === 'number' ? `${position.x}px` : position.x,
            top: typeof position.y === 'number' ? `${position.y}px` : position.y,
            width: `${size.width}px`,
            height: `${size.height}px`,
            cursor: isDragging ? 'grabbing' : 'auto'
          }"
        >
          <!-- Resize handles -->
          <template v-if="!isMaximized">
            <div class="resize-handle left" @mousedown="(e) => startResize('left', e)"></div>
            <div class="resize-handle right" @mousedown="(e) => startResize('right', e)"></div>
            <div class="resize-handle bottom" @mousedown="(e) => startResize('bottom', e)"></div>
            <div class="resize-handle bottom-left" @mousedown="(e) => startResize('bottom-left', e)"></div>
            <div class="resize-handle bottom-right" @mousedown="(e) => startResize('bottom-right', e)"></div>
          </template>
          
          <!-- Terminal Header -->
          <div 
            class="bg-[#1a1a1a] h-8 flex items-center relative select-none"
            @mousedown="startDrag"
          >
            <!-- Centered text -->
            <div class="absolute w-full text-center text-gray-300 text-sm pointer-events-none">
              portfolio@brian-nguyen>
            </div>
            
            <!-- Right-aligned buttons -->
            <div class="flex items-stretch h-full ml-auto window-controls">
              <button 
                @click="minimizeTerminal"
                class="hover:bg-gray-600 w-11 flex items-center justify-center cursor-pointer relative"
              >
                <MinusSmallIcon class="w-5 h-5 text-gray-300" />
              </button>
              <button 
                @click="maximizeTerminal"
                class="hover:bg-gray-600 w-11 flex items-center justify-center cursor-pointer relative"
              >
                <Square2StackIcon 
                  class="w-4 h-4 text-gray-300"
                  :class="{ 'transform rotate-180': isMaximized }"
                />
              </button>
              <button 
                @click="closeTerminal"
                class="hover:bg-red-500 w-11 flex items-center justify-center cursor-pointer relative"
              >
                <XMarkIcon class="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>
          
          <!-- Terminal Content -->
          <div 
            class="p-6 font-mono text-sm overflow-y-auto bg-[#002b36]"
            :style="{ height: `calc(${size.height}px - 32px)` }"
            @keydown="handleKeyPress"
            @keyup="handleSelection"
            @click="handleSelection"
            tabindex="0" 
            ref="terminalContent"
          >
            <!-- Command History -->
            <div v-for="(entry, index) in commandHistory" :key="index" class="mb-4">
              <!-- Command Line -->
              <div class="flex">
                <div class="text-[var(--accent-secondary)]">portfolio@brian-nguyen</div>
                <div class="text-[var(--text-primary)]">&gt;&nbsp;</div>
                <div class="text-[var(--text-primary)]">{{ entry.command }}</div>
              </div>
      
              <!-- Command Output -->
              <div 
                v-if="entry.output" 
                class="mt-2 text-[var(--text-secondary)] font-mono whitespace-pre-wrap break-words max-w-full"
              >{{ entry.output }}</div>
              
              <!-- Neofetch/ifetch Output -->
              <div 
                v-if="entry.showNeofetch" 
                class="flex flex-wrap mt-2 gap-8"
                :style="{ maxWidth: `${size.width - 48}px` }"
              >
                <!-- Profile Picture -->
                <div class="w-[200px] min-w-[200px] aspect-square relative">
                  <img 
                    src="/images/userpic.png" 
                    alt="Profile Picture"
                    class="w-full h-full object-cover"
                  />
                </div>
                
                <!-- Info Section -->
                <div class="text-[var(--text-primary)] space-y-1 mt-6 flex-1 min-w-[300px]">
                  <div><span class="text-[var(--accent)]">Name: </span>Brian Nguyen</div>
                  <div>
                    <span class="text-[var(--accent)]">Github: </span>
                    <a href="https://github.com/telga" target="_blank" 
                       class="hover:text-[var(--accent-hover)] transition-colors duration-300">
                      telga (link)
                    </a>
                  </div>
                  <div>
                    <span class="text-[var(--accent)]">Email: </span>
                    <button 
                      @click="copyEmail" 
                      class="hover:text-[var(--accent-hover)] transition-colors duration-300"
                    >briann2305@gmail.com (link)</button>
                  </div>
                  <div>
                    <span class="text-[var(--accent)]">LinkedIn: </span>
                    <a href="https://www.linkedin.com/in/bnguy23/" target="_blank" 
                       class="hover:text-[var(--accent-hover)] transition-colors duration-300">
                      bnguy23 (link)
                    </a>
                  </div>
                  <div class="flex flex-wrap gap-x-2">
                    <span class="text-[var(--accent)]">Skills:</span>
                    <span class="text-[var(--accent-secondary)]">
                      Vue.js, React.js, Node.js, HTML, CSS, Python, Java, JavaScript, WSL, Linux (Arch, Ubuntu)
                    </span>
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <span class="text-[var(--accent)]">Pages:</span>
                    <div class="flex gap-2">
                      <button 
                        @click="runCommand('about')" 
                        class="text-[var(--accent-secondary)] hover:text-[var(--accent-hover)] transition-colors duration-300"
                      >about</button>
                      <span class="text-[var(--text-secondary)]">|</span>
                      <button 
                        @click="runCommand('projects')" 
                        class="text-[var(--accent-secondary)] hover:text-[var(--accent-hover)] transition-colors duration-300"
                      >projects</button>
                      <span class="text-[var(--text-secondary)]">|</span>
                      <button 
                        @click="runCommand('exp')" 
                        class="text-[var(--accent-secondary)] hover:text-[var(--accent-hover)] transition-colors duration-300"
                      >experience</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Current Command Line -->
            <div class="flex">
              <div class="text-[var(--accent-secondary)]">portfolio@brian-nguyen</div>
              <div class="text-[var(--text-primary)]">&gt;&nbsp;</div>
              <div 
                class="text-[var(--text-primary)] relative cursor-text font-mono"
              >
                <span>{{ currentCommand.slice(0, cursorPosition) }}</span>
                <div 
                  class="w-[2px] h-[14px] bg-[var(--accent-red)] animate-blink absolute inline-block"
                  :style="{ 
                    left: `${cursorPosition * 7.8}px`,
                    top: '3px',
                    transform: 'translateX(-50%)'
                  }"
                  v-show="showCursor && !isExecuting"
                ></div>
                <span>{{ currentCommand.slice(cursorPosition) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script setup>
    import { ref, nextTick, onMounted, onUnmounted } from 'vue'
    import experiencesData from '@/data/experiencesData.js'
    import projectsData from '@/data/projects.json'
    import { useI18n } from 'vue-i18n'
    import HeaderV2 from '@/components/HeaderV2.vue'
    import { MinusSmallIcon, Square2StackIcon, XMarkIcon } from '@heroicons/vue/24/outline'
    
    const { t, locale } = useI18n()
    
    const terminalContent = ref(null)
    const currentCommand = ref('')
    const showCursor = ref(true)
    const isExecuting = ref(false)
    const commandHistory = ref([
      {
        command: 'ifetch',
        showNeofetch: true
      },
      {
        command: 'init',
        output: 'Type \'help\' for a list of available commands.'
      }
    ])
    const MAX_HISTORY = 5
    const initialCommands = ['ifetch', 'init']
    const cursorPosition = ref(0)
    const inputRef = ref(null)
    const isTerminalVisible = ref(true)
    const isMinimized = ref(false)
    const terminalWindow = ref(null)
    const isDragging = ref(false)
    const dragOffset = ref({ x: 0, y: 0 })
    const position = ref({ x: 'calc(50% - 450px)', y: 'calc(50% - 300px)' })
    const size = ref({ width: 900, height: 600 })
    const resizeEdge = ref(null)
    const isMaximized = ref(false)
    const previousState = ref({
      position: null,
      size: null
    })
    
    const handleKeyPress = (e) => {
      if (isExecuting.value) {
        if (e.ctrlKey && e.key.toLowerCase() === 'l') {
          e.preventDefault()
          clearTerminal()
        }
        return
      }
    
      if (e.ctrlKey) {
        switch (e.key) {
          case 'a':
            e.preventDefault()
            cursorPosition.value = 0
            return
          case 'k':
            e.preventDefault()
            currentCommand.value = currentCommand.value.substring(0, cursorPosition.value)
            return
          case 'l':
            e.preventDefault()
            clearTerminal()
            return
        }
      }
    
      // Handle arrow keys
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (cursorPosition.value > 0) {
          cursorPosition.value--
        }
        return
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        if (cursorPosition.value < currentCommand.value.length) {
          cursorPosition.value++
        }
        return
      }
    
      if (e.key === 'Enter' && currentCommand.value) {
        const newEntry = { command: currentCommand.value }
        const validCommands = ['ifetch', 'help', 'about', 'projects', 'exp', 'clear']
    
        if (currentCommand.value === 'init') {
          commandHistory.value.push({
            command: currentCommand.value,
            output: `bnterm: Permission denied for command 'init'`
          })
        } else if (!validCommands.includes(currentCommand.value)) {
          commandHistory.value.push({
            command: currentCommand.value,
            output: `bnterm: Unknown command '${currentCommand.value}'`
          })
        } else {
          if (currentCommand.value === 'ifetch') {
            newEntry.showNeofetch = true
            commandHistory.value.push(newEntry)
            
            const userCommands = commandHistory.value.filter(cmd => 
              !initialCommands.includes(cmd.command)
            )
            if (userCommands.length > MAX_HISTORY) {
              const firstUserCommandIndex = commandHistory.value.findIndex(cmd => 
                !initialCommands.includes(cmd.command)
              )
              commandHistory.value.splice(firstUserCommandIndex, 1)
            }
          } else if (currentCommand.value === 'help') {
            newEntry.output = `Available commands:
    
    ifetch          Display system information and profile
    about           Show information about me
    projects        View my projects
    exp             View my experience
    help            Show this help message
    clear           Clear the terminal (Ctrl+L)
    
    Type a command and press Enter to execute`
            commandHistory.value.push(newEntry)
            
            const userCommands = commandHistory.value.filter(cmd => 
              !initialCommands.includes(cmd.command)
            )
            if (userCommands.length > MAX_HISTORY) {
              const firstUserCommandIndex = commandHistory.value.findIndex(cmd => 
                !initialCommands.includes(cmd.command)
              )
              commandHistory.value.splice(firstUserCommandIndex, 1)
            }
          } else if (currentCommand.value === 'about') {
            newEntry.output = t('about.bio')
            commandHistory.value.push(newEntry)
            if (commandHistory.value.length > MAX_HISTORY) {
              commandHistory.value.shift()
            }
          } else if (currentCommand.value === 'projects') {
            const projectsList = projectsData.map(project => {
              return `${project.title[locale.value]}
    • ${project.description[locale.value]}
    • Demo: ${project.demo}
    • Github: ${project.github}
    `
            }).join('\n')
            
            newEntry.output = `My Projects:\n\n${projectsList}`
            commandHistory.value.push(newEntry)
            if (commandHistory.value.length > MAX_HISTORY) {
              commandHistory.value.shift()
            }
          } else if (currentCommand.value === 'exp') {
            const education = experiencesData.education.items.item1
            const work = Object.values(experiencesData.work.items)
            
            let output = `Education:
    ${education.degree}
    ${education.school}, ${education.location}
    ${education.duration}
    • ${education.details.detail1}
    • ${education.details.detail2}
    
    Work Experience:\n`
    
            work.forEach(job => {
              output += `\n${job.title}
    ${job.company}, ${job.location}
    ${job.duration}
    ${Object.values(job.responsibilities).map(resp => `• ${resp}`).join('\n')}\n`
            })
            
            newEntry.output = output
            commandHistory.value.push(newEntry)
            if (commandHistory.value.length > MAX_HISTORY) {
              commandHistory.value.shift()
            }
          } else if (currentCommand.value === 'clear') {
            clearTerminal()
            return
          }
        }
    
        currentCommand.value = ''
        cursorPosition.value = 0
        isExecuting.value = false
    
        nextTick(() => {
          terminalContent.value?.scrollTo({
            top: terminalContent.value.scrollHeight,
            behavior: 'smooth'
          })
        })
      } else if (e.key === 'Backspace') {
        e.preventDefault()
        if (cursorPosition.value > 0) {
          currentCommand.value = 
            currentCommand.value.slice(0, cursorPosition.value - 1) + 
            currentCommand.value.slice(cursorPosition.value)
          cursorPosition.value--
        }
      } else if (e.key.length === 1 && !e.ctrlKey) {
        e.preventDefault()
        currentCommand.value = 
          currentCommand.value.slice(0, cursorPosition.value) + 
          e.key + 
          currentCommand.value.slice(cursorPosition.value)
        cursorPosition.value++
      }
    }
    
    const clearTerminal = () => {
      commandHistory.value = []
      currentCommand.value = ''
      cursorPosition.value = 0
      isExecuting.value = false
      terminalContent.value?.focus()
    }
    
    const copyEmail = async () => {
      try {
        await navigator.clipboard.writeText('briann2305@gmail.com')
        const originalCommand = currentCommand.value
        currentCommand.value = 'Email copied to clipboard!'
        setTimeout(() => {
          currentCommand.value = originalCommand
        }, 2000)
      } catch (err) {
        console.error('Failed to copy email')
      }
    }
    
    const runCommand = (cmd) => {
      currentCommand.value = cmd
      const e = { key: 'Enter' }
      handleKeyPress(e)
    }
    
    const handleSelection = () => {
      if (inputRef.value) {
        cursorPosition.value = inputRef.value.selectionStart || 0
      }
    }
    
    const scrollToBottom = () => {
      nextTick(() => {
        if (terminalContent.value) {
          terminalContent.value.scrollTop = terminalContent.value.scrollHeight
        }
      })
    }
    
    const toggleTerminal = () => {
      if (isMinimized.value) {
        isTerminalVisible.value = true
        isMinimized.value = false
        scrollToBottom()
      } else {
        openTerminal()
      }
    }
    
    const closeTerminal = () => {
      isTerminalVisible.value = false
      isMinimized.value = false
      position.value = { x: 'calc(50% - 450px)', y: 'calc(50% - 300px)' }
      size.value = { width: 900, height: 600 }
    }
    
    const openTerminal = () => {
      if (isMinimized.value) {
        isTerminalVisible.value = true
        isMinimized.value = false
        scrollToBottom()
      } else {
        isTerminalVisible.value = true
        position.value = { x: 'calc(50% - 450px)', y: 'calc(50% - 300px)' }
        size.value = { width: 900, height: 600 }
        initializeTerminal()
      }
    }
    
    onMounted(() => {
      terminalContent.value?.focus()
      scrollToBottom()
    })
    
    const initializeTerminal = () => {
      commandHistory.value = [
        {
          command: 'ifetch',
          showNeofetch: true
        },
        {
          command: 'init',
          output: 'Type \'help\' for a list of available commands.'
        }
      ]
      currentCommand.value = ''
      cursorPosition.value = 0
      isExecuting.value = false
      nextTick(() => {
        terminalContent.value?.focus()
      })
    }
    
    const minimizeTerminal = () => {
      isTerminalVisible.value = false
      isMinimized.value = true
    }
    
    const maximizeTerminal = () => {
      if (isMaximized.value) {
        // Restore previous state
        position.value = { ...previousState.value.position }
        size.value = { ...previousState.value.size }
        isMaximized.value = false
      } else {
        // Save current state
        previousState.value = {
          position: { ...position.value },
          size: { ...size.value }
        }
        // Maximize
        position.value = { x: 0, y: 0 }
        size.value = {
          width: window.innerWidth,
          height: window.innerHeight - 32 // Subtract header height
        }
        isMaximized.value = true
      }
    }
    
    // Dragging logic
    const startDrag = (e) => {
      if (e.target.closest('.window-controls') || isMaximized.value) return
      
      isDragging.value = true
      dragOffset.value = {
        x: e.clientX - terminalWindow.value.offsetLeft,
        y: e.clientY - terminalWindow.value.offsetTop
      }
      document.addEventListener('mousemove', handleDrag)
      document.addEventListener('mouseup', stopDrag)
    }
    
    const handleDrag = (e) => {
      if (!isDragging.value) return
      
      const newX = e.clientX - dragOffset.value.x
      const newY = e.clientY - dragOffset.value.y
      
      // Prevent dragging outside viewport
      position.value = {
        x: Math.max(0, Math.min(newX, window.innerWidth - size.value.width)),
        y: Math.max(0, Math.min(newY, window.innerHeight - size.value.height))
      }
    }
    
    const stopDrag = () => {
      isDragging.value = false
      document.removeEventListener('mousemove', handleDrag)
      document.removeEventListener('mouseup', stopDrag)
    }
    
    // Resize logic
    const isResizing = ref(false)
    
    const startResize = (edge, e) => {
      if (isMaximized.value) return
      e.preventDefault()
      resizeEdge.value = edge
      isResizing.value = true
      document.addEventListener('mousemove', handleResize)
      document.addEventListener('mouseup', stopResize)
    }
    
    const handleResize = (e) => {
      if (!isResizing.value || !terminalWindow.value) return

      const rect = terminalWindow.value.getBoundingClientRect()
      const minWidth = 600
      const minHeight = 400
      let newWidth, newHeight, deltaX, deltaXBL, newWidthBL, newHeightBL

      switch (resizeEdge.value) {
        case 'right':
          newWidth = Math.max(minWidth, e.clientX - rect.left)
          size.value.width = newWidth
          break
          
        case 'bottom':
          newHeight = Math.max(minHeight, e.clientY - rect.top)
          size.value.height = newHeight
          break
          
        case 'left':
          deltaX = rect.left - e.clientX
          newWidth = Math.max(minWidth, rect.width + deltaX)
          if (newWidth >= minWidth) {
            position.value.x = e.clientX
            size.value.width = newWidth
          }
          break
          
        case 'bottom-left':
          deltaXBL = rect.left - e.clientX
          newWidthBL = Math.max(minWidth, rect.width + deltaXBL)
          newHeightBL = Math.max(minHeight, e.clientY - rect.top)
          if (newWidthBL >= minWidth) {
            position.value.x = e.clientX
            size.value.width = newWidthBL
          }
          size.value.height = newHeightBL
          break
          
        case 'bottom-right':
          size.value.width = Math.max(minWidth, e.clientX - rect.left)
          size.value.height = Math.max(minHeight, e.clientY - rect.top)
          break
      }
    }
    
    const stopResize = () => {
      isResizing.value = false
      resizeEdge.value = null
      document.removeEventListener('mousemove', handleResize)
      document.removeEventListener('mouseup', stopResize)
    }
    
    onUnmounted(() => {
      document.removeEventListener('mousemove', handleDrag)
      document.removeEventListener('mouseup', stopDrag)
      document.removeEventListener('mousemove', handleResize)
      document.removeEventListener('mouseup', stopResize)
    })
    </script>
    
    <style scoped>
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    .animate-blink {
      animation: blink 1s step-end infinite;
    }
    
    .v2-page {
      background-color: #1a1b26 !important;
    }
    
    :root,
    html,
    body {
      background-color: #2e1f40 !important;
      min-height: 100vh;
      margin: 0;
      padding: 0;
    }
    
    canvas {
      cursor: grab;
    }
    
    canvas:active {
      cursor: grabbing;
    }
    
    .whitespace-pre-wrap {
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-word;
    }
    
    [contenteditable] {
      outline: none;
      caret-color: var(--text-primary);
    }
    
    [contenteditable]::selection {
      background: var(--accent);
      color: var(--bg-primary);
    }
    
    input {
      font-family: inherit;
      font-size: inherit;
    }
    
    input::selection {
      background: var(--accent);
      color: var(--bg-primary);
    }
    
    .cursor-text {
      letter-spacing: normal;
      user-select: none;
    }
    
    .h-screen {
      height: 100vh;
      min-height: 100vh;
    }
    
    .w-screen {
      width: 100vw;
      min-width: 100vw;
    }
    
    .window-controls {
      z-index: 10;
    }
    
    /* Optional: Add visual indicator for resize handle */
    [class*="cursor-se-resize"]::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 0 10px 10px;
      border-color: transparent transparent rgba(255,255,255,0.2) transparent;
    }
    
    .max-w-full {
      max-width: 100%;
    }
    
    .whitespace-pre {
      white-space: pre;
    }
    
    .overflow-x-auto {
      overflow-x: auto;
    }
    
    /* Add responsive styles for ifetch */
    .flex-wrap {
      flex-wrap: wrap;
    }
    
    .min-w-[200px] {
      min-width: 200px;
    }
    
    .min-w-[300px] {
      min-width: 300px;
    }
    
    /* Resize handles */
    .resize-handle {
      position: absolute;
      z-index: 1;
    }
    
    .resize-handle.left {
      left: -4px;
      top: 0;
      width: 8px;
      height: 100%;
      cursor: ew-resize;
    }
    
    .resize-handle.right {
      right: -4px;
      top: 0;
      width: 8px;
      height: 100%;
      cursor: ew-resize;
    }
    
    .resize-handle.bottom {
      bottom: -4px;
      left: 8px;
      right: 8px;
      height: 8px;
      cursor: ns-resize;
    }
    
    .resize-handle.bottom-left {
      bottom: -4px;
      left: -4px;
      width: 12px;
      height: 12px;
      cursor: sw-resize;
    }
    
    .resize-handle.bottom-right {
      bottom: -4px;
      right: -4px;
      width: 12px;
      height: 12px;
      cursor: se-resize;
    }
    
    /* Make handles more visible on hover (optional) */
    .resize-handle:hover::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1);
    }
    
    .transform.rotate-180 {
      transform: rotate(180deg);
    }
    </style> 