<template>
  <div class="pager">
    <span
      v-for="page in pages"
      class="pager-item"
      :class="{ active: page === current }"
    >
      {{ page }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SpPager',
  props: {
    total: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    hideIfOnePage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    let pages = unique(
      [
        1,
        this.total,
        this.current,
        this.current + 1,
        this.current + 2,
        this.current - 1,
        this.current - 2
      ].sort((a, b) => a - b)
    ).reduce((prev, current, index, array) => {
      prev.push(current)
      array[index + 1] !== undefined &&
        array[index + 1] - array[index] > 1 &&
        prev.push('...')
      return prev
    }, [])
    return {
      pages
    }
  }
}

function unique(array) {
  // return [...new Set(array)]
  const obj = {}
  array.map((number) => {
    obj[number] = true
  })
  return Object.keys(obj).map((s) => parseInt(s, 10))
}
</script>

<style lang="scss" scoped>
.pager {
  &-item {
    border: 1px solid grey;
    padding: 0 8px;
    margin: 0 4px;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active,
    &:hover {
      background-color: pink;
    }
    &.active {
      cursor: default;
    }
  }
}
</style>
