<template>
    <div>
        <homeswiper :key="datalist.length">
            <div class="swiper-slide" v-for="data in datalist" :key="data.id">
                <img :src="data.bannerImgSrc"/>
            </div>
        </homeswiper>
        <homeheader></homeheader>
        <router-view></router-view>
    </div>
</template>

<script>
import homeswiper from './home/homeswiper'
import homeheader from './home/homeheader'
import axios from 'axios'
    export default {
        data(){
            return{
                datalist:[]
            }
        },
        components:{
            homeheader,
            homeswiper
        },
        mounted(){
            axios.get("v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1562664148559").then(res=>{
                console.log(res.data.data.modules[0].moduleContent.banners)
                this.datalist=res.data.data.modules[0].moduleContent.banners
            })
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }
</style>