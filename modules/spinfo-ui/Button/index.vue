<template>
  <button
    :class="['btn', type]"
    @click="btnClick($event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'SpButton',
  props: {
    type: String
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
    height: 35px;
    padding: 0 15px;
    border: 1px solid #ddd;
    background-color: #fff;

    &.primary {
      border: 1px solid #ddd;
      background-color: blue;
      color: white;
    }

    &.success {
      border: 1px solid #ddd;
      background-color: green;
      color: white;
    }

    &.danger {
      border: 1px solid #ddd;
      background-color: red;
      color: white;
    }

    &.warning {
      border: 1px solid #ddd;
      background-color: orange;
      color: white;
    }
  }
</style>
