/*
 * @Descripttion: app store entry
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'
import user from './modules/user'
const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}
export default createStore({
  modules: {
    auth,
    user,
  },
  plugins,
})
