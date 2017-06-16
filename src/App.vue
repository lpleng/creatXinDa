<template>
  <div id="app">
    <div class="mengban" v-show="show_mengban"></div>
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
    // function () {
    //   var aaa = document.body.clientWidth;
    //   var bbb = aaa > 320 ? aaa : 320;
    //   document.documentElement.style.fontSize = (bbb/1583) * 100 + "px"
    // }
  },
  methods:{
    changeSize(){
      var aaa = document.body.clientWidth;
      var bbb = aaa > 320 ? aaa : 320;
      if(bbb > 750){
          document.documentElement.style.fontSize = (bbb/1583) * 100 + "px"
      }else{
          document.documentElement.style.fontSize = (bbb/750) * 100 + "px"
      }
    }
  },
  computed:{
    ...mapGetters(["show_mengban"])
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
  height: 0.5rem;
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
</style>
