import { useLocalObservable } from 'mobx-react-lite'
import { runInAction } from 'mobx'
import auth from '@/utils/auth'
import { userLogin } from '@/api/auth'
import { LoginParam } from '@/interfaces/user'

const Auth = () => {
  const store = useLocalObservable(() => ({
    isLogin: auth.isLogin,
    userLogout() {
      auth.setToken('')
      this.isLogin = false
    },
    async userLogin(params: LoginParam) {
      try {
        const { token } = await userLogin(params)
        auth.setToken(token)
        runInAction(() => {
          this.isLogin = true
        })
      } catch (error) {
        this.userLogout()
      }
    },
  }))
  return store
}

export default Auth
