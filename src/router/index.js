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
       ]
    }
  ]
});
