/*
 * @Descripttion: left side menu
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { defineComponent } from 'vue'
import { ElAside, ElMenu, ElSubMenu, ElMenuItem } from 'element-plus'
import { RouteRecordNormalized } from 'vue-router'
import flattenRoutes from '@/utils/flatten-routes'

function getKeyByPath(path: unknown): string {
  return Array.isArray(path) && path.length ? path[0] : path
}
function renderMenuItems(routes: Array<RouteRecordNormalized>) {
  return routes
    .map((route) => {
      const { path, meta, children = [] } = route
      const { visible = true, title, icon } = meta
      const key = getKeyByPath(path)
      const visibleChildRoutes: any[] = children.filter(
        ({ meta }) => meta?.visible
      )
      if (visible) {
        const el = (
          <>
            <i class={icon} />
            <span>{title}</span>
          </>
        )
        if (visibleChildRoutes.length) {
          return (
            <ElSubMenu
              index={key}
              v-slots={{
                title: el,
              }}
            >
              {renderMenuItems(visibleChildRoutes)}
            </ElSubMenu>
          )
        } else {
          return <ElMenuItem index={key}>{el}</ElMenuItem>
        }
      } else {
        return null
      }
    })
    .filter((v) => v)
}
const SliderMenu = defineComponent({
  props: ['width'],
  render() {
    const pathname = this.$router.currentRoute.value.path
    const routes = this.$router.getRoutes()
    const flattenedRoutes = flattenRoutes(routes)
    const menu = renderMenuItems(routes)
    const handleMenuItemClick = (path: any) => {
      if (pathname !== path) {
        this.$router.push(path)
      }
    }
    const matchedKeys = flattenedRoutes
      .map((route) => {
        return pathname === route.path ? getKeyByPath(route.path) : undefined
      })
      .filter((v) => v)
    return (
      <ElAside {...this.$props}>
        <ElMenu default-active={matchedKeys[0]} onSelect={handleMenuItemClick}>
          {menu}
        </ElMenu>
      </ElAside>
    )
  },
})
export default SliderMenu
