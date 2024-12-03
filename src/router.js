import { createRouter, createWebHistory } from 'vue-router'
//import Home from './views/HomePage.vue'
import About from './views/AboutPage.vue'
import Projects from './views/ProjectsPage.vue'
import Experiences from './views/ExperiencesPage.vue'
import Gear from './views/GearPage.vue'
import BusinessCard from './views/BusinessCard.vue'
import HomeAbout from './views/HomeAbout.vue'
import HomeV2 from './views/v2/HomeV2.vue'

const routes = [
  //{ path: '/', component: Home },
  { 
    path: '/', 
    component: HomeAbout,
    meta: { title: 'BN : Home' }
  },
  { 
    path: '/AboutPage', 
    component: About,
    meta: { title: 'BN : About' }
  },
  { 
    path: '/ProjectsPage', 
    component: Projects,
    meta: { title: 'BN : Projects' }
  },
  { 
    path: '/ExperiencesPage', 
    component: Experiences,
    meta: { title: 'BN : Experiences' }
  },
  { 
    path: '/GearPage', 
    component: Gear,
    meta: { title: 'BN : Gear' }
  },
  { 
    path: '/BusinessCard', 
    component: BusinessCard,
    meta: { 
      hideHeaderFooter: true,
      title: 'BN : Business Card'
    },
    redirect: '/'
  },
  {
    path: '/v2',
    name: 'HomeV2',
    component: HomeV2,
    meta: { 
      hideHeaderFooter: true,
      title: 'BN : Terminal'  
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Add navigation guard to update title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'BN'
  next()
})

export default router
