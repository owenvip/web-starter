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
