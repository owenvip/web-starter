<!--
 * @Descripttion: 
 * @Author: OwenWong
 * @Email: owen.cq.cn@gmail.com
 * @Date: 2021-06-08 16:44:24
-->
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
