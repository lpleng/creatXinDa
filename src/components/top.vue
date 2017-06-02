<template>
  <div>
    <p>这是顶部<a href="#/action/register">请注册</a></p>
    <input type="number"><br>
    <input type="tel" style="ime-mode: disabled;" maxlength="10">
    <button @click="change=!change">点击</button>
    <transition name="slide">
      <div class="box" v-show="change"></div>
    </transition>
    
  </div>
  
</template>

<script>

export default {
  name: 'top',
  data(){
    return{
      aa:[],
      change:true
    }
  },
  created(){
    this.getdata()
  },
  methods:{
    getdata(){
      this.ajax.post("http://115.182.107.203:8088/xinda/xinda-api/product/style/list").then(function (backdata) {
        console.log(backdata)
      },function(err){

      })
    }
  }
}
</script>

<style scoped>
.box{
  width: 100px;
  height: 100px;
  background: #000;
}
.slide-enter-active, .slide-leave-active {
  transition: opacity 1s
}
.slide-enter, .slide-leave-active {
  opacity: 0
}
</style>   