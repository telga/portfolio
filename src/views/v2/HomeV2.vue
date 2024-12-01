<template>
    <div class="v2-page min-h-screen flex items-center justify-center p-4">
      <!-- Terminal Window -->
      <div class="bg-[var(--bg-secondary)] w-[900px] h-[600px] rounded-lg shadow-xl overflow-hidden border border-[var(--accent-hover)] border-opacity-50 hover:border-opacity-100 transition-all duration-300">
        <!-- Terminal Header -->
        <div class="bg-[var(--bg-primary)] p-3 flex items-center space-x-2">
          <div class="w-3 h-3 rounded-full bg-red-500"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
          <span class="text-[var(--text-secondary)] text-sm ml-2">bnterm: portfolio@brian-nguyen</span>
        </div>
        
        <!-- Terminal Content -->
        <div 
          class="p-6 font-mono text-sm h-[calc(100%-48px)] overflow-y-auto" 
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
              <div class="text-[var(--text-primary)]"> ></div>
              <div class="text-[var(--text-primary)] ml-2">{{ entry.command }}</div>
            </div>
  
            <!-- Command Output -->
            <div 
              v-if="entry.output" 
              class="whitespace-pre-wrap break-words mt-2 text-[var(--text-secondary)] font-mono max-w-[80ch]"
            >{{ entry.output }}</div>
            
            <!-- Neofetch Output -->
            <div v-if="entry.showNeofetch" class="flex mt-2 gap-8">
              <div class="w-[45%] aspect-square overflow-hidden rounded-lg bg-bg-secondary relative">
                <img 
                  src="/images/userpic.png" 
                  alt="Profile Picture"
                  class="w-full h-full object-cover"
                />
              </div>
              
              <div class="text-[var(--text-primary)] w-[55%] space-y-1">
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
            <div class="text-[var(--text-primary)]">&gt;</div>
            <input
              ref="inputRef"
              type="text"
              v-model="currentCommand"
              @keydown="handleKeyPress"
              @click="handleSelection"
              @select="handleSelection"
              class="text-[var(--text-primary)] ml-2 bg-transparent border-none outline-none w-full"
              :spellcheck="false"
            />
            <div 
              class="w-2 h-4 bg-[var(--text-primary)] animate-blink ml-1" 
              v-show="showCursor && !isExecuting"
            ></div>
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
  const MAX_HISTORY = 3
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
      let selection
      switch (e.key) {
        case 'a':
          e.preventDefault()
          // Select whole command (visual only)
          window.getSelection()?.selectAllChildren(e.target)
          return
        case 'k':
          e.preventDefault()
          // Delete from cursor to end of line
          selection = window.getSelection()
          if (selection && selection.anchorOffset) {
            currentCommand.value = currentCommand.value.substring(0, selection.anchorOffset)
          }
          return
        case 'l':
          e.preventDefault()
          clearTerminal()
          return
      }
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
          if (commandHistory.value.length > MAX_HISTORY) {
            commandHistory.value.shift()
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
          if (commandHistory.value.length > MAX_HISTORY) {
            commandHistory.value.shift()
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
      isExecuting.value = false
  
      nextTick(() => {
        terminalContent.value?.scrollTo({
          top: terminalContent.value.scrollHeight,
          behavior: 'smooth'
        })
      })
    } else if (e.key === 'Backspace') {
      e.preventDefault()
      currentCommand.value = currentCommand.value.slice(0, -1)
    } else if (e.key.length === 1 && !e.ctrlKey) {
      e.preventDefault()
      currentCommand.value += e.key
    }
  }
  
  const clearTerminal = () => {
    commandHistory.value = []
    currentCommand.value = ''
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
    background-color: var(--bg-primary) !important;
  }
  
  :root,
  html,
  body {
    background-color: var(--bg-primary) !important;
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
  </style> 