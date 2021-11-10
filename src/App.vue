<template>
  <div id="app">
    <div class="box">
      <sp-button size="big" type="warning" @click="output">大号按钮</sp-button>
      <sp-button type="primary" @click="output">普通按钮</sp-button>
      <sp-button size="mini" type="danger" @click="output">小号按钮</sp-button>
    </div>
    <div class="box">
      <sp-input size="big" placeholder="大号"></sp-input>
      <sp-input placeholder="普通"></sp-input>
      <sp-input size="mini" placeholder="小号"></sp-input>
      <sp-input disabled value="disabled"></sp-input>
      <!--    <sp-input error="用户名不能少于两个字" value="sss"></sp-input>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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

