/*
 * @Descripttion:
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-07-10 14:46:54
 */
import React, { FC, useEffect } from 'react'
import { RouteConfig } from '@/interfaces/route'
import { useHistory } from 'react-router'
import { useStore } from '@/store'

interface Props {
  route: RouteConfig
}

const Authorized: FC<Props> = ({ children, route }) => {
  const store = useStore()
  const { isLogin } = store.auth
  const history = useHistory()
  useEffect(() => {
    const { meta = {} } = route
    const { auth = true } = meta
    if (auth && !isLogin) {
      history.replace('/login')
    }
  }, [isLogin, history, route])
  return <>{children}</>
}

export default Authorized
