import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/views/Common'
import Details from '@/views/Details'
import Action from '@/views/Action'
import Home from '@/views/Home'
import Register from '@/views/Register'//@==..
import Enroll from '@/views/Enroll'
import Order_info from '@/views/Order_info'
import Join_us from '@/views/Join_us'
import Password from '@/views/Password'
import List_page from '@/views/List_page'
import Shopfrontpage from '@/views/Shopfrontpage'
import shopping_car from '@/views/shopping_car'
import Store_list from '@/views/Store_list'
import top  from "@/components/top"
import  order_success from "@/views/order_success"
import  order_false from "@/views/order_false"

import Member from '@/views/Member'
import Member_center from '@/views/Member_center'
import Member_userrevew from '@/views/Member_userrevew'
import Member_settings from '@/views/Member_settings'
Vue.use(Router)

export default new Router({
  routes: [
     {
       path:"/Register",
       name:"Register",
       component:Register
    },{
      path:"/top",
      name:"top",
      component:top
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
          path:"/order_success",
          name:"order_success",
          component:order_success
        },
         {
          path:"/order_false",
          name:"order_false",
          component:order_false
        },
        {
          path:"shopping_car",
          name:"shopping_car",
          component:shopping_car
        },
         {
          path:"list_page",
          name:"list_page",
          component:List_page
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
        },{
          path:"list_page",
          name:"list_page",
          component:List_page
        },{
          path:"shopfrontpage",
          name:"Shopfrontpage",
          component:Shopfrontpage
        },
        {
          path:"store_list",
          name:"store_list",
          component:Store_list
        },
        {
          path:"Member",
          name:"Member",
          component:Member,
          children:[{
            path:"/",
            name:"Member_center",
            component:Member_center
          },
          {
            path:"Member_userrevew",
            name:"Member_userrevew",
            component:Member_userrevew
          },
          {
            path:"Member_settings",
            name:"Member_settings",
            component:Member_settings
          },
          ]
        }
        ]//child 的中括号
    }]//路由的中括号
})
