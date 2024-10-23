import { ref } from 'vue'

export const isLoading = ref(false)

export function showLoading() {
  isLoading.value = true
}

export function hideLoading() {
  isLoading.value = false
}
