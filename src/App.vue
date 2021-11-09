<template>
  <div id="app">
    <sp-button type="success" @click="output">按钮来了</sp-button>
    <hr>
    <sp-input placeholder="okok"></sp-input>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    output(e) {
      console.log(e)
    }
  }
}
</script>

