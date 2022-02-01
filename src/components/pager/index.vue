<template>
  <div class="pager" :class="{ hide: hideIfOnePage === true && total <= 1 }">
    <span
      @click="onclickPage(current - 1)"
      class="left"
      :class="{ disabled: current === 1 }"
    >
      < 上一页
    </span>
    <span
      v-for="page in pages"
      class="pager-item"
      :class="{ active: page === current, points: page === '...' }"
      @click="onclickPage(page)"
    >
      {{ page }}
    </span>
    <span
      @click="onclickPage(current + 1)"
      class="right"
      :class="{ disabled: current === total }"
    >
      下一页 >
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
  computed: {
    pages() {
      return unique(
        [
          1,
          this.total,
          this.current,
          this.current + 1,
          this.current + 2,
          this.current - 1,
          this.current - 2
        ].sort((a, b) => a - b)
      )
        .reduce((prev, current, index, array) => {
          prev.push(current)
          array[index + 1] !== undefined &&
            array[index + 1] - array[index] > 1 &&
            prev.push('...')
          return prev
        }, [])
        .filter((item) => {
          if ((item > 0 && item <= this.total) || item === '...') {
            return item
          }
        })
    }
  },
  methods: {
    onclickPage(n) {
      if (n !== '...') {
        this.$emit('update:current', n)
      }
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
  &.hide {
    display: none;
  }
  user-select: none;
  &-item {
    border: 2px solid grey;
    padding: 0 8px;
    margin: 0 4px;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active,
    &:hover {
      border-color: #58cfff;
    }
    &.active {
      cursor: default;
    }
    &.points {
      border: none;
    }
  }
}
.left,
.right {
  &.disabled {
    display: none;
  }
  border: 2px solid grey;
  border-radius: 4px;
  margin: 0 4px;
  cursor: pointer;
}
.left:hover,
.right:hover {
  border-color: #58cfff;
}
</style>
