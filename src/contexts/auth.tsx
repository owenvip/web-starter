/*
 * @Description:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-12-13 11:50:51
 */
import React, { createContext, FC, useState, useCallback } from 'react'
import noop from 'lodash/noop'
import auth from '@/utils/auth'
import { userLogin } from '@/api/auth'
import { message } from 'antd'
import { LoginParam } from '@/interfaces/user'

interface AuthContextValue {
  isLogin: boolean
  userLogin: (body: LoginParam) => Promise<boolean>
  userLogout: () => void
}

export const AuthContext = createContext<AuthContextValue>({
  isLogin: false,
  userLogin: () => Promise.resolve(true),
  userLogout: noop,
})

const AuthContextProvider: FC = ({ children }) => {
  const [isLogin, setIsLogin] = useState(auth.isLogin)

  const handleLogin = useCallback(async (body: LoginParam) => {
    try {
      const { token } = await userLogin(body)
      auth.setToken(token)
      setIsLogin(true)
      message.success('登录成功')
      return Promise.resolve(true)
    } catch (error: any) {
      message.error(error.message || '登录失败')
      return Promise.resolve(false)
    }
  }, [])

  const handleLogout = useCallback(() => {
    auth.setToken('')
    setIsLogin(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        userLogin: handleLogin,
        userLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
