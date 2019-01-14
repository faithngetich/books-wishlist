import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import auth from './modules/authentication';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
  },
});

export default store;
