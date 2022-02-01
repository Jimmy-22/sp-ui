<template>
  <div>
    <sp-pager :total="20" :current.sync="current"></sp-pager>
  </div>
</template>

<script>
import SpPager from '../components/pager/index.vue'
export default {
  name: 'Pager',
  components: { SpPager },
  data() {
    return {
      current: 1
    }
  }
}
</script>
