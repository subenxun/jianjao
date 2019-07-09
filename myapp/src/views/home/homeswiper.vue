<template>
 <div class="swiper-container a">
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          
          </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
    export default {
         mounted(){
            // console.log("swiper-mounted")
            new Swiper ('.a',{
                // direction: 'vertical'
                loop:true,
                    // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                }
            })
          }      
    }
</script>

<style lang="scss" scoped>
  .swiper-wrapper{
    img{
      width:100%;
    }
    // width: 100%;
  }
</style>