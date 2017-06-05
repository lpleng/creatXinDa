<template>
  <div>
    <p>这是顶部<a href="#/action/register">请注册</a></p>
    <input type="number"><br>
    <input type="tel" style="ime-mode: disabled;" maxlength="10">
    <button @click="change=!change">点击</button>
    <transition name="slide">
      <div class="box" v-show="change"><div></div></div>
    </transition>
    <div class="other-con">
        <div class="bottom">
            <div class="btns" @click="showOther">点dianidanidnandansdk</div>
            <transition name="slide" v-for="(item,index) in balls" :key="item.message">
                <div :class="item.message" v-show="ballShow" >{{index+1}}</div>
            </transition>
        </div>
    </div>
    <div>
      <router-link to="/top/1" >点击1</router-link>
    </div>
    <div>
      <router-link to="/top/2" >点击2</router-link>
    </div>
    <div>
      <router-link to="/top/3" >点击3</router-link>
    </div>
    <div>
      <router-link to="/top/4" >点击4</router-link>
    </div>         
    
  </div>
  
</template>

<script>

export default {
  name: 'top',
  data(){
    return{
      aa:[],
      change:true,
      ballShow: false,
      balls: [
        {message:"one"},
        {message:"two"},
        {message:"three"},
        {message:"four"},
        {message:"five"}
      ]
    }
  },
  created(){
    this.getdata()
    console.log(123)
  },
  methods:{
    getdata(){
      this.ajax.post("http://115.182.107.203:8088/xinda/xinda-api/product/style/list").then(function (backdata) {
        console.log(backdata)
      },function(err){

      })
    },
    showOther () {
      this.ballShow = !this.ballShow;
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
  transition: height 1s
}
.slide-enter, .slide-leave-active {
  height: 0
}
.fade-enter-active, .fade-leave-active {
  transition: height 2s;
  overflow: hidden;
}
.fade-enter, .fade-leave-active {
  height: 0;
  overflow: hidden;
}
.bottom div {
width: 20px ;
height: 20px;
overflow: hidden;
margin: 10px;
background: pink;
text-align: center;
line-height: 20px;
}
.router-link-active{
  padding: 10px;
  border: 1px solid #00f;
}
</style>   