import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    projects: []
  }),
  actions: {
    async fetchProjects() {
      // Simulating an API call
      const response = await fetch('/api/projects')
      this.projects = await response.json()
    }
  }
})