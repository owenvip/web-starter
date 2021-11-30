import { defineComponent, onActivated, onDeactivated } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'Demo',
  setup() {
    onActivated(() => {
      console.log('actived')
    })
    onDeactivated(() => {
      console.log('deactived')
    })
    return () => (
      <div>
        <ElButton type="danger">Demo</ElButton>
      </div>
    )
  },
})
