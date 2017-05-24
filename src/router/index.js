import Vue from 'vue'
import Router from 'vue-router'
import vueResource from "vue-resource"
import Common from '@/views/Common'
import Details from '@/views/Details'
import Action from '@/views/Action'
import Home from '@/views/Home'
import Register from '@/views/Register'
import Enroll from '@/views/Enroll'
import Order_info from '@/views/Order_info'
import Join_us from '@/views/Join_us'
import Password from '@/views/Password'
import List_page from '@/views/List_page'
import Shopfrontpage from '@/views/Shopfrontpage'
import shopping_car from '@/views/shopping_car'
import Store_list from '@/views/Store_list'
Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  routes: [
     {
       path:"/Register",
       name:"Register",
       component:Register
    },
     {
       path:"/Enroll",
       name:"Enroll",
       component:Enroll
    },
     {
       path:"/Password",
       name:"Password",
       component:Password
    },
    {
      path: '/',
      name: 'Common',
      component: Common,
      children:[{
          path:"Order_info",
          name:"Order_info",
          component:Order_info
        },
        {
          path:"shopping_car",
          name:"shopping_car",
          component:shopping_car
        },
        {
          path:'Details',
          name:'Details',
          component:Details
        },{
          path:'home',
          alias:"",
          name:'Home',
          component:Home
        },{
          path:"join_us",
          name:"Join_us",
          component:Join_us
        },
        {
          path:"list_page",
          name:"list_page",
          component:List_page
        },
       ]
        },{
          path:"shopfrontpage",
          name:"Shopfrontpage",
          component:Shopfrontpage
        },
        {
          path:"store_list",
          name:"store_list",
          component:Store_list
        }
        ]
});
