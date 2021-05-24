import { MutationTree, ActionTree } from 'vuex'
import { userLogin } from '@/api/auth'
import auth from '@/utils/auth'

type State = {
  isLogin: boolean
}

const state: State = {
  isLogin: auth.isLogin,
}
const mutations: MutationTree<State> = {
  updateAuth: (state, payload) => {
    state.isLogin = payload
  },
}
const getters = {}
const actions: ActionTree<State, State> = {
  userLogin: async ({ commit }, params) => {
    try {
      const { token } = await userLogin(params)
      auth.setToken(token)
      commit('updateAuth', true)
    } catch (error) {
      auth.setToken('')
      commit('updateAuth', false)
    }
  },
  userLogout: ({ commit }) => {
    auth.setToken('')
    commit('updateAuth', false)
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
