import { ref, watch } from 'vue'

const currentTheme = ref(localStorage.getItem('theme') || 'nord')

function applyTheme(theme) {
  document.documentElement.classList.remove('theme-nord', 'theme-solarized')
  document.documentElement.classList.add(`theme-${theme}`)
  localStorage.setItem('theme', theme)
  currentTheme.value = theme
}

function applyStoredTheme() {
  const storedTheme = localStorage.getItem('theme') || 'nord'
  applyTheme(storedTheme)
}

// Apply theme immediately when the script is loaded
applyStoredTheme()

export function useTheme() {
  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'nord' ? 'solarized' : 'nord'
    applyTheme(newTheme)
  }

  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme)
  })

  return {
    currentTheme,
    toggleTheme,
    applyStoredTheme
  }
}
