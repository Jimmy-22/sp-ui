<template>
  <div>
    <h1>child1</h1>
  </div>
</template>
<script>
  export default {
    mounted() {
      //总线通信方式
      this.$bus.$on('event-from-child2', msg => {
        console.log('这里是child1', msg)
      })
    },
  }
</script>
