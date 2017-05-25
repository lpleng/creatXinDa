<template>
  <div>
    <p>这是顶部<a href="#/action/register">请注册</a></p>
  </div>
  
</template>

<script>
export default {
  name: 'top',
  data(){
    return{
      aa:[]
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
</style>   