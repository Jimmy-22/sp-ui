<template>
  <div>
    <h1>child2</h1>
    <button @click="sendToChild1">给child1发消息</button>
  </div>
</template>
<script>
  export default {
    methods: {
      sendToChild1() {
        this.$bus.$emit('event-from-child2', 'this is child2-data')
      }
    }
  }
</script>
