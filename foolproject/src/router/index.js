import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import ArticlePage from '../pages/ArticlePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article',
    name: 'ArticlePage',
    props: true,
    component: ArticlePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
