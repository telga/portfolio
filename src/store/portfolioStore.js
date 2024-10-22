import { defineStore } from 'pinia'
import projectsData from '@/data/projects.json'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    projects: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchProjects() {
      this.loading = true
      this.error = null
      try {
        await new Promise(resolve => setTimeout(resolve, 500))
        this.projects = projectsData
      } catch (e) {
        console.error("Error fetching projects:", e)
        this.error = e.message
      } finally {
        this.loading = false
      }
    }
  }
})
