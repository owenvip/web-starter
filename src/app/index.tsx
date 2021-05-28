import React, { ComponentType, FC } from 'react'
import { Redirect, Route, HashRouter, Switch } from 'react-router-dom'
import flattenRoutes from '@/utils/flatten-routes'
import AuthContextProvider from '@/contexts/auth'
import Authorized from './authorized'
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
    <HashRouter>
      <AuthContextProvider>
        <StoreProvider>
          <Layout>
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
              <Redirect from="*" to="/error/404" />
            </Switch>
        </Layout>
        </StoreProvider>
      </AuthContextProvider>
    </HashRouter>
  )
}

export default App
