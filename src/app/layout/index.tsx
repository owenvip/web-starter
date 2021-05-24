import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElMain, ElFooter } from 'element-plus'
import SliderMenu from '../slider-menu/index'
import styles from './index.module.less'

export default defineComponent({
  render() {
    const { hideHeader, hideSlider } = this.$route.meta
    return (
      <ElContainer>
        {hideHeader ?? <ElHeader class={styles.header} />}
        <ElContainer>
          {hideSlider ?? <SliderMenu />}
          <ElMain>{this.$slots.default && this.$slots.default()}</ElMain>
        </ElContainer>
        <ElFooter />
      </ElContainer>
    )
  },
})
