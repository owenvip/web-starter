/*
 * @Descripttion: user module
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
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
    } catch (error) {
      // silence
    }
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
