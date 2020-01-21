import { login } from '@/api'
const state = {
  token: ''
}
const mutations = {
  setToken (state, value) {
    state.token = value
  }
}
const actions = {
  loginAction ({ commit }, { success, data, error }) {
    login(response => {
      const token = response.data.data
      commit('setToken', token)
      success && success(response)
    }, error, data)
  }
}
const getters = {
  token (state) {
    return state.token
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
