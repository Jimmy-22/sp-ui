<template>
  <div class="wrapper" :class="{error}">
    <input
      type="text"
      :placeholder="placeholder"
      :value="value"
      :disabled="disabled"
      :class="['input',`input-${size}`]"
    >
    <template v-if="error">
      <span style="color: #F1453D">{{error}}</span>
    </template>
  </div>
</template>

<script>
export default {
  name:'SpInput',
  props: {
    placeholder: String,
    value: String,
    error: String,
    size: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  $height: 36px;
  $border-color: #999;
  $border-color-hover: #666;
  $font-size: 14px;
  $red: #F1453D;
  .wrapper {
    font-size: $font-size;
    display: inline-block;
    margin-right: 10px;
    &.error {
      > .input {border-color: $red;}
    }
    > .input {
      border: 1px solid $border-color;
      background-color: white;
      height: $height;
      border-radius: 4px;
      padding: 0 15px;
      font-size: inherit;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        //box-shadow: inset 0 1px 3px blue;
        border-color: #58CFFF;
        outline: none;
      }
      &[disabled] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
      &-big {
        height: 40px;
      }
      &-mini {
        padding: 0 12px;
        font-size: 12px;
        height: 32px;
        border-radius: 3px;
      }
    }
  }
</style>
