import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
export default defineComponent({
  name: 'Home',
  render() {
    return (
      <div>
        <ElButton type="primary">Home</ElButton>
      </div>
    )
  },
})
