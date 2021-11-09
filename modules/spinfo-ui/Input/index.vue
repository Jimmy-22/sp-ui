<template>
  <input class="input" type="text" :placeholder="placeholder" :value="value">
</template>

<script>
export default {
  name:'SpInput',
  props: {
    placeholder: String,
    value: String
  }
}
</script>

<style scoped lang="scss">
  .input {
    border: 1px solid #ddd;
    background-color: white;
    height: 34px;
  }
</style>
