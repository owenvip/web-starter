/*
 * @Descripttion: left side menu
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
 */
import { defineComponent } from 'vue'
import { ElAside, ElMenu, ElSubmenu, ElMenuItem } from 'element-plus'
import flattenRoutes from '@/utils/flatten-routes'

function getKeyByPath(path) {
  return Array.isArray(path) && path.length ? path[0] : path
}
function renderMenuItems(routes = []) {
  return routes
    .map((route) => {
      const { path, meta, children = [] } = route
      const { visible = true, title, icon } = meta
      const key = getKeyByPath(path)
      const visibleChildRoutes = children.filter(({ props = {} }) => {
        const { visible = true } = props
        return visible
      })
      if (visible) {
        const el = (
          <>
            <i class={icon} />
            <span>{title}</span>
          </>
        )
        if (visibleChildRoutes.length) {
          return (
            <ElSubmenu index={key} title={el}>
              {renderMenuItems(visibleChildRoutes)}
            </ElSubmenu>
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
  name: 'SliderMenu',
  props: ['width'],
  render() {
    const pathname = this.$router.currentRoute.value.path
    const routes = this.$router.getRoutes()
    const flattenedRoutes = flattenRoutes(routes)
    const menu = renderMenuItems(routes)
    const handleMenuItemClick = (path) => {
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
