/*
 * @Descripttion: app
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { defineComponent, KeepAlive } from 'vue'
import { RouterView } from 'vue-router'
import Layout from './layout'
import Authorized from '@/app/authorized'
import routes from '@/router/routes'
import '@/styles/index.less'

export default defineComponent({
  name: 'App',
  render() {
    return (
      <Layout>
        <Authorized>
          <RouterView>
            {({ Component }) => (
              <KeepAlive
                include={routes
                  .filter(({ meta: { keepAlive } }) => keepAlive)
                  .map(({ name }) => name)}
              >
                <Component />
              </KeepAlive>
            )}
          </RouterView>
        </Authorized>
      </Layout>
    )
  },
})
