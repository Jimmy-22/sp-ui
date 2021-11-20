<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "SpCollapseItem",
  props: {
    title: {
      type: String,
      require: true
    },
    name: {
      type: String,
      requireL: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  inject: ['eventBus'],
  created() {
    console.log('son created')
  },
  mounted() {
    console.log('son mounted')
    this.eventBus && this.eventBus.$on('updated: selected', (name) => {
      if (name !== this.name) {
        this.close()
      } else {
        this.show()
      }
    })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.open = false
      } else {
        this.eventBus && this.eventBus.$emit('updated: selected', this.name)
      }
    },
    close() {
      this.open = false
    },
    show() {
      this.open = true
    }
  }
}
</script>
<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapse-item {
    > .title {
      min-height: 35px;
      font-size: 14px;
      background-color: pink;
      border: 1px solid $grey;
      display: flex;
      align-items: center;
      padding: 0 8px;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      cursor: pointer;
    }
    &:first-child{
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    > .content {
      min-height: 50px;
      padding: 8px;
    }
  }
</style>