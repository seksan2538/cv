import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
