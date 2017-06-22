import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/views/Common'
import Details from '@/views/Details'
import Action from '@/views/Action'
import Home from '@/views/Home'
import Register from '@/views/Register' //@==..
import Enroll from '@/views/Enroll'
import Order_info from '@/views/Order_info'
import Join_us from '@/views/Join_us'
import Password from '@/views/Password'
import List_page from '@/views/List_page'
import List_page_1 from '@/views/List_page_1'
import Shopfrontpage from '@/views/Shopfrontpage'
import shopping_car from '@/views/shopping_car'
import Store_list from '@/views/Store_list'
import top from "@/components/top"
import order_success from "@/views/order_success"
import order_false from "@/views/order_false"
import Member from '@/views/Member'
import Member_center from '@/views/Member_center'
import Member_userrevew from '@/views/Member_userrevew'
import Member_settings from '@/views/Member_settings'
import all_goods_mb from '@/views/all_goods_mb.vue'
import Lizi from '@/views/Lizi'
import Lizi_1 from '@/views/Lizi_1'
import myPay from '@/views/myPay'
import Mine from '@/views/Mine'
import Mine_setting from '@/views/Mine_setting'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path:"/all_goods",
            name:"all_goods",
            component: all_goods_mb
        },
           {
            path:"/myPay",
            name:"myPay",
            component: myPay
        },   
        {
            path: "/Register",
            name: "Register",
            component: Register
        },
        { //测试部分，一下内容删除
            path: "/top",
            name: "top",
            component: top,
            children: [{
                path: "*",
                name: '',
                redirect: "/top",
                component: top
            }]
        }, //测试结束部分，以上内容删除，仅仅用于测试

        {
            path: "/Enroll",
            name: "Enroll",
            component: Enroll
        },
        {
            path: "/Password",
            name: "Password",
            component: Password
        },
         {
            path: "/Mine_setting",
            name: "Mine_setting",
            component: Mine_setting
        },
        {
            path: '/',
            name: 'Common',
            component: Common,
            children: [
                        {
                        path: "Lizi",
                        name: "Lizi",
                        component: Lizi
                    },
                    {
                        path: "Lizi_1",
                        name: "Lizi_1",
                        component: Lizi_1
                    },
                        {
                        path: "Order_info",
                        name: "Order_info",
                        component: Order_info
                    },
                    {
                        path: "/order_success",
                        name: "order_success",
                        component: order_success
                    },
                    {
                        path: "/order_false",
                        name: "order_false",
                        component: order_false
                    },
                    {
                        path: "shopping_car",
                        name: "shopping_car",
                        component: shopping_car
                    },
                    {
                        path: "list_page",
                        name: "list_page",
                        component: List_page
                    },
                    {
                        path: "list_page_1",
                        name: "list_page_1",
                        component: List_page_1
                    },
                    {
                        path: 'Details',
                        name: 'Details',
                        component: Details
                    }, {
                        path: 'home',
                        alias: "",
                        name: 'Home',
                        component: Home
                    }, {
                        path: "join_us",
                        name: "Join_us",
                        component: Join_us
                    }, {
                        path: "shopfrontpage",
                        name: "Shopfrontpage",
                        component: Shopfrontpage
                    },
                    {
                        path: "store_list",
                        name: "store_list",
                        component: Store_list
                    },
                    {
                        path: "Member",
                        name: "Member",
                        component: Member,
                        children: [{
                                path: "Member_center",
                                name: "Member_center",
                                alias:"/",
                                component: Member_center
                            },
                            {
                                path: "Member_userrevew",
                                name: "Member_userrevew",
                                component: Member_userrevew
                            },
                            {
                                path: "Member_settings",
                                name: "Member_settings",
                                component: Member_settings
                            },
                        ]
                    },
                      {
                        path: "Mine",
                        name: "Mine",
                        component: Mine
                    },
                ] //child 的中括号
        }
    ] //路由的中括号
})