import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Lecture from '@/views/Lecture'
import Community from '@/views/Community'
import Question from '@/views/Question'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'
import FindPassword from '@/views/findPassword'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  {
    path: '/question',
    name: 'Question',
    component: Question
  },
  {
    path: '/login',
    name: 'LogIn',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/findpassword',
    name: 'FindPassword',
    component: FindPassword
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
