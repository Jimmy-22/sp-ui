<template>
  <button :class="['btn', `type-${type}`, `size-${size}`]" @click="btnClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SpButton',
  props: {
    type: String,
    size: String
  },
  methods: {
    btnClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  height: 36px;
  padding: 0 20px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: #fff;
  margin-right: 10px;
  cursor: pointer;
}

.type {
  &-primary {
    border: 1px solid #ddd;
    background-color: lightblue;
    color: white;
  }
  &-success {
    border: 1px solid #ddd;
    background-color: green;
    color: white;
  }
  &-danger {
    border: 1px solid #ddd;
    background-color: #fd543e;
    color: white;
  }
  &-warning {
    border: 1px solid #ddd;
    background-color: orange;
    color: white;
  }
}

.size {
  &-big {
    height: 40px;
  }
  &-mini {
    height: 32px;
    font-size: 12px;
    border-radius: 3px;
    padding: 0 15px;
  }
}
</style>
