<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>999</p>
    <button @click="suporka += 1">click</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: 'Welcome to suporka vue',
    },
  },
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    const data = reactive({
      val: 0,
      ifShowMask: false,
      suporka: 1,
      testArray: Array.from([]),
    })
    return { ...toRefs(data), count }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.link a {
  display: inline-block;
  margin: 0 20px;
}
.test-img {
  display: flex;
  width: 100px;
}
</style>
