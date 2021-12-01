<template>
  <div>
    <h1>组件通信</h1>
    <Child1></Child1>
    <Child2 foo="fooooo" @hi="onHi"></Child2>
  </div>
</template>
<script>
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'

  export default {
    components: {Child1, Child2},
    mounted() {
      console.log(this.$children)
    },
    methods: {
      onHi() {
        console.log('from sunzi hi')
      }
    }
  }
</script>
