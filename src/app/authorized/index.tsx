import { computed, defineComponent, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const Authorized = defineComponent({
  setup(props, ctx) {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const isLogin = computed(() => store.state.auth.isLogin)
    watchEffect(() => {
      const { meta = {} } = route
      const { auth = true } = meta
      if (!isLogin.value && auth) {
        // router.replace('/login')
      }
    })
    return () => {
      return <>{ctx.slots.default && ctx.slots.default()}</>
    }
  },
})
export default Authorized
