import { createRouter, createWebHashHistory } from 'vue-router';
import { Components } from '@/enums';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/',
        name: Components.LOCKSCREEN,
        component: () => import('@/views/Lockscreen.vue'),
      },
      {
        path: '/desktop',
        name: Components.HOMESCREEN,
        component: () => import('@/views/Homescreen.vue'),
      },
  ],
});

export default router;
