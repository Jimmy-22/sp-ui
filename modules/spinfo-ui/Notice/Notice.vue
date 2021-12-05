<template>
  <div class="box" v-if="isShow">
    <h3>{{title}}</h3>
    <p class="box-content">{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: 'SpNotice',
    props: {
      title: {type: String, default: ''},
      message: {type: String, default: ''},
      duration: {type: Number, default: 1000}
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      show() {
        this.isShow = true
        setTimeout(this.hide, this.duration)
      },
      hide() {
        this.show = false
        this.remove()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    position: fixed;
    width: 100%;
    top: 16px;
    left: 0;
    text-align: center;
    background-color: #fff;
    border: grey 3px solid;
    box-sizing: border-box;
    pointer-events: none;
    &-content {
      width: 200px;
      margin: 10px auto;
      padding: 8px 16px;
      font-size: 14px;
      background: #fff;
      border-radius: 3px;
    }
  }
</style>