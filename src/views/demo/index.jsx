import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
export default defineComponent({
  name: 'Demo',
  render() {
    return (
      <div>
        <ElButton type="danger">Demo</ElButton>
      </div>
    )
  },
})
