const auth = {
  state: {
    user: {},
  },

  getters: {
    getLoggedInUser: state => state.user,
  },

  mutations: {
    mutateLoggedInUser: (state, payload) => {
      state.user = payload;
    },
  },

  actions: {
    setLoggedInUser: ({ commit }, payload) => {
      commit('mutateLoggedInUser', payload);
    },
  },
};

export default auth;
