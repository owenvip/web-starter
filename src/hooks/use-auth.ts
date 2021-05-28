import { useContext } from 'react'
import { AuthContext } from '@/contexts/auth'

export default () => {
  return useContext(AuthContext)
}
