import React, { ComponentType, FC, Suspense } from 'react'
import { Redirect, Route, HashRouter, Switch } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import 'antd/dist/antd.css'
import zhCN from 'antd/lib/locale/zh_CN'
import flattenRoutes from '@/utils/flatten-routes'
import Authorized from './authorized'
import PageLoading from '@/components/page-loading'
import { StoreProvider } from '@/store'
import Layout from './layout'
import routes from '../router'
import '@/styles/index.less'

function renderComponent(Cmp: ComponentType | undefined, props: any) {
  return Cmp ? <Cmp {...props} /> : null
}

const App: FC = () => {
  const flattenedRoutes = flattenRoutes(routes)
  return (
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <StoreProvider>
          <Layout>
            <Suspense fallback={<PageLoading />}>
              <Switch>
                {flattenedRoutes.map(
                  (
                    { component: Cmp, routes: childRoutes, ...restProps },
                    index: number
                  ) => (
                    <Route
                      key={index}
                      {...restProps}
                      render={(props) => (
                        <Authorized route={restProps}>
                          {renderComponent(Cmp as ComponentType, {
                            ...props,
                            routes: childRoutes,
                          })}
                        </Authorized>
                      )}
                    />
                  )
                )}
                <Redirect from="*" to="/" />
              </Switch>
            </Suspense>
          </Layout>
        </StoreProvider>
      </HashRouter>
    </ConfigProvider>
  )
}

export default App
