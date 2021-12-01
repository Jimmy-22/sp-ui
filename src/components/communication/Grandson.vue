<template>
  <div>
    <p>~~~~~~~~~~~</p>
    <h3 @click="$emit('hi')">孙子</h3>
    <p>{{foo}}</p>
    <p>~~~~~~~~~~~</p>
  </div>
</template>
<script>
  export default {
    props: {
      foo: {
        type: String,
        default: ''
      }
    }
  }
</script>
