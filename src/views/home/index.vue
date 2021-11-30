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
export default {
  name: 'Home',
}
</script>
<script setup>
import { reactive } from 'vue'
const state = reactive({
  value: 1,
})
const handleClick = () => {
  state.value++
}
</script>

<style lang="less" scoped></style>
