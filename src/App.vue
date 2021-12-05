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
        <sp-form :model="model" :rules="rules" ref="loginForm">
          <sp-form-item label="用户名" prop="username">
            <sp-input v-model="model.username"></sp-input>   {{model.username}}
          </sp-form-item>
          <sp-form-item>
            <button @click="submit">提交</button>
          </sp-form-item>
        </sp-form>
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
    <div class="box">
      <sp-notice title="试试看" message="这是信息"></sp-notice>
    </div>
  </div>
</template>

<script>
  import Communication from './components/communication/index'
  import create from '@/utils/create'
  import Notice from '../modules/spinfo-ui/Notice/Notice'

  export default {
    name: 'App',
    components: {Communication},
    data() {
      return {
        model: {
          username: 'messi'
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名'}
          ]
        }
      }
    },
    methods: {
      output(e) {
        // console.log(e)
      },
      submit() {
        this.$refs.loginForm.validate(isValid => {
          create(Notice, {
            title: '提示信息',
            message: isValid ? '成功！！！': '失败！！！',
            duration: 3000
          }).show()
        })
        // this.$refs.loginForm.validate(isValid => {
        //   if (isValid) {
        //     console.log('okokok')
        //   } else {
        //     alert('false')
        //   }
        // })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .box {
    margin-top: 20px;
  }
  button {cursor: pointer;width: 100px;height: 40px;border: 1px solid blue;}
</style>

