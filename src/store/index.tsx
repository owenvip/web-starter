import React, { createContext, useContext, ReactChild } from 'react'
import { observer } from 'mobx-react-lite'
import auth from './modules/auth'
import user from './modules/user'
import counter from './modules/counter'

const StoreContext = createContext<any>(null)

export const StoreProvider = observer(
  ({ children }: { children: ReactChild }) => {
    return (
      <StoreContext.Provider
        value={Object.freeze({
          user: user(),
          auth: auth(),
          counter: counter(),
        })}
      >
        {children}
      </StoreContext.Provider>
    )
  }
)

export const useStore = () => {
  const store = useContext(StoreContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}
