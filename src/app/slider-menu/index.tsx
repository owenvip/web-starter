import { defineComponent } from 'vue'
import { ElSlider, ElMenu, ElSubmenu, ElMenuItem } from 'element-plus'
import { RouteRecordNormalized } from 'vue-router'
import flattenRoutes from '@/utils/flatten-routes'

function getKeyByPath(path: [] | string) {
  return Array.isArray(path) && path.length ? path[0] : path
}
function renderMenuItems(routes: RouteRecordNormalized[] = []) {
  return routes
    .map((route) => {
      const { path, props = {}, children = [] } = route
      const { visible = true, title, icon } = props
      const key = getKeyByPath(path)
      // @ts-ignore
      const visibleChildRoutes: any = children.filter(({ props = {} }) => {
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
  render() {
    const pathname = this.$router.currentRoute.value.path
    const routes = this.$router.getRoutes()
    // const history = useHistory()
    const flattenedRoutes = flattenRoutes(routes)
    const menu = renderMenuItems(routes)
    const handleMenuItemClick = ({ index }: any) => {
      if (pathname !== index) {
        this.$router.push(index)
      }
    }
    const matchedKeys = flattenedRoutes
      .map((route) => {
        return pathname === route.path ? getKeyByPath(route.path) : undefined
      })
      .filter((v) => v)
    return (
      <ElSlider>
        <ElMenu default-active={matchedKeys} onSelect={handleMenuItemClick}>
          {menu}
        </ElMenu>
      </ElSlider>
    )
  },
})
export default SliderMenu
