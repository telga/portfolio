import { ref, watch } from 'vue'

const currentTheme = ref(localStorage.getItem('theme') || 'nord')

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

  const applyStoredTheme = () => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      applyTheme(storedTheme)
    }
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
