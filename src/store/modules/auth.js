/*
 * @Descripttion: auth module
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { userLogin } from '@/api/auth'
import auth from '@/utils/auth'

const state = {
  isLogin: auth.isLogin,
}
const mutations = {
  updateAuth: (state, payload) => {
    state.isLogin = payload
  },
}
const getters = {}
const actions = {
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
