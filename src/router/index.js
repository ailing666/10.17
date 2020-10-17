import Vue from 'vue'
import VueRouter from 'vue-router'
import slotStudy from '@/views/slotStudy/index.vue'
import vuexStudy from '@/views/vuexStudy/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/slotStudy'
  },
  {
    path: '/slotStudy',
    component: slotStudy,
    meta: {
      title: '学习插槽'
    }
  },
  {
    path: '/vuexStudy',
    component: vuexStudy,
    meta: {
      title: '学习vuex'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
