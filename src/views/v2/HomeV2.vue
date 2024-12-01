<template>
  <div class="v2-page min-h-screen flex items-center justify-center p-4">
    <!-- Terminal Window -->
    <div class="bg-[var(--bg-secondary)] w-[900px] h-[600px] rounded-lg shadow-xl overflow-hidden border border-[var(--accent-hover)] border-opacity-50 hover:border-opacity-100 transition-all duration-300">
      <!-- Terminal Header -->
      <div class="bg-[var(--bg-primary)] p-3 flex items-center space-x-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <span class="text-[var(--text-secondary)] text-sm ml-2">portfolio@brian-nguyen</span>
      </div>
      
      <!-- Terminal Content -->
      <div 
        class="p-6 font-mono text-sm h-[calc(100%-48px)] overflow-y-auto" 
        @keydown="handleKeyPress"
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
          <div v-if="entry.output" class="mt-2 whitespace-pre-line text-[var(--text-primary)]">{{ entry.output }}</div>
          
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
                    @click="runCommand('experience')" 
                    class="text-[var(--accent-secondary)] hover:text-[var(--accent-hover)] transition-colors duration-300"
                  >experience</button>
                  <span class="text-[var(--text-secondary)]">|</span>
                  <button 
                    @click="runCommand('contact')" 
                    class="text-[var(--accent-secondary)] hover:text-[var(--accent-hover)] transition-colors duration-300"
                  >contact</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Current Command Line (empty and typable) -->
        <div class="flex">
          <div class="text-[var(--accent-secondary)]">portfolio@brian-nguyen</div>
          <div class="text-[var(--text-primary)]"> ></div>
          <div class="text-[var(--text-primary)] ml-2">{{ currentCommand }}</div>
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

const terminalContent = ref(null)
const currentCommand = ref('')
const showCursor = ref(true)
const isExecuting = ref(false)
const commandHistory = ref([{
  command: 'ifetch',
  showNeofetch: true
}])
const MAX_HISTORY = 3

const handleKeyPress = (e) => {
  if (isExecuting.value) {
    if (e.ctrlKey && e.key.toLowerCase() === 'l') {
      e.preventDefault()
      clearTerminal()
    }
    return
  }

  if (e.ctrlKey && e.key.toLowerCase() === 'l') {
    e.preventDefault()
    clearTerminal()
    return
  }

  if (e.key === 'Enter' && currentCommand.value) {
    const newEntry = { command: currentCommand.value }

    if (currentCommand.value === 'ifetch') {
      newEntry.showNeofetch = true
      commandHistory.value.push(newEntry)
    } else if (currentCommand.value === 'help') {
      newEntry.output = `Available commands:

ifetch     Display system information and profile
about      Show information about me
projects   View my projects
experience View my work experience
contact    Get my contact information
help       Show this help message
clear      Clear the terminal (Ctrl+L)

Type a command and press Enter to execute`
      commandHistory.value.push(newEntry)
    } else if (currentCommand.value === 'about') {
      newEntry.output = `Hi, I'm Brian! 👋

I'm a software engineer with a passion for building intuitive and efficient applications. 
My journey in tech started with game development, which evolved into a love for web development 
and systems programming.

Currently, I'm focused on:
• Full-stack web development using Vue.js and Node.js
• Learning Rust and exploring systems programming
• Contributing to open-source projects
• Building tools that make developers' lives easier

When I'm not coding, you can find me:
• Playing video games (currently obsessed with Baldur's Gate 3)
• Reading tech blogs and documentation
• Experimenting with Linux configurations
• Learning new programming languages and paradigms

Feel free to reach out if you want to collaborate or just chat about tech!`
      commandHistory.value.push(newEntry)
    } else if (currentCommand.value === 'projects') {
      newEntry.output = `My Projects:

• Portfolio Terminal (Vue.js, TailwindCSS)
  A terminal-style portfolio website with interactive commands
  
• Project 2 Name (Technologies)
  Description of project 2
  
• Project 3 Name (Technologies)
  Description of project 3

More projects available on my Github!`
      commandHistory.value.push(newEntry)
    } else if (currentCommand.value === 'experience') {
      newEntry.output = `Work Experience:

Software Engineer @ Company (2022 - Present)
• Achievement 1
• Achievement 2
• Achievement 3

Previous Role @ Company (2020 - 2022)
• Achievement 1
• Achievement 2
• Achievement 3`
      commandHistory.value.push(newEntry)
    } else if (currentCommand.value === 'contact') {
      newEntry.output = `Contact Information:

Email: briann2305@gmail.com
LinkedIn: bnguy23
Github: telga

Feel free to reach out! I'm always open to interesting conversations and opportunities.`
      commandHistory.value.push(newEntry)
    } else if (currentCommand.value === 'clear') {
      clearTerminal()
      return
    }

    if (commandHistory.value.length > MAX_HISTORY) {
      commandHistory.value.shift()
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
    currentCommand.value = currentCommand.value.slice(0, -1)
  } else if (e.key.length === 1 && !e.ctrlKey) {
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
</style> 