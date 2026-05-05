import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Home from '../views/HomeView.vue'
import Dashboard from '../views/DashboardView.vue'

const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
