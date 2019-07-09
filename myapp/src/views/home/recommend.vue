<template>
    <div>
        推荐
        <ul>
            <li v-for="data in datalist" :key="data" @click="handleClick(data)">
                {{data}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                datalist:['1111111','2222222','33333333']
            }
        },
        methods:{
            handleClick(id){
                // console.log('1')
                //跳转路由
                this.$router.push(`/detail/${id}`)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>