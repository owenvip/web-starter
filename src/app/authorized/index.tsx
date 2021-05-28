import React, { FC, useEffect } from 'react'
import { RouteConfig } from '@/interfaces/route'
import useAuth from '@/hooks/use-auth'
import { useHistory } from 'react-router'

interface Props {
  route: RouteConfig
}

const Authorized: FC<Props> = ({ children, route }) => {
  const { isLogin } = useAuth()
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
