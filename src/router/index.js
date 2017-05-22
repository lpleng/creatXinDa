import Vue from 'vue'
import Router from 'vue-router'

import Common from '@/views/Common'
import Home from '@/views/Home'
import Action from '@/views/Action'
import Register from '@/views/Register'
import Order_info from '@/views/Order_info'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Common',
      component: Common,
      children:[
        {
          path:'Home',
          name:'Home',
          component:Home
        },{
          path:"Order_info",
          name:"Order_info",
          component:Order_info
        }
      ]
    },
    {
      path: '/action',
      name: 'Action',
      component: Action,
      children:[
        {
          path:'register',
          name:'register',
          component:Register//enroll
        }
      ]
    },
  ]
});
