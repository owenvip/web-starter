import { defineComponent } from 'vue'
import styles from './index.module.less'

export default defineComponent({
  name: 'Demo',
  render() {
    return <div class={styles.test}>2222</div>
  },
})
