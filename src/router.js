import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomePage.vue'
import About from './views/AboutPage.vue'
import Projects from './views/ProjectsPage.vue'
import Experiences from './views/ExperiencesPage.vue'
import Skills from './views/SkillsPage.vue'
import Resume from './views/ResumePage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/experiences', component: Experiences },
  { path: '/skills', component: Skills },
  { path: '/resume', component: Resume }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/portfolio/'),
  routes
})

export default router
