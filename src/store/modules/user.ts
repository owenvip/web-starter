/*
 * @Descripttion: user module
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { MutationTree, ActionTree } from 'vuex'
import { fetchUserInfo } from '@/api/user'

type State = {
  users: any
}

const state: State = {
  users: {},
}
const mutations: MutationTree<State> = {
  setUser: (state, payload) => {
    state.users[payload.id] = payload
  },
}
const getters = {}
const actions: ActionTree<State, State> = {
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
