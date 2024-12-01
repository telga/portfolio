<template>
  <div class="absolute inset-0 bg-[#2e1f40] flex flex-col">
    <HeaderV2 />
    <div class="flex-1 bg-[#2e1f40] flex items-center justify-center">
      <!-- Terminal Window -->
      <div class="bg-[#002b36] w-[900px] h-[600px] shadow-xl overflow-hidden">
        <!-- Terminal Header -->
        <div class="bg-[#1a1a1a] h-8 flex items-center relative">
          <!-- Centered text -->
          <div class="absolute w-full text-center text-gray-300 text-sm pointer-events-none">
            portfolio@brian-nguyen>
          </div>
          
          <!-- Right-aligned buttons -->
          <div class="flex items-stretch h-full ml-auto">
            <button class="hover:bg-gray-600 w-11 flex items-center justify-center cursor-pointer relative">
              <MinusSmallIcon class="w-5 h-5 text-gray-300" />
            </button>
            <button class="hover:bg-gray-600 w-11 flex items-center justify-center cursor-pointer relative">
              <Square2StackIcon class="w-4 h-4 text-gray-300" />
            </button>
            <button class="hover:bg-red-500 w-11 flex items-center justify-center cursor-pointer relative">
              <XMarkIcon class="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>
        
        <!-- Terminal Content -->
        <div 
          class="p-6 font-mono text-sm h-[calc(100%-32px)] overflow-y-auto bg-[#002b36]" 
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
              class="whitespace-pre-wrap break-words mt-2 text-[var(--text-secondary)] font-mono max-w-[80ch]"
            >{{ entry.output }}</div>
            
            <!-- Neofetch Output -->
            <div v-if="entry.showNeofetch" class="flex mt-2 gap-8">
              <div class="w-[35%] aspect-square relative">
                <img 
                  src="/images/userpic.png" 
                  alt="Profile Picture"
                  class="w-full h-full object-cover"
                />
              </div>
              
              <div class="text-[var(--text-primary)] w-[65%] space-y-1 mt-6">
                <div><span class="text-[var(--accent)]">Name: </span>Brian Nguyen</div>
                <div><span class="text-[var(--accent)]">Github: </span><a href="https://github.com/telga" target="_blank" class="hover:text-[var(--accent-hover)] transition-colors duration-300">telga (link)</a></div>
                <div>
                  <span class="text-[var(--accent)]">Email: </span>
                  <button 
                    @click="copyEmail" 
                    class="hover:text-[var(--accent-hover)] transition-colors duration-300"
                  >briann2305@gmail.com (link)</button>
                </div>
                <div><span class="text-[var(--accent)]">LinkedIn: </span><a href="https://www.linkedin.com/in/bnguy23/" target="_blank" class="hover:text-[var(--accent-hover)] transition-colors duration-300">bnguy23 (link)</a></div>
                <div class="flex">
                  <span class="text-[var(--accent)]">Skills: </span>
                  <span class="text-[var(--accent-secondary)] ml-1">Vue.js, React.js, Node.js, HTML, CSS, Python, Java, JavaScript, WSL, Linux (Arch, Ubuntu)</span>
                </div>
                <div class="flex">
                  <span class="text-[var(--accent)]">Pages: </span>
                  <div class="flex gap-2 ml-1">
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
  import { ref, nextTick, onMounted } from 'vue'
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
  
  onMounted(() => {
    terminalContent.value?.focus()
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
  </style> 