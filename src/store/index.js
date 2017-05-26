import Vuex  from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    //状态集合
    state:{
        //购物车数量
        cartNum:0,
        shopKind:[]
    },
    //突变集合---用来操作状态集合
    mutations:{
        SETCARTNUM(state,num){
            state.cartNum = num;
        },
        SETKIND(state,num){
            state.shopKind.push(mum);
        }
    },
    //动作集合---用来操作突变集合的
    actions:{
        setCartNum({commit},num){
            commit('SETCARTNUM',num);
        },
        setKind({cpmmit},num){
            commit("SETKIND",num)
        }
    },
    //显示集合
    getters:{
        getCartNum(state){
            return state.cartNum
        },
        getKind(state){
            return state.shopKind
        }
    }
});
