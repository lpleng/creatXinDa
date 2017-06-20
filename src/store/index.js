import Vuex from 'vuex'
import Vue from 'vue'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    //状态集合
    state: {
        //购物车数量
        cartNum: 0,
        shopKind: [],
        username: '',
        mengban_state: false,
        checkLogRes: 0,
        // islogin: false
        a:0 
    },
    //突变集合---用来操作状态集合
    mutations: {
        SETA(state,value){
            state.a = value;
        },
        SETCARTNUM(state, num) {
            state.cartNum = num;
        },
        SETKIND(state, num) {
            state.shopKind.push(mum);
        },
        SETUSERNAME(state, username) {
            state.username = username;
        },
        CHANGE_MENBAN(state, value){
            state.mengban_state = value;
        },
        CHECKLOG(state,value){
            state.checkLogRes = value
        }
    },
    //动作集合---用来操作突变集合的
    actions: {
        seta({commit},value){
            commit("SETA",value)
        },
        setCartNum({ commit }) {
            axios.post("/xinda-api/cart/cart-num").then(function(res) {
                commit("SETCARTNUM", res.data.data.cartNum)
            })
        },
        setKind({ commit }, num) {
            commit("SETKIND", num)
        },
        setusername({ commit }, username = '') {
            axios.post("/xinda-api/sso/login-info").then(function(res) {
                if (res.data.data != null) {
                    commit("SETUSERNAME", res.data.data.name)
                } else {
                    commit("SETUSERNAME", username)
                }
            });
        },
        change_mengban({ commit }, value = false) {
            commit("CHANGE_MENBAN", value)
        },
        checkLog({ commit },value = false){
            axios.post("/xinda-api/sso/login-info").then(function(res) {
                if (res.data.status != 1) {
                    commit("CHECKLOG", true)
                } else {
                    commit("CHECKLOG", false)
                }
            });
        },
        changeLog({ commit },value){
            commit("CHECKLOG", value);
        }
    },
    //显示集合
    getters: {
        getCartNum(state) {
            return state.cartNum
        },
        getKind(state) {
            return state.shopKind
        },
        getusername(state) {
            return state.username
        },
        show_mengban(state){
            return state.mengban_state
        },
        limitVister(state){
            return state.checkLogRes
        },
        geta(state){
            return state.a
        }
    }
});