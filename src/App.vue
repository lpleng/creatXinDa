<template>
  <div id="app">
    <Modal v-model="show_mengban" @on-cancel="change_mengban(false)" @on-ok="okGo">
        <p>您还没有登录，是否立即登录？</p>
    </Modal>
    </Modal>
    <global_toper className="12"></global_toper>
    <router-view></router-view>
    <global_laster></global_laster>
  </div>
</template>

<script>
import global_toper from "./components/global_toper"
import global_laster from "./components/global_laster"
import {mapGetters,mapActions} from 'vuex'
import Vue from "vue"
export default {
  name: 'app',
  components:{
    global_toper,
    global_laster
  },
  created(){
      this.changeSize();
      window.onresize = this.changeSize;
  },
  methods:{
    ...mapActions(['change_mengban','checkLog']),
    changeSize(){
      var aaa = document.body.clientWidth;
      var bbb = aaa > 320 ? aaa : 320;
      if(bbb > 768){
          document.documentElement.style.fontSize = (bbb/1583) * 100 + "px"
      }else{
          document.documentElement.style.fontSize = (bbb/768) * 100 + "px"
      }
    },
    okGo(){
      this.change_mengban(false);
      this.$router.push({path:"/register",query:{beforePage:"/shopping_car"}})
    }
  },
  computed:{
    ...mapGetters(["show_mengban","limitVister"])
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  .mengban{
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 500;
      top: 0;
      left: 0;
      background: rgba(0,0,0,.6)
  }
}
html,body,div,p,span,a,img,ul,li,input,h3,button{
  margin: 0;
  padding: 0;
}
ul{list-style: none;}
a{color: #000;text-decoration: none;}
div,ul,li,span{
  box-sizing: border-box;
}
h1,h2,h3,h4,h5,h6{font-family: "黑体";margin: 0;}
.ivu-message{
  width: 2rem;
  top: 100px!important;
  font-size: 0.2rem!important;
  .ivu-message-error{
    color: red;
  }
  // .ivu-message-error{//ivu-message-success//ivu-message-warning
  //   color: red;
  // }
  i{
    font-size: 0.2rem!important;
  }
}
.ivu-modal{
    left: 50%;
    position: fixed!important;
    margin: 0!important;
    .ivu-modal-content{
      min-width: 240px;
      position: relative;
      left: -50%;
      .ivu-modal-body{
        padding: 0.1rem 0.15rem;
        font-size: 0.2rem;
        p{
          font-size: 0.2rem;
        }
      }
      .ivu-modal-close{
        right: 0.15rem;
        top: 0.08rem;
      }
      .ivu-modal-footer{
        padding: 0.05rem 0.15rem;
        button{font-size: 0.14rem;}
        .ivu-btn-large{
            padding: 0.06rem 0.15rem 0.07rem 0.15rem;
        }
      }
    }
  }
@media screen and (max-width: 768px){
  .ivu-modal{
    width: 5rem;
    p{
        font-size: 14px!important;
      }
      .ivu-modal-content{
        >div{
          padding: 5px 5px!important;
        }
        a{
          top: 0rem!important;
          right: 3px!important;
        }
      }
      .ivu-modal-footer{
        padding: 0.05rem 0.15rem;
        button{font-size: 12px!important;}
        .ivu-btn-large{
            padding: 4px 5px !important;
        }
      }
  }
}
</style>
