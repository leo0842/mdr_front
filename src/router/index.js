import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Lecture from '@/components/Lecture'
import Community from '@/components/Community'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/lecture',
    name: 'Lecture',
    component: Lecture
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
