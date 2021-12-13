/*
 * @Description:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-12-13 11:50:51
 */
import { useLocalObservable } from 'mobx-react-lite'

const counter = () => {
  const store = useLocalObservable(() => ({
    count: 1,
    get double() {
      return this.count * 2
    },
    increase() {
      this.count += 1
    },
    decrease() {
      this.count -= 1
    },
  }))
  return store
}

export default counter
