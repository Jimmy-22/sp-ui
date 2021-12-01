<template>
  <div>
    <h1>组件通信</h1>
    <Child1></Child1>
    <Child2></Child2>
  </div>
</template>
<script>
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'

  export default {
    components: {Child1, Child2},
    data() {
      return {

      }
    }
  }
</script>
