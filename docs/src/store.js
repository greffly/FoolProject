import Vue from 'vue';
import Vuex from 'vuex';

// I implemented a Vuex store because I wanted to share data between two components that didn't have a parent child relationship.
// Vuex seemed like the best choice and reminds me of context in React.
Vue.use(Vuex);

// declaring a store to hold all stocks related to all articles
export default new Vuex.Store({
  state: {
    stocks: [],
  },
});
