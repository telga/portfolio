import { ref, watch } from 'vue'

const currentTheme = ref('nord')

export function useTheme() {
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'nord' ? 'solarized' : 'nord'
    applyTheme(currentTheme.value)
  }

  const applyTheme = (theme) => {
    document.documentElement.classList.remove('theme-nord', 'theme-solarized')
    document.documentElement.classList.add(`theme-${theme}`)
    localStorage.setItem('theme', theme)
  }

  // Initialize theme
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') || 'nord'
    currentTheme.value = savedTheme
    applyTheme(savedTheme)
  }

  // Watch for theme changes
  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme)
  })

  return {
    currentTheme,
    toggleTheme
  }
}
