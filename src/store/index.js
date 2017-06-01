import Vuex  from 'vuex'
import Vue from 'vue'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    //状态集合
    state:{
        //购物车数量
        cartNum:0,
        shopKind:[],
        username:'我来了'
    },
    //突变集合---用来操作状态集合
    mutations:{
        SETCARTNUM(state,num){
            state.cartNum = num;
        },
        SETKIND(state,num){
            state.shopKind.push(mum);
        },
        SETUSERNAME(state,username){
            state.username = username;
        }
    },
    //动作集合---用来操作突变集合的
    actions:{
        setCartNum({commit}){
            axios.post("/xinda-api/cart/cart-num").then(function(res){
                commit("SETCARTNUM",res.data.data.cartNum)
            })
        },
        setKind({commit},num){
            commit("SETKIND",num)
        },
        setusername({commit},username=''){
            var _this = this;
            axios.post("/xinda-api/sso/login-info").then(function(res){
                console.log(res)
                if(res.data.data != null){
                    console.log("不是null")
                    commit("SETUSERNAME",res.data.data.name)
                }else{
                    console.log("null")
                    commit("SETUSERNAME",username)
                }
            });
            
        }
    },
    //显示集合
    getters:{
        getCartNum(state){
            return state.cartNum
        },
        getKind(state){
            return state.shopKind
        },
        getusername(state){
            return state.username
        }
    }
});
