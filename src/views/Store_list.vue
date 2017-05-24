<template>
  <div>
      <div class="fir_list">首页/店铺列表</div>
      <div class="server_style">

      </div>
      <div class="selector">

      </div>




  </div>
</template>

<script>
export default {
  name: 'Store_list',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>


<style scoped lang="less">
    div{
      width:1200px;
      margin:27px auto;
      .fir_list{
        color: #696969;
        font-size: 13px;
        line-height: 39px;
      }
      .server_style{
        height:86px;
        width:100%;
        border:1px solid #bcbcbc;
        background: #f2f2f2;
      }
       .selector{
        height:43px;
        width:100%;
        border:1px solid #bcbcbc;
        background: #f2f2f2;
      }

    }
</style>
