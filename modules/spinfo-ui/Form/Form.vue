<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SpForm',
    props: {
      model: {type: Object, require: true}
    }
  }
</script>

<style lang="scss" scoped>

</style>
