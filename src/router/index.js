import Vue from 'vue'
import Router from 'vue-router'

import Common from '@/views/Common'
import Details from '@/views/Details'
import Action from '@/views/Action'
import Register from '@/views/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Common',
      component: Common,
      children:[
        {
          path:'Details',
          name:'Details',
          component:Details
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
})
