import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElMain, ElFooter } from 'element-plus'
import SliderMenu from '../slider-menu/index'
export default defineComponent({
  render() {
    return (
      <ElContainer>
        <ElHeader />
        <ElContainer>
          <SliderMenu />
          <ElMain>{this.$slots.default && this.$slots.default()}</ElMain>
        </ElContainer>
        <ElFooter />
      </ElContainer>
    )
  },
})
