import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home.vue'
import classify from '@/views/classify.vue'
import cart from '@/views/cart.vue'
import news from '@/views/news.vue'
import my from '@/views/my.vue'
import detail from '@/views/detail.vue'
import recommend from '@/views/home/recommend.vue'
import furniture from '@/views/home/furniture.vue'
import house from '@/views/home/house.vue'
import activity from '@/views/home/activity.vue'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      // name: 'home',
      component: home,
      children:[
        {
          path: 'recommend',
          // name: 'home',
          component: recommend
        }, 

        {
          path: 'furniture',
          // name: 'home',
          component: furniture
        }, 

        {
          path: 'house',
          // name: 'home',
          component: house
        }, 

        {
          path: 'activity',
          // name: 'home',
          component: activity
        },
        {
          path:'',
          redirect:'/home/recommend'
        }
      ]
    } ,
    {
      path:'/detail/:id',
      component:detail
    },

    {
      path: '/classify',
      // name: 'home',
      component: classify
    },
     {
      path: '/cart',
      // name: 'home',
      component: cart
    },
     {
      path: '/news',
      // name: 'home',
      component: news
    },
     {
      path: '/my',
      // name: 'home',
      component: my
    },
    {
      path:'*',
      redirect:'/home'
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
