import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AllUsers from '../views/AllUsers.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/users',
    name: 'Users',
    component: AllUsers,
  },
  {
    path: '/add',
    name: 'Add User',
    component: () => import('../views/AddUser.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
