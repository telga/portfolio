import { ref, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLanguageSwitcher() {
  const { locale } = useI18n()
  
  const availableLanguages = ['en', 'jp']
  const currentLanguage = ref(locale.value)

  const toggleLanguage = () => {
    const newLang = currentLanguage.value === 'en' ? 'jp' : 'en'
    changeLanguage(newLang)
  }

  const changeLanguage = (langCode) => {
    if (availableLanguages.includes(langCode)) {
      locale.value = langCode
      currentLanguage.value = langCode
      localStorage.setItem('userLanguage', langCode)
    }
  }

  onMounted(() => {
    const savedLanguage = localStorage.getItem('userLanguage')
    if (savedLanguage && availableLanguages.includes(savedLanguage)) {
      changeLanguage(savedLanguage)
    }
  })

  watch(locale, (newLocale) => {
    if (availableLanguages.includes(newLocale)) {
      currentLanguage.value = newLocale
      localStorage.setItem('userLanguage', newLocale)
    }
  })

  return {
    currentLanguage,
    toggleLanguage
  }
}