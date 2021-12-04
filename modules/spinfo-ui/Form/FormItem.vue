<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="error">{{error}}</p>
<!--    <p>{{form.rules[prop]}}</p>-->
<!--    <p>{{form.model[prop]}}</p>-->
  </div>
</template>

<script>
  import Schema from 'async-validator'

  export default {
    inject: ['form'],
    name: "SpFormItem",
    props: {
      label: {type: String, default: ''},
      prop: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        error: ''
      }
    },
    mounted() {
      this.$on('validate',() => {
        this.validate()
      })
    },
    methods: {
      validate() {
        //async-validator
        //1.获取校验规则
        const rules = this.form.rules[this.prop]
        const value= this.form.model[this.prop]
        //2/构造一个validator实例
        const validator = new Schema({[this.prop]: rules})
        //3. 执行校验
        return validator.validate({[this.prop]: value}, errors => {
          if (errors) {
            this.error = errors[0].message
          } else {
            this.error = ''
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
