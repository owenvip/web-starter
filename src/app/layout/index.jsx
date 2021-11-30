/*
 * @Descripttion: layout
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { defineComponent } from 'vue'
import { ElContainer, ElHeader, ElMain, ElFooter } from 'element-plus'
import SliderMenu from '../slider-menu/index'
import styles from './index.module.less'

export default defineComponent({
  name: 'Layout',
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
