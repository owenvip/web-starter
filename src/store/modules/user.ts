import { fetchUserInfo } from '@/api/user'
const state = {
  users: {},
}
const mutations = {
  setUser: (state, payload) => {
    state.users[payload.id] = payload
  },
}
const getters = {}
const actions = {
  fetchUserInfo: async ({ commit }, userId) => {
    try {
      const user = await fetchUserInfo(userId)
      commit('setUser', user)
    } catch (error) {}
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
