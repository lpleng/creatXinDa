<template>
  <div id="app">
    <global_toper></global_toper>
    <router-view></router-view>
  </div>
</template>

<script>
import global_toper from "./components/global_toper"
// import main_bottom from "./components/main_bottom"
export default {
  name: 'app',
  components:{
    global_toper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
