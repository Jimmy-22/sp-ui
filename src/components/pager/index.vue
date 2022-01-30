<template>
  <div>
    <span v-for="page in pages">
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
    let pages = [
      1,
      this.total,
      this.current,
      this.current + 1,
      this.current + 2,
      this.current - 1,
      this.current - 2
    ]
    let u = unique(pages.sort((a, b) => a - b))
    let unique_pages = u.reduce((prev, current, index, array) => {
      prev.push(current)
      array[index + 1] !== undefined &&
        array[index + 1] - array[index] > 1 &&
        prev.push('...')
      return prev
    }, [])
    return {
      pages: unique_pages
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

<style lang="scss" scoped></style>
