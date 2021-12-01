<template>
  <div>
    <p>----------------</p>
    <h1>child2</h1>
    <!--非属性特性-->
    <p>{{$attrs.foo}}</p>
<!--    v-bind展开$attrs-->
    <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>
    <button @click="sendToChild1">给child1发消息</button>
    <p>----------------</p>
  </div>
</template>
<script>
  import Grandson from "./Grandson";
  export default {
    components:{Grandson},
    methods: {
      sendToChild1() {
        this.$bus.$emit('event-from-child2', 'this is child2-data')
      }
    }
  }
</script>
