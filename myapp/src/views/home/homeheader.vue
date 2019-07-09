<template>
    <div>
        <ul>
            <router-link to="/home/recommend" tag="li" activeClass="active">推荐</router-link>
           <router-link to="/home/furniture" tag="li" activeClass="active">家具</router-link>
           <router-link to="/home/house" tag="li" activeClass="active">家居</router-link>
           <router-link to="/home/activity" tag="li" activeClass="active">活动</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .active{
        color:red;
        border-bottom:5px solid red;

    }
</style>