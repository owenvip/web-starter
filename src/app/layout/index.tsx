import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElMain, ElFooter } from 'element-plus'
import SiderMenu from '../sider-menu'
import routes from '@/router/routes'
export default defineComponent({
  render() {
    return (
      <ElContainer>
        <ElHeader />
        <ElContainer>
          <SiderMenu routes={routes} />
          <ElMain>{this.$slots.default && this.$slots.default()}</ElMain>
        </ElContainer>
        <ElFooter />
      </ElContainer>
    )
  },
})
