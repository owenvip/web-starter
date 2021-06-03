import React, { FC, useState, useCallback, useMemo, ReactNode } from 'react'
import { useLocation, useHistory, matchPath } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { RouteConfig } from '@/interfaces/route'
import useRoutes from '@/hooks/use-routes'
import useFlattenedRoutes from '@/hooks/use-flattened-routes'

const { Sider } = Layout
const { SubMenu, Item: MenuItem } = Menu

interface Props {
  width?: number
}

function getKeyByPath(path?: string | string[]) {
  return Array.isArray(path) ? path[0] : path
}

function renderMenuItems(routes: RouteConfig[] = []): ReactNode[] {
  return routes
    .map((route) => {
      const { path, meta = {}, routes: childRoutes = [] } = route
      const { visible = true, title, icon } = meta
      const key = getKeyByPath(path)
      const visibleChildRoutes = childRoutes.filter(({ meta = {} }) => {
        const { visible = true } = meta
        return visible
      })
      if (visible) {
        if (visibleChildRoutes.length) {
          return (
            <SubMenu key={key} icon={icon} title={title}>
              {renderMenuItems(visibleChildRoutes)}
            </SubMenu>
          )
        } else {
          return (
            <MenuItem icon={icon} key={key} title={title}>
              {title}
            </MenuItem>
          )
        }
      } else {
        return null
      }
    })
    .filter((v) => v)
}

const SliderMenu: FC<Props> = ({ width = 220 }) => {
  const [collapsed, setCollapsed] = useState(false)
  const routes = useRoutes()
  const { pathname } = useLocation()
  const history = useHistory()

  const flattenedRoutes = useFlattenedRoutes()

  const menu = useMemo(() => renderMenuItems(routes), [routes])

  const handleMenuItemClick = useCallback(
    ({ key }) => {
      if (pathname !== key) {
        history.push(key)
      }
    },
    [history, pathname]
  )

  const matchedKeys = useMemo(() => {
    return flattenedRoutes
      .map((route) => {
        const match = matchPath(pathname, route)
        return match ? getKeyByPath(route.path) : undefined
      })
      .filter((v) => v)
  }, [flattenedRoutes, pathname]) as string[]

  const handleCollapsedChange = useCallback((collapsed) => {
    setCollapsed(collapsed)
  }, [])
  return (
    <Sider
      collapsible
      defaultCollapsed={collapsed}
      width={width}
      onCollapse={handleCollapsedChange}
    >
      <Menu
        mode="inline"
        theme="dark"
        defaultOpenKeys={matchedKeys}
        selectedKeys={matchedKeys}
        onClick={handleMenuItemClick}
      >
        {menu}
      </Menu>
    </Sider>
  )
}

export default SliderMenu
