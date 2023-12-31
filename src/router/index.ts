import AppLayoutVue from '@/layouts/AppLayout.vue'
import HomeViewVue from '@/views/HomeView.vue'
import NotFoundViewVue from '@/views/NotFoundView.vue'
import QuizViewVue from '@/views/QuizView.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeViewVue,
    meta: {
      layout: AppLayoutVue,
    },
  },
  {
    path: "/quiz/:id",
    component: QuizViewVue,
    meta: {
      layout: AppLayoutVue,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundViewVue,
    meta: {
      layout: AppLayoutVue,
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
