<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    provide() {
      return {
        //直接提供当前表单实例
        form: this
      }
    },
    name: 'SpForm',
    props: {
      model: {type: Object, require: true},
      rules: Object
    },
    methods: {
      validate(callback) {
        //全局校验，执行所有FormItem的validate方法
        //获取promise构成的数组
        const task = this.$children.filter(item => item.prop).map(item => item.validate())
        //检查校验结果
        Promise.all(task)
          .then(() => callback(true))
          .catch(() => callback(false))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
