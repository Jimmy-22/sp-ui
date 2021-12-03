<template>
  <div id="app">
    <div class="box">
      <sp-button size="big" type="warning" @click="output">大号按钮</sp-button>
      <sp-button type="primary" @click="output">普通按钮</sp-button>
      <sp-button size="mini" type="danger" @click="output">小号按钮</sp-button>
    </div>
    <div class="box">
      <sp-input size="big" placeholder="大号"></sp-input>
      <sp-input size="mini" placeholder="小号"></sp-input>
      <sp-input disabled value="disabled"></sp-input>
      <div class="box">
        双向绑定demo
        <sp-input v-model="model.username"></sp-input>   {{model.username}}
      </div>
      <!--    <sp-input error="用户名不能少于两个字" value="sss"></sp-input>-->
    </div>
    <div class="box">
      <sp-collapse>
        <sp-collapse-item title="标题1" name="1">内容1</sp-collapse-item>
        <sp-collapse-item title="标题2" name="2">内容2</sp-collapse-item>
        <sp-collapse-item title="标题3" name="3">内容3</sp-collapse-item>
      </sp-collapse>
    </div>
    <div class="box">
      <Communication></Communication>
    </div>
  </div>
</template>

<script>
  import Communication from './components/communication/index'

  export default {
    name: 'App',
    components: {Communication},
    data() {
      return {
        model: {
          username: 'messi'
        }
      }
    },
    methods: {
      output(e) {
        // console.log(e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    margin-top: 20px;
  }
</style>

