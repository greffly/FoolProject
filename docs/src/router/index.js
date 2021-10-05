import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import ArticlePage from '../pages/ArticlePage.vue';

// I chose to route with VueRouter because the official Vue.js docs suggested it!
Vue.use(VueRouter);

// the ArticlePage path is declared to be relative by using : in the path
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:path',
    name: 'ArticlePage',
    props: true,
    component: ArticlePage,
  },
];

// declaring the router and telling it to always start at the top of the page when a route navigated to
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
