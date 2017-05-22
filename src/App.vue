<template>
  <div id="app">
    <global_toper></global_toper>
    <router-view></router-view>
    <global_laster></global_laster>
  </div>
</template>

<script>
import global_toper from "./components/global_toper"
import global_laster from "./components/global_laster"
export default {
  name: 'app',
  components:{
    global_toper,
    global_laster
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  /*margin-top: 60px;*/
}
html,body,div,p,span,a,img,ul,li,input,h3{
  margin: 0;
  padding: 0;
}
ul{list-style: none;}
a{color: #000;text-decoration: none;}
div,ul,li{
  box-sizing: border-box;
}
</style>
