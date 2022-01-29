<template>
    <div>
        this is Pager
    </div>
</template>   

<script>
export default {
    name: 'SpPager',
    props:{
        total:{
            type: Number,
            required: true   
        },
        current:{
            type: Number,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped> 
</style>