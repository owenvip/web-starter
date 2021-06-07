import { useLocalObservable } from 'mobx-react-lite'
import { runInAction } from 'mobx'
import { fetchUserInfo } from '@/api/user'

const User = () => {
  const store = useLocalObservable(() => ({
    user: {},
    async fetchUser(userId: string) {
      try {
        const user = await fetchUserInfo(userId)
        runInAction(() => {
          this.user = user
        })
      } catch (error) {}
    },
  }))
  return store
}

export default User
