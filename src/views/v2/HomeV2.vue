<template>
  <div 
    class="absolute inset-0 bg-[var(--bg-primary)] flex flex-col"
    :style="appStyles"
  >
    <HeaderV2 
      @open-terminal="openTerminal" 
      @toggle-terminal="toggleTerminal"
      @open-drawing="openDrawing"
      @toggle-drawing="toggleDrawing"
      @theme-switch="handleThemeSwitch"
      @language-switch="handleLanguageSwitch"
      :isMinimized="isMinimized"
      :isTerminalExists="isTerminalExists"
      :isDrawingMinimized="isDrawingMinimized"
      :isDrawingExists="isDrawingExists"
    />
    <div class="flex-1 relative" style="background-image: url('/images/termbg.jpg'); background-size: cover; background-position: center;">
      <!-- Desktop Icon -->
      <div 
        class="absolute top-4 left-4 flex flex-col items-center gap-1 p-2 rounded cursor-pointer group desktop-icon"
        @click="handleIconClick"
        @dblclick="openTerminal"
      >
        <CommandLineIcon 
          class="w-10 h-10 text-[#93a1a1] group-hover:text-[#eee8d5]"
        />
        <span class="text-[#93a1a1] text-xs group-hover:text-[#eee8d5] text-center max-w-[96px] px-1">
          Terminal
        </span>
      </div>

      <!-- Drawing App Icon -->
      <div 
        class="absolute top-28 left-4 flex flex-col items-center gap-1 p-2 rounded cursor-pointer group desktop-icon hidden xl:flex"
        @click="handleDrawingIconClick"
        @dblclick="openDrawing"
      >
        <PencilSquareIcon 
          class="w-10 h-10 text-[#93a1a1] group-hover:text-[#eee8d5]"
        />
        <span class="text-[#93a1a1] text-xs group-hover:text-[#eee8d5] text-center max-w-[96px] px-1">
          Drawing
        </span>
      </div>

      <!-- Terminal Window -->
      <div 
        v-if="isTerminalVisible" 
        ref="terminalWindow"
        class="absolute shadow-xl overflow-hidden bg-[#002b36]"
        :style="{
          left: typeof position.x === 'number' ? `${position.x}px` : position.x,
          top: typeof position.y === 'number' ? `${position.y}px` : position.y,
          width: `${size.width}px`,
          height: `${size.height}px`,
          zIndex: terminalZIndex
        }"
        @mousedown="focusTerminal"
      >
        <!-- Resize Handles - removed top edge -->
        <div class="resize-handle resize-e" @mousedown="(e) => startResize('e', e)"></div>
        <div class="resize-handle resize-w" @mousedown="(e) => startResize('w', e)"></div>
        <div class="resize-handle resize-s" @mousedown="(e) => startResize('s', e)"></div>
        <div class="resize-handle resize-se" @mousedown="(e) => startResize('se', e)"></div>
        <div class="resize-handle resize-sw" @mousedown="(e) => startResize('sw', e)"></div>
        
        <!-- Terminal Header -->
        <div 
          class="h-8 flex items-center relative select-none bg-[var(--bg-primary)]"
          @mousedown="startDrag"
          @touchstart="startDrag"
          :style="{ cursor: isDragging ? 'grabbing' : 'grab' }"
        >
          <!-- Add mobile drag handle -->
          <div 
            v-if="windowWidth <= 1024" 
            class="absolute left-2 top-1/2 -translate-y-1/2 lg:hidden cursor-grab active:cursor-grabbing"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--text-secondary)]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM7 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
              <path d="M13 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>
          </div>
          
          <!-- Centered text -->
          <div class="absolute w-full text-center text-[var(--accent)] text-sm pointer-events-none">
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
          ref="terminalContent"
          id="terminal-content"
          class="p-6 font-mono text-sm overflow-y-auto bg-[var(--bg-secondary)] touch-pan-y"
          :style="{ height: `calc(${size.height}px - 32px)` }"
          @keydown="handleKeyPress"
          @keyup="handleSelection"
          @click="handleSelection"
          @touchstart="handleMobileInput"
          @touchmove.passive="handleTouchScroll"
          tabindex="0" 
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
                     class="hover:text-[var(--accent-orange)] transition-colors duration-300">
                    telga (link)
                  </a>
                </div>
                <div>
                  <span class="text-[var(--accent)]">Email: </span>
                  <button 
                    @click="copyEmail" 
                    class="hover:text-[var(--accent-orange)] transition-colors duration-300"
                  >briann2305@gmail.com (link)</button>
                </div>
                <div>
                  <span class="text-[var(--accent)]">LinkedIn: </span>
                  <a href="https://www.linkedin.com/in/bnguy23/" target="_blank" 
                     class="hover:text-[var(--accent-orange)] transition-colors duration-300">
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
                      class="text-[var(--accent-secondary)] hover:text-[var(--accent-orange)] transition-colors duration-300"
                    >about</button>
                    <span class="text-[var(--text-secondary)]">|</span>
                    <button 
                      @click="runCommand('projects')" 
                      class="text-[var(--accent-secondary)] hover:text-[var(--accent-orange)] transition-colors duration-300"
                    >projects</button>
                    <span class="text-[var(--text-secondary)]">|</span>
                    <button 
                      @click="runCommand('exp')" 
                      class="text-[var(--accent-secondary)] hover:text-[var(--accent-orange)] transition-colors duration-300"
                    >experience</button>
                  </div>
                </div>
                <div>
                  <span class="text-[var(--accent)]">Language: </span>
                  <span class="text-[var(--accent-secondary)]">{{ locale === 'en' ? 'English' : '日本語' }}</span>
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
          
          <!-- Add hidden input for mobile -->
          <input
            ref="mobileInput"
            type="text"
            class="opacity-0 absolute left-0 w-1 h-1 -z-10"
            :value="currentCommand"
            @input="handleMobileKeyInput"
            @focus="handleMobileFocus"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
          />
        </div>
      </div>

      <!-- Drawing Window -->
      <DrawingWindow
        v-if="isDrawingExists"
        v-show="isDrawingVisible"
        v-model:position="drawingPosition"
        v-model:size="drawingSize"
        :isMaximized="isDrawingMaximized"
        :windowWidth="windowWidth"
        @minimize="minimizeDrawing"
        @maximize="maximizeDrawing"
        @close="closeDrawing"
        @mousedown="focusDrawing"
        :style="{ zIndex: drawingZIndex }"
      />

      <!-- Update modal component -->
      <Transition name="fade">
        <div 
          v-if="showRotateModal" 
          class="fixed inset-0 z-50 flex items-center justify-center"
        >
          <!-- Frosted backdrop -->
          <div 
            class="absolute inset-0 bg-[var(--bg-primary)] bg-opacity-80 backdrop-blur-sm"
            @click="showRotateModal = false"
          ></div>
          
          <!-- Modal content - centered in current viewport -->
          <div 
            class="relative bg-[var(--bg-secondary)] border border-[var(--accent)] rounded-lg p-8 w-[90%] max-w-[400px]"
            style="background: rgba(var(--bg-secondary-rgb), 0.95)"
          >
            <div class="text-[var(--text-primary)] text-center">
              <h2 class="text-xl font-medium mb-6">Device Orientation Notice</h2>
              <p class="mb-8 text-lg">On smaller screen size devices please rotate your device to landscape mode. (this will probably not work on mobile)</p>
              <button 
                @click="showRotateModal = false"
                class="px-6 py-3 bg-[var(--accent)] text-[var(--bg-primary)] rounded-md hover:opacity-90 transition-opacity text-lg"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
    
    <script setup>
    import { ref, nextTick, onMounted, onUnmounted, watch, computed } from 'vue'
    import { useRouter } from 'vue-router'
    import { useTheme } from '@/utils/useTheme'
    import experiencesData from '@/data/experiencesData.js'
    import projectsData from '@/data/projects.json'
    import { useI18n } from 'vue-i18n'
    import HeaderV2 from '@/components/HeaderV2.vue'
    import { MinusSmallIcon, Square2StackIcon, XMarkIcon, CommandLineIcon, PencilSquareIcon } from '@heroicons/vue/24/outline'
    import DrawingWindow from '@/components/DrawingWindow.vue'
    import { useToast } from 'vue-toastification'

    const router = useRouter()
    const { currentTheme } = useTheme()

    const MIN_WIDTH = window.innerWidth < 768 ? window.innerWidth : 600
    const MIN_HEIGHT = window.innerWidth < 768 ? window.innerHeight - 48 : 350
    
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
    const resizeDirection = ref(null)
    const resizeStartPos = ref(null)
    const isMaximized = ref(false)
    const lastWindowState = ref({
      position: null,
      size: null
    })
    const selectedIcon = ref(false)
    const lastPosition = ref({ x: 'calc(50% - 450px)', y: 'calc(50% - 300px)' })
    const lastSize = ref({ width: 900, height: 600 })
    const isResizing = ref(false)
    const historyIndex = ref(-1)
    const commandBuffer = ref('')  // Store current command when navigating history
    
    const isTerminalExists = computed(() => isTerminalVisible.value || isMinimized.value)
    
    const validCommands = [
      'ifetch', 
      'help', 
      'about', 
      'projects', 
      'exp', 
      'clear', 
      'switchtheme', 
      'regsite',
      'switchlang',
      'curlang'
    ]

    const handleKeyPress = (e) => {
      const isOnMobile = window.innerWidth <= 1024
      
      if (isOnMobile && e.key === 'Unidentified') {
        return
      }
      
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
        const validCommands = ['ifetch', 'help', 'about', 'projects', 'exp', 'clear', 'switchtheme', 'regsite', 'switchlang', 'curlang']
    
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
    
    ifetch          Display profile
    about           Show about information
    projects        View my projects
    exp             View my experience
    help            Show this help message
    clear           Clear the terminal (Ctrl+L)
    switchtheme     Switch between nord and solarized themes
    switchlang      Switch between English and Japanese
    curlang         Show current language setting
    regsite         Go to regular site
    
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
            newEntry.output = t('about.bio', { locale: 'en' })
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
            
            let output = `Work Experience:\n`
    
            Object.keys(experiencesData.work.items).forEach(key => {
              const job = experiencesData.work.items[key]
              output += `\n${t(`experiences.work.items.${key}.title`, { locale: locale.value })}
${t(`experiences.work.items.${key}.company`, { locale: locale.value })}, ${t(`experiences.work.items.${key}.location`, { locale: locale.value })}
${job.duration}
${Object.keys(job.responsibilities).map(respKey => 
  `• ${t(`experiences.work.items.${key}.responsibilities.${respKey}`, { locale: locale.value })}`
).join('\n')}\n`
            })
            
            newEntry.output = output
            commandHistory.value.push(newEntry)
            if (commandHistory.value.length > MAX_HISTORY) {
              commandHistory.value.shift()
            }
          } else if (currentCommand.value === 'switchtheme') {
            const newTheme = currentTheme.value === 'nord' ? 'solarized' : 'nord'
            localStorage.setItem('theme', newTheme)
            newEntry.output = `Switching to ${newTheme} theme...`
            commandHistory.value.push(newEntry)
            
            // Store terminal state before refresh
            localStorage.setItem('terminalFocused', 'true')
            
            window.location.reload()
          } else if (currentCommand.value === 'regsite') {
            newEntry.output = 'Redirecting to regular site...'
            commandHistory.value.push(newEntry)
            setTimeout(() => {
              router.push('/')
            }, 500)
          } else if (currentCommand.value === 'clear') {
            clearTerminal()
            return
          } else if (currentCommand.value === 'switchlang') {
            const newLang = locale.value === 'en' ? 'jp' : 'en'
            locale.value = newLang
            newEntry.output = `Switching to ${newLang === 'en' ? 'English' : '日本語'}...`
            commandHistory.value.push(newEntry)
          } else if (currentCommand.value === 'curlang') {
            newEntry.output = `Current language: ${locale.value === 'en' ? 'English' : '日本語'}`
            commandHistory.value.push(newEntry)
            if (commandHistory.value.length > MAX_HISTORY) {
              commandHistory.value.shift()
            }
          }
        }
    
        currentCommand.value = ''
        cursorPosition.value = 0
        isExecuting.value = false
    
        nextTick(() => {
          if (terminalContent.value) {
            // Force a reflow to ensure accurate scrollHeight
            terminalContent.value.style.display = 'none'
            terminalContent.value.offsetHeight // Force reflow
            terminalContent.value.style.display = ''
            
            // Scroll after reflow with smooth behavior
            terminalContent.value.scrollTo({
              top: terminalContent.value.scrollHeight,
              behavior: 'smooth'
            })
          }
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
    
      if (e.key === 'ArrowUp') {
        e.preventDefault()
        // Save current command if we're just starting to navigate
        if (historyIndex.value === -1) {
          commandBuffer.value = currentCommand.value
        }
        
        // Get user commands only (exclude initial commands)
        const userCommands = commandHistory.value
          .filter(entry => !initialCommands.includes(entry.command))
          .map(entry => entry.command)
          .slice(-10)  // Keep only last 10 commands
        
        if (userCommands.length > 0 && historyIndex.value < userCommands.length - 1) {
          historyIndex.value++
          currentCommand.value = userCommands[userCommands.length - 1 - historyIndex.value]
          cursorPosition.value = currentCommand.value.length
        }
        return
      }
    
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (historyIndex.value > -1) {
          historyIndex.value--
          if (historyIndex.value === -1) {
            currentCommand.value = commandBuffer.value
          } else {
            const userCommands = commandHistory.value
              .filter(entry => !initialCommands.includes(entry.command))
              .map(entry => entry.command)
              .slice(-10)
            currentCommand.value = userCommands[userCommands.length - 1 - historyIndex.value]
          }
          cursorPosition.value = currentCommand.value.length
        }
        return
      }
    
      // Reset history index when typing new command
      if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Delete') {
        historyIndex.value = -1
      }
    
      // Add tab completion
      if (e.key === 'Tab') {
        e.preventDefault()
        if (currentCommand.value) {
          const matches = validCommands.filter(cmd => 
            cmd.startsWith(currentCommand.value.toLowerCase())
          )
          if (matches.length === 1) {
            currentCommand.value = matches[0]
            cursorPosition.value = matches[0].length
          }
        }
        return
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
        toast.success('Email copied to clipboard!', {
          timeout: 2000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          hideProgressBar: true,
          icon: false,
          position: "bottom-right",
          containerClassName: "terminal-toast-container",
          style: { marginTop: "52px" }
        })
      } catch (err) {
        console.error('Failed to copy email')
      }
    }
    
    const runCommand = (cmd) => {
      currentCommand.value = cmd
      const e = { key: 'Enter' }
      handleKeyPress(e)
      nextTick(() => {
        terminalContent.value?.focus() // Focus terminal after command execution
      })
    }
    
    const handleSelection = () => {
      if (inputRef.value) {
        cursorPosition.value = inputRef.value.selectionStart || 0
      }
    }
    
    const scrollToBottom = () => {
      if (terminalContent.value) {
        // Force a reflow to ensure accurate scrollHeight
        terminalContent.value.style.display = 'none'
        terminalContent.value.offsetHeight // Force reflow
        terminalContent.value.style.display = ''
        
        // Use same scrolling behavior for both mobile and desktop
        terminalContent.value.scrollTop = terminalContent.value.scrollHeight
      }
    }
    
    const toggleTerminal = () => {
      if (isMinimized.value) {
        isTerminalVisible.value = true
        isMinimized.value = false
        focusTerminal()
        
        // Force multiple scroll attempts with reflow
        setTimeout(() => {
          const content = document.querySelector('#terminal-content')
          if (content) {
            // Force a reflow
            content.style.display = 'none'
            content.offsetHeight // Force reflow
            content.style.display = ''
            
            // Scroll after reflow
            content.scrollTop = content.scrollHeight
            content.focus()
          }
        }, 10)
      } else if (isTerminalVisible.value) {
        focusTerminal()
      }
    }
    
    const closeTerminal = () => {
      isTerminalExists.value = false
      isTerminalVisible.value = false
      isMinimized.value = false
      cursorPosition.value = 0
      currentCommand.value = ''
      commandHistory.value = []  // Optional: clear command history
    }
    
    const openTerminal = () => {
      isTerminalExists.value = true
      isTerminalVisible.value = true
      isMinimized.value = false
      cursorPosition.value = 0
      position.value = initialPosition.value
      size.value = initialSize.value
      
      // Initialize terminal if it's empty
      if (commandHistory.value.length === 0) {
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
      }
      
      focusTerminal()
      nextTick(() => {
        const terminalContent = document.querySelector('#terminal-content')
        if (terminalContent) {
          terminalContent.focus()
          // Force a reflow to ensure accurate scrollHeight
          terminalContent.style.display = 'none'
          terminalContent.offsetHeight // Force reflow
          terminalContent.style.display = ''
          
          // Scroll after reflow with smooth behavior
          terminalContent.scrollTo({
            top: terminalContent.scrollHeight,
            behavior: 'smooth'
          })
        }
      })
    }
    
    onMounted(() => {
      // Initialize terminal on startup
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

      // Focus terminal immediately and check stored state
      nextTick(() => {
        const content = document.querySelector('#terminal-content')
        if (content) {
          content.focus()
          
          // Force a reflow to ensure accurate scrollHeight
          content.style.display = 'none'
          content.offsetHeight // Force reflow
          content.style.display = ''
          
          // Scroll to bottom
          content.scrollTop = content.scrollHeight

          // Check if we're coming back from a theme switch
          const wasTerminalFocused = localStorage.getItem('terminalFocused')
          if (wasTerminalFocused) {
            content.focus()
            localStorage.removeItem('terminalFocused') // Clean up
          }
        }
      })

      // Initial check for modal - only on page load for smaller screens
      if (window.innerWidth <= 1024) { // Tablet and smaller
        showRotateModal.value = window.innerHeight > window.innerWidth
      }

      const handleResize = () => {
        if (window.innerWidth <= 1024 && window.innerWidth > window.innerHeight) {
          // Update size for mobile/tablet landscape
          const pageHeight = document.querySelector('.flex-1')?.clientHeight || window.innerHeight
          size.value = {
            width: Math.min(800, window.innerWidth - 80),
            height: pageHeight - 88
          }
          position.value = {
            x: `calc(50% - ${size.value.width / 2}px)`,
            y: `calc(50% - ${size.value.height / 2}px)`
          }

          // Scroll to bottom after resize
          nextTick(() => {
            const content = document.querySelector('#terminal-content')
            if (content) {
              // Force a reflow
              content.style.display = 'none'
              content.offsetHeight // Force reflow
              content.style.display = ''
              
              // Scroll after reflow
              content.scrollTop = content.scrollHeight
              content.focus()
            }
          })
        }

        // Handle drawing window size for smaller views
        if (window.innerWidth <= 1024 && window.innerWidth > window.innerHeight) {
          const pageHeight = document.querySelector('.flex-1')?.clientHeight || window.innerHeight
          drawingSize.value = {
            width: Math.min(700, window.innerWidth - 80),
            height: pageHeight - 88
          }
          drawingPosition.value = {
            x: Math.max(60, (window.innerWidth - drawingSize.value.width) / 2),
            y: Math.max(60, (pageHeight - drawingSize.value.height) / 2)
          }
        } else {
          // Reset to default size for desktop
          drawingSize.value = { width: 800, height: 600 }
          drawingPosition.value = { x: 120, y: 120 }
        }
      }

      // Initial size setup
      handleResize()

      // Use consistent scroll behavior for both mobile and desktop
      nextTick(() => {
        const content = document.querySelector('#terminal-content')
        if (content) {
          // Force a reflow to ensure accurate scrollHeight
          content.style.display = 'none'
          content.offsetHeight // Force reflow
          content.style.display = ''
          
          content.scrollTop = content.scrollHeight
        }
      })

      window.addEventListener('resize', handleResize)
      
      onUnmounted(() => {
        window.removeEventListener('resize', handleResize)
      })
    })
    
    onUnmounted(() => {
      window.removeEventListener('keydown', handleGlobalKeyPress)
      document.removeEventListener('mousemove', handleDrag)
      document.removeEventListener('mouseup', stopDrag)
      document.removeEventListener('mousemove', handleResize)
      document.removeEventListener('mouseup', stopResize)
      
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
    })
    
    // const initializeTerminal = () => {
    //   commandHistory.value = [
    //     {
    //       command: 'ifetch',
    //       showNeofetch: true
    //     },
    //     {
    //       command: 'init',
    //       output: 'Type \'help\' for a list of available commands.'
    //     }
    //   ]
    //   currentCommand.value = ''
    //   cursorPosition.value = 0
    //   isExecuting.value = false
    //   nextTick(() => {
    //     terminalContent.value?.focus()
    //   })
    
    const minimizeTerminal = () => {
      lastPosition.value = { ...position.value }
      lastSize.value = { ...size.value }
      isMinimized.value = true
      isTerminalVisible.value = false
    }
    
    const maximizeTerminal = () => {
      if (isMaximized.value) {
        // Restore to previous state
        if (lastWindowState.value.position && lastWindowState.value.size) {
          position.value = { ...lastWindowState.value.position }
          size.value = { ...lastWindowState.value.size }
        }
        isMaximized.value = false
        nextTick(() => {
          scrollToBottom()
          terminalContent.value?.focus() // Focus terminal after unmaximizing
        })
      } else {
        // Save current state
        lastWindowState.value = {
          position: { ...position.value },
          size: { ...size.value }
        }
        
        const pageHeight = document.querySelector('.flex-1')?.clientHeight || window.innerHeight
        
        // Maximize to page size
        position.value = { x: 0, y: 0 }
        size.value = {
          width: window.innerWidth,
          height: pageHeight // Subtract header height only when maximized
        }
        isMaximized.value = true
        nextTick(() => {
          scrollToBottom()
          terminalContent.value?.focus() // Focus terminal after maximizing
        })
      }
    }
    
    // Dragging logic
    const startDrag = (e) => {
      if (e.target.closest('.window-controls') || isMaximized.value) return
      
      isDragging.value = true
      const touch = e.touches ? e.touches[0] : e
      dragOffset.value = {
        x: touch.clientX - terminalWindow.value.offsetLeft,
        y: touch.clientY - terminalWindow.value.offsetTop
      }
      
      if (e.touches) {
        document.addEventListener('touchmove', handleDrag, { passive: false })
        document.addEventListener('touchend', stopDrag)
      } else {
        document.addEventListener('mousemove', handleDrag)
        document.addEventListener('mouseup', stopDrag)
      }
    }
    
    const handleDrag = (e) => {
      if (!isDragging.value) return
      e.preventDefault() // Prevent scrolling on mobile
      
      const touch = e.touches ? e.touches[0] : e
      const newX = touch.clientX - dragOffset.value.x
      const newY = touch.clientY - dragOffset.value.y
      
      position.value = {
        x: Math.max(0, Math.min(newX, window.innerWidth - size.value.width)),
        y: Math.max(0, Math.min(newY, window.innerHeight - size.value.height))
      }
    }
    
    const stopDrag = () => {
      isDragging.value = false
      document.removeEventListener('touchmove', handleDrag)
      document.removeEventListener('touchend', stopDrag)
      document.removeEventListener('mousemove', handleDrag)
      document.removeEventListener('mouseup', stopDrag)
    }
    
    // Resize logic
    const startResize = (direction, e) => {
      if (!e) return
      
      isResizing.value = true
      resizeDirection.value = direction
      
      const touch = e.touches ? e.touches[0] : e
      const rect = terminalWindow.value.getBoundingClientRect()
      resizeStartPos.value = {
        x: touch.clientX,
        y: touch.clientY,
        width: rect.width,
        height: rect.height,
        left: rect.left,
      }
      
      if (e.touches) {
        document.addEventListener('touchmove', handleResize, { passive: false })
        document.addEventListener('touchend', stopResize)
      } else {
        document.addEventListener('mousemove', handleResize)
        document.addEventListener('mouseup', stopResize)
      }
    }
    
    const handleResize = (e) => {
      if (!isResizing.value || !resizeStartPos.value) return
      e.preventDefault() // Prevent scrolling on mobile

      const touch = e.touches ? e.touches[0] : e
      const deltaX = touch.clientX - resizeStartPos.value.x
      const deltaY = touch.clientY - resizeStartPos.value.y

      const isOnMobile = window.innerWidth <= 1024
      const pageHeight = document.querySelector('.flex-1')?.clientHeight || window.innerHeight

      // Calculate new size with constraints
      const newWidth = Math.max(MIN_WIDTH, resizeStartPos.value.width + deltaX)
      const newHeight = Math.max(MIN_HEIGHT, resizeStartPos.value.height + deltaY)

      // Apply mobile-specific constraints
      if (isOnMobile) {
        size.value = {
          width: Math.min(newWidth, window.innerWidth - 40), // Leave some margin
          height: Math.min(newHeight, pageHeight - 48) // Account for header
        }
      } else {
        size.value = {
          width: newWidth,
          height: newHeight
        }
      }

      nextTick(() => scrollToBottom())
    }
    
    const stopResize = () => {
      isResizing.value = false
      resizeDirection.value = null
      resizeStartPos.value = null
      document.removeEventListener('touchmove', handleResize)
      document.removeEventListener('touchend', stopResize)
      document.removeEventListener('mousemove', handleResize)
      document.removeEventListener('mouseup', stopResize)
    }
    
    const handleIconClick = () => {
      selectedIcon.value = true
      // Deselect when clicking elsewhere
      const handleClickOutside = (e) => {
        if (!e.target.closest('.desktop-icon')) {
          selectedIcon.value = false
          document.removeEventListener('click', handleClickOutside)
        }
      }
      // Add timeout to prevent immediate deselection
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside)
      }, 0)
    }
    
    watch(selectedIcon, (newValue) => {
      const icon = document.querySelector('.desktop-icon')
      if (newValue) {
        icon.classList.add('selected')
      } else {
        icon.classList.remove('selected')
      }
    })
    
    const handleGlobalKeyPress = (e) => {
      // Check if terminal is open and Ctrl+W is pressed
      if (isTerminalVisible.value && e.ctrlKey && e.key === 'w') {
        e.preventDefault() // Prevent browser default behavior
        closeTerminal()
      }
    }
    
    // Drawing window state
    const isDrawingVisible = ref(false)
    const isDrawingExists = ref(false)
    const isDrawingMinimized = ref(false)
    const drawingPosition = ref({ x: 120, y: 120 })
    const drawingSize = ref({ width: 800, height: 600 })
    const isDrawingMaximized = ref(false)

    // Drawing window management
    const openDrawing = () => {
      isDrawingExists.value = true
      isDrawingVisible.value = true
      isDrawingMinimized.value = false
      
      // Set initial size based on screen size
      if (windowWidth.value <= 1024) {
        const pageHeight = document.querySelector('.flex-1')?.clientHeight || window.innerHeight
        drawingSize.value = {
          width: Math.min(700, window.innerWidth - 80),
          height: pageHeight - 88
        }
        drawingPosition.value = {
          x: Math.max(60, (window.innerWidth - drawingSize.value.width) / 2),
          y: Math.max(60, (pageHeight - drawingSize.value.height) / 2)
        }
      } else {
        drawingPosition.value = { x: 120, y: 120 }
        drawingSize.value = { width: 800, height: 600 }
      }
      
      focusDrawing()
    }

    const closeDrawing = () => {
      isDrawingExists.value = false
      isDrawingVisible.value = false
      isDrawingMinimized.value = false
      isDrawingMaximized.value = false
    }

    const minimizeDrawing = () => {
      isDrawingVisible.value = false
      isDrawingMinimized.value = true
    }

    const lastDrawingState = ref({
  position: { x: 120, y: 120 },
      size: { width: 800, height: 600 }
    })

    const maximizeDrawing = () => {
      isDrawingMaximized.value = !isDrawingMaximized.value
      
      if (isDrawingMaximized.value) {
        lastDrawingState.value = {
          position: { ...drawingPosition.value },
          size: { ...drawingSize.value }
        }
        drawingPosition.value = { x: 0, y: 0 }
        drawingSize.value = {
          width: window.innerWidth,
          height: (windowWidth.value <= 1024 ? window.innerHeight - 48 : window.innerHeight)
        }
      } else {
        if (windowWidth.value <= 1024) {
          const pageHeight = document.querySelector('.flex-1')?.clientHeight || window.innerHeight
          drawingSize.value = {
            width: Math.min(700, window.innerWidth - 80),
            height: pageHeight - 88
          }
          drawingPosition.value = {
            x: Math.max(60, (window.innerWidth - drawingSize.value.width) / 2),
            y: Math.max(60, (pageHeight - drawingSize.value.height) / 2)
          }
        } else if (lastDrawingState.value) {
          drawingPosition.value = { ...lastDrawingState.value.position }
          drawingSize.value = { ...lastDrawingState.value.size }
        }
      }
    }

    const toggleDrawing = () => {
      if (isDrawingMinimized.value) {
        // Only restore if minimized
        isDrawingVisible.value = true
        isDrawingMinimized.value = false
        focusDrawing()
      } else if (isDrawingVisible.value) {
        // If visible, just focus
        focusDrawing()
      }
    }

    const handleDrawingIconClick = () => {
      if (!isDrawingExists.value) {
        openDrawing()
      } else {
        isDrawingVisible.value = !isDrawingVisible.value
        isDrawingMinimized.value = !isDrawingVisible.value
      }
    }

    // Add z-index management
    const terminalZIndex = ref(1)
    const drawingZIndex = ref(1)

    const focusTerminal = () => {
      terminalZIndex.value = 2
      drawingZIndex.value = 1
    }

    const focusDrawing = () => {
      drawingZIndex.value = Math.max(terminalZIndex.value + 1, drawingZIndex.value + 1)
    }

    // Add these new refs and computed properties
    const showRotateModal = ref(false)

    // Add orientation and screen size check
    const checkOrientation = () => {
      if (window.innerWidth <= 1024) { // Match terminal breakpoint
        showRotateModal.value = window.innerHeight > window.innerWidth
      } else {
        showRotateModal.value = false
      }
    }

    // Update initialSize with more specific breakpoints
    const initialSize = computed(() => {
      const isMobileOrTablet = window.innerWidth <= 1024
      const isLandscape = window.innerWidth > window.innerHeight
      const pageHeight = document.querySelector('.flex-1')?.clientHeight || window.innerHeight

      if (isMobileOrTablet && isLandscape) {
        const width = Math.min(800, window.innerWidth - 80)
        return {
          width,
          height: pageHeight - 88
        }
      } else if (isMobileOrTablet) {
        const width = window.innerWidth - 40
        return {
          width,
          height: 500
        }
      }

      return {
        width: 900,
        height: 600
      }
    })

    // Update initialPosition to match
    const initialPosition = computed(() => {
      if (window.innerWidth <= 1024) { // Tablet and Mobile
        if (window.innerWidth > window.innerHeight) { // Landscape
          return { 
            x: `calc(50% - ${initialSize.value.width / 2}px)`,
            y: `calc(50% - ${initialSize.value.height / 2}px)`
          }
        }
      }
      return { 
        x: 'calc(50% - 450px)', 
        y: 'calc(50% - 300px)' 
      }
    })

    // Add window width ref
    const windowWidth = ref(window.innerWidth)

    onMounted(() => {
      // Update window width on resize
      const updateWidth = () => {
        windowWidth.value = window.innerWidth
      }
      window.addEventListener('resize', updateWidth)
      
      onUnmounted(() => {
        window.removeEventListener('resize', updateWidth)
      })
    })

    // Add new refs
    const mobileInput = ref(null)

    // Add new methods for mobile input handling
    const handleMobileInput = (e) => {
      // Only prevent default and focus input if clicking on the command line area
      const isCommandArea = e.target.closest('.cursor-text') || 
                             e.target === terminalContent.value

      if (isCommandArea && !e.target.closest('a, button')) {
        // Initialize terminal if it's empty
        if (commandHistory.value.length === 0) {
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
        }
        
        mobileInput.value?.focus()
        nextTick(() => {
          scrollToBottom()
        })
      }
    }

    const handleMobileKeyInput = (e) => {
      currentCommand.value = e.target.value
      cursorPosition.value = e.target.value.length
    }

    const handleMobileFocus = () => {
      // Scroll to bottom with a slight delay to account for keyboard appearance
      setTimeout(() => {
        scrollToBottom()
      }, 100)
    }

    // Update touch scroll handling to remove unused parameter
    const handleTouchScroll = () => {
      // Let default touch scrolling behavior work
      // The .passive modifier above ensures smooth scrolling
    }

    // Add toast instance
    const toast = useToast()

    // Add handler for language switch event
    const handleLanguageSwitch = (newLang) => {
      toast.success(`Switched to ${newLang === 'en' ? 'English' : '日本語'}`, {
        timeout: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        hideProgressBar: true,
        icon: false,
        position: "bottom-right",
        containerClassName: "terminal-toast-container",
        style: { marginTop: "52px" }
      })
    }

    // Add handler for theme switch event
    const handleThemeSwitch = (newTheme) => {
      toast.success(`Switching to ${newTheme} theme...`, {
        timeout: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        hideProgressBar: true,
        icon: false,
        position: "bottom-right",
        containerClassName: "terminal-toast-container",
        style: { marginTop: "52px" }
      })
    }
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
    
    .min-w-200 {
      min-width: 200px;
    }
    
    .min-w-300 {
      min-width: 300px;
    }
    
    /* Resize handles */
    .resize-handle {
      position: absolute;
      z-index: 1;
    }
    
    .resize-e {
      top: 32px; /* Start below titlebar */
      right: 0;
      width: 4px;
      height: calc(100% - 32px);
      cursor: ew-resize;
    }
    
    .resize-w {
      top: 32px; /* Start below titlebar */
      left: 0;
      width: 4px;
      height: calc(100% - 32px);
      cursor: ew-resize;
    }
    
    .resize-s {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      cursor: ns-resize;
    }
    
    .resize-se {
      bottom: 0;
      right: 0;
      width: 8px;
      height: 8px;
      cursor: nwse-resize;
    }
    
    .resize-sw {
      bottom: 0;
      left: 0;
      width: 8px;
      height: 8px;
      cursor: nesw-resize;
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
    
    /* Update border styles */
    .border {
      border-width: 1px;
    }
    
    /* Optional: Add some subtle shadow */
    .shadow-xl {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    
    /* Only add transition for maximize/minimize if needed */
    .maximizing {
      transition: width 0.2s, height 0.2s, left 0.2s, top 0.2s;
    }
    
    /* Prevent text selection on desktop icon */
    .group {
      user-select: none;
    }
    
    .desktop-icon {
      min-width: 96px;
    }
    
    .desktop-icon.selected,
    .desktop-icon:focus-visible {
      outline: 1px dotted #93a1a1;
      outline-offset: -1px;
      background-color: rgba(147, 161, 161, 0.1); /* Solarized base1 with low opacity */
    }
    
    /* Prevent text selection */
    .desktop-icon {
      user-select: none;
    }
    
    /* Make text wrap if needed */
    .desktop-icon span {
      word-break: break-word;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    /* Add selected state */
    .desktop-icon:has(.selected) img {
      filter: brightness(1.25);
    }
    
    /* Add responsive styles */
    @media (max-width: 768px) {
      .desktop-icon {
        min-width: 72px; /* Smaller icons on mobile */
      }

      #terminal-content {
        font-size: 14px; /* Slightly smaller font on mobile */
      }

      /* Adjust neofetch layout for mobile */
      .flex-wrap {
        gap: 4px;
      }

      /* Make profile picture smaller on mobile */
      .w-200px {
        width: 150px;
      }

      .min-w-200px {
        min-width: 150px;
      }

      /* Adjust spacing for mobile */
      .p-6 {
        padding: 1rem;
      }

      /* Disable dragging on mobile */
      [class*="resize-handle"] {
        display: none;
      }
    }

    @media (max-width: 640px) {
      #terminal-content {
        font-size: 14px;
      }

      /* Adjust neofetch for mobile */
      .flex-wrap {
        gap: 2px;
      }

      .w-200px {
        width: 120px;
      }

      .min-w-200px {
        min-width: 120px;
      }

      .p-6 {
        padding: 0.75rem;
      }

      /* Hide resize handles on mobile */
      [class*="resize-handle"] {
        display: none;
      }
    }

    @media (max-width: 1024px) and (orientation: landscape) {
      #terminal-content {
        font-size: 14px;
      }

      .flex-wrap {
        gap: 4px;
      }

      /* Adjust neofetch layout for landscape */
      .w-200px {
        width: 140px;
      }

      .min-w-200px {
        min-width: 140px;
      }

      .p-6 {
        padding: 1rem;
      }

      /* Hide resize handles */
      [class*="resize-handle"] {
        display: none;
      }
    }

    /* Lock screen rotation for portrait */
    @media (max-width: 1024px) and (orientation: portrait) {
      .absolute.inset-0 {
        min-height: 100dvh;
      }
    }

    /* Add transition styles */
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.2s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }

    /* Update modal styles for different breakpoints */
    @media (max-width: 1024px) {
      .max-w-sm {
        max-width: 320px;
      }
    }

    @media (max-width: 640px) {
      .max-w-sm {
        max-width: 280px;
      }
      
      .p-6 {
        padding: 1rem;
      }
      
      .text-lg {
        font-size: 1rem;
      }
    }

    /* Add specific modal styles for mobile */
    @media (max-width: 1024px) {
      .fixed.inset-0 {
        position: fixed;
        width: 100vw;
        height: 100vh;
        /* Use viewport units to ensure full coverage */
        height: 100dvh;
      }
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.2s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }

    @media (max-width: 1024px) {
      .window-header {
        padding-left: 2rem; /* Make room for drag handle */
      }
      
      .resize-indicator {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 12px 12px;
        border-color: transparent transparent var(--text-secondary) transparent;
        opacity: 0.5;
      }
    }

    /* Add mobile-specific styles */
    @media (max-width: 1024px) {
      #terminal-content {
        -webkit-tap-highlight-color: transparent;
      }
      
      /* Hide scrollbar on mobile while keeping functionality */
      #terminal-content::-webkit-scrollbar {
        width: 0px;
      }
      
      /* Ensure content is properly padded from bottom on mobile */
      #terminal-content {
        padding-bottom: 50vh; /* Add extra padding for keyboard */
      }
    }

    /* Add touch-specific styles */
    @media (max-width: 1024px) {
      #terminal-content {
        -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS */
        overscroll-behavior-y: contain; /* Prevent pull-to-refresh */
        scroll-behavior: smooth;
        padding-bottom: 1.5rem !important; /* Override any other padding */
      }
      
      /* Ensure text remains selectable */
      #terminal-content * {
        user-select: text;
      }
      
      /* But prevent selection on specific elements */
      #terminal-content .window-controls,
      #terminal-content .desktop-icon {
        user-select: none;
      }
    }

    /* Update mobile resize handle styles */
    @media (max-width: 1024px) {
      .cursor-se-resize {
        touch-action: none; /* Prevent scrolling while resizing */
        z-index: 10; /* Ensure handle is above content */
      }

      /* Make the touch target larger on mobile */
      .cursor-se-resize::before {
        content: '';
        position: absolute;
        bottom: -12px;
        right: -12px;
        width: 24px;
        height: 24px;
        touch-action: none;
      }
    }

    /* Hide all resize handles on mobile */
    @media (max-width: 1024px) {
      [class*="resize-handle"] {
        display: none !important;
      }
      
      /* Remove resize cursor styles on mobile */
      .cursor-se-resize {
        cursor: default;
      }
    }

    :deep(.terminal-toast-container) {
      top: 52px !important;
      right: 12px !important;
    }
    </style> 