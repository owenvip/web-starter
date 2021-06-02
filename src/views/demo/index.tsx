import React from 'react'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { Button } from 'antd'

const Demo = observer(() => {
  const store = useStore()
  console.log(11, store)
  return (
    <div>
      <Button danger>Demo</Button>
    </div>
  )
})

export default Demo
