import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import LectureView from '@/views/LectureView'
import CommunityView from '@/views/CommunityView'
import Question from '@/views/Question'
import Login from '@/views/Login'
import SignUp from '@/views/SignUp'
import FindPassword from '@/views/findPassword'
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
    path: '/lecture',
    name: 'Lecture',
    component: LectureView
  },
  {
    path: '/community',
    name: 'CommunityView',
    component: CommunityView
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
  {
    path: '/lecture/:id',
    name: 'lecture',
    component: Lecture
  },
  {
    path: '/community/:id',
    name: 'community',
    component: Community
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
