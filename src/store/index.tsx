import React, { createContext, useContext, ReactNode } from 'react'
import { UserStore } from './modules/user'
import { CounterStore } from './modules/count'

const stores = Object.freeze({
  userStore: new UserStore(),
  counterStore: new CounterStore(),
})
const storeContext = createContext(stores)

export const StoreProvider = ({ children }: any) => {
  return (
    <storeContext.Provider value={stores}>{children}</storeContext.Provider>
  )
}

export const useStore = () => {
  const store = useContext(storeContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}
