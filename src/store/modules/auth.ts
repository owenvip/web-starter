import { useLocalObservable } from 'mobx-react-lite'
import auth from '@/utils/auth'

const Auth = () => {
  const store = useLocalObservable(() => ({
    isLogin: auth.isLogin,
    setLogin(login: boolean) {
      this.isLogin = login
    },
  }))
  return store
}

export default Auth
