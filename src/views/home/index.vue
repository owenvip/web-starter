<template>
  <div>
    <ElBadge :value="state.value" class="item" type="warning">
      <ElButton type="primary" @click="handleClick">Home</ElButton>
    </ElBadge>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { ElButton, ElBadge } from 'element-plus'

type State = {
  value: number
}

export default defineComponent({
  name: 'Home',
  components: {
    ElButton,
    ElBadge,
  },
  setup() {
    const state = reactive<State>({
      value: 1,
    })
    const handleClick = (): void => {
      state.value++
    }
    return {
      state,
      handleClick,
    }
  },
})
</script>
<style lang="less" scoped></style>
