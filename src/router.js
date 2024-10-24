import { createRouter, createWebHistory } from 'vue-router'
//import Home from './views/HomePage.vue'
import About from './views/AboutPage.vue'
import Projects from './views/ProjectsPage.vue'
import Experiences from './views/ExperiencesPage.vue'
import Gear from './views/GearPage.vue'
import BusinessCard from './views/BusinessCard.vue'
import HomeAbout from './views/HomeAbout.vue'

const routes = [
  //{ path: '/', component: Home },
  { path: '/', component: HomeAbout },
  { path: '/AboutPage', component: About },
  { path: '/ProjectsPage', component: Projects },
  { path: '/ExperiencesPage', component: Experiences },
  { path: '/GearPage', component: Gear },
  { 
    path: '/BusinessCard', 
    component: BusinessCard,
    meta: { hideHeaderFooter: true }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/portfolio/'),
  routes
})

export default router
