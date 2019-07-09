<template>
<div>
  <router-view></router-view>
  <tabbar></tabbar>
</div>
</template>
<script>
//es6标准导出
import tabbar from '@/components/tabbar'
// vue.component("home",home)定义全局组件
export default {
  data(){
    return{
      mytext:"11111",
      datalist:[]
    }
  },
  components:{
   tabbar
  }
}
</script>

<style lang="scss">
    *{
      padding:0;
      margin: 0;
    }
    li{
      list-style: none;
    }
</style>
