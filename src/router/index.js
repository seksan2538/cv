import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue'),
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import(/* webpackChunkName: "education" */ '../views/Education.vue'),
  },
  {
    path: '/experience',
    name: 'Experience',
    component: () => import(/* webpackChunkName: "experience" */ '../views/Experience.vue'),
  },
  {
    path: '/working-experience',
    name: 'WorkingExperience',
    component: () =>
      import(/* webpackChunkName: "working-experience" */ '../views/WorkingExperience.vue'),
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import(/* webpackChunkName: "skills" */ '../views/Skills.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
