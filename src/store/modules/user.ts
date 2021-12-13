/*
 * @Descripttion: user module
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { MutationTree, ActionTree } from 'vuex'
import { fetchUserInfo } from '@/api/user'

const state = {
  users: {},
}
const mutations: MutationTree<any> = {
  setUser: (state, payload) => {
    state.users[payload.id] = payload
  },
}
const getters = {}
const actions: ActionTree<typeof state, unknown> = {
  fetchUserInfo: async ({ commit }, userId: string) => {
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
