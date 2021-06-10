/*
 * @Descripttion: app
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import Layout from './layout'
import Authorized from '@/app/authorized'
import '@/styles/index.less'
export default defineComponent({
  name: 'App',
  render() {
    return (
      <Layout>
        <Authorized>
          <RouterView />
        </Authorized>
      </Layout>
    )
  },
})
