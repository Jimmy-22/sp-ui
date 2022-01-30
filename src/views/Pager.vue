<template>
  <div>
    <sp-pager :total="20" :current="3"></sp-pager>
  </div>
</template>

<script>
import SpPager from '../components/pager/index.vue'
export default {
  name: 'Pager',
  components: { SpPager }
}
</script>
