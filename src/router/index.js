import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Plans from '../views/Plans.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plans',
    name: 'Plans',
    component: Plans
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; 