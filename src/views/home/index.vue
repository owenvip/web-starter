<!--
 * @Descripttion: 
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-11-09 00:14:04
-->
<template>
  <div>
    <ElBadge :value="state.value" class="item" type="warning">
      <ElButton type="primary" @click="handleClick">Home</ElButton>
    </ElBadge>
  </div>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import { ElButton, ElBadge } from 'element-plus'

export default defineComponent({
  name: 'Home',
  components: {
    ElButton,
    ElBadge,
  },
  setup() {
    const state = reactive({
      value: 1,
    })
    const handleClick = () => {
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
