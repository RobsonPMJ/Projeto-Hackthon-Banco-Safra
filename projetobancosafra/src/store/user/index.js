const state = {
  user: {
    name: 'teste',
    age: 27
  }
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

const getters = {
  getUser(state) {
    return state.user
  }
}

const actions = {
  saveUser({ commit }, payload) {
    commit('setUser', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
