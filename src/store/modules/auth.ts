import { useLocalObservable } from 'mobx-react-lite'
import auth from '@/utils/auth'
import { runInAction } from 'mobx'
import { userLogin } from '@/api/auth'
import { LoginParam } from '@/interfaces/user'

const Auth = () => {
  const store = useLocalObservable(() => ({
    isLogin: auth.isLogin,
    async fetchAuth(params: LoginParam) {
      try {
        const { token } = await userLogin(params)
        auth.setToken(token)
        runInAction(() => {
          this.isLogin = true
        })
      } catch (error) {
        auth.setToken('')
        runInAction(() => {
          this.isLogin = false
        })
      }
    },
  }))
  return store
}

export default Auth
