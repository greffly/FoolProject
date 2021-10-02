import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import ArticlePage from '../pages/ArticlePage.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article',
    name: 'ArticlePage',
    component: ArticlePage,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
