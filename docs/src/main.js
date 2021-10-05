import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// I included the router and store so that they will live throughout the app
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
