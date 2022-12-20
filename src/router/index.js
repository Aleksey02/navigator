import { createRouter, createWebHistory } from 'vue-router'
import Profile from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/wallet',
      name: 'wallet',
      component: () => import('../views/Wallet.vue')
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: () => import('../views/Accounts.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Service.vue')
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: () => import('../views/Notification.vue')
    },
    {
      path: '/news_tape',
      name: 'news_tape',
      component: () => import('../views/News.vue')
    },
    {
      path: '/invitations',
      name: 'invitations',
      component: () => import('../views/Invitation.vue')
    },
    {
      path: '/groups',
      name: 'groups',
      component: () => import('../views/Groups.vue')
    },
  ]
})

export default router
