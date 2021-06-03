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
