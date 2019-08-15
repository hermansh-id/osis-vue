import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
Vue.use(Router)

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: 'index.html',
      redirect: '/'
    },
    {
      path: '/',
      redirect: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import(/* webpackChunkName: "demo" */ './views/Dashboard.vue')
        },
        {
          path: '/calon',
          name: 'calon',
          component: () => import(/* webpackChunkName: "demo" */ './views/Calon.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "demo" */ './views/UserProfile.vue')
        },
        {
          path: '/pemilih',
          name: 'pemilih',
          component: () => import(/* webpackChunkName: "demo" */ './views/Pemilih.vue')
        }
      ]
    },
  ]
})
