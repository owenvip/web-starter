import React from 'react'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { Button, Badge } from 'antd'

const Demo = () => {
  const store = useStore()
  return (
    <Badge count={store.counter.count}>
      <Button danger onClick={store.counter.increase}>
        demo
      </Button>
    </Badge>
  )
}

export default observer(Demo)
