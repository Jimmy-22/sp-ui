<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'SpCollapse',
  props: {
    selected: String
  },
  created() {
    console.log('father created')
  },
  mounted() {
    console.log('father mounted')
    this.eventBus.$emit('updated: selected', this.selected)
  },
  data() {
    return {
      eventBus: new Vue
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  }
}
</script>
<style scoped lang="scss">
  .collapse {
    width: 800px;
    border: 1px solid #ddd;
    border-radius: 4px;;
  }
</style>