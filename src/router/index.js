import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/views/Common'
import Home from '@/views/Home'
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
          path:'',
          name:'Home',
          component:Home
        }
      ]
    }
  ]
});
