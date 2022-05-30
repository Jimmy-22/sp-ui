<template>
  <div class="box">
    <sp-button size="big" type="warning" @click="output">大号按钮</sp-button>
    <sp-button type="primary" @click="output">普通按钮</sp-button>
    <sp-button size="mini" type="danger" @click="output">小号按钮</sp-button>
  </div>
</template>

<script>
export default {
  methods: {
    output(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  margin-top: 20px;
}
button {
  cursor: pointer;
  width: 100px;
  height: 40px;
  border: 1px solid blue;
}
</style>
