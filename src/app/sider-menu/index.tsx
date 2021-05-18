import { defineComponent } from 'vue'
import { ElSlider, ElMenu, ElSubmenu, ElMenuItem } from 'element-plus'
import flattenRoutes from '@/utils/flatten-routes'
function getKeyByPath(path) {
  return Array.isArray(path) ? path[0] : path
}
function renderMenuItems(routes = []) {
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
        const el = (
          <>
            <i class={icon}></i>
            <span>{title}</span>
          </>
        )
        if (visibleChildRoutes.length) {
          return (
            <ElSubmenu key={key} title={el}>
              {renderMenuItems(visibleChildRoutes)}
            </ElSubmenu>
          )
        } else {
          return <ElMenuItem key={key}>{el}</ElMenuItem>
        }
      } else {
        return null
      }
    })
    .filter((v) => v)
}
const SiderMenu = defineComponent({
  props: {
    width: Number,
    theme: String,
    logo: Object,
    className: String,
  },
  render() {
    const pathname = this.$router.currentRoute.value.path
    const routes = this.$router.getRoutes()
    // const history = useHistory()
    const flattenedRoutes = flattenRoutes(routes)
    const menu = renderMenuItems(routes)
    const handleMenuItemClick = ({ key }) => {
      if (pathname !== key) {
        this.$router.push(key)
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
export default SiderMenu
