<template>
   <nav>
       <ul>
           <router-link to="/home" tag="li" activeClass="active"><img src="@/assets/tabbarImg/home.png"/>首页</router-link>
           <router-link to="/classify" tag="li" activeClass="active"><img src="@/assets/tabbarImg/classify.png"/>分类</router-link>
           <router-link to="/cart" tag="li" activeClass="active"><img src="@/assets/tabbarImg/cart.png"/>购物车</router-link>
           <router-link to="/news" tag="li" activeClass="active"><img src="@/assets/tabbarImg/news.png"/>消息</router-link>
           <router-link to="/my" tag="li" activeClass="active"><img src="@/assets/tabbarImg/my.png"/>我的</router-link>
       </ul>
   </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.active{
    color: red;
}
nav{
    position: fixed;
    bottom:0px;
    left: 0px;
    width: 100%;
    height:50px;
    line-height: 50px;
    background: white;
    ul{
        display: flex;
        li{
            flex: 1;
            text-align: center;
            img{
                height:30px;
                width: 30px;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
}
</style>