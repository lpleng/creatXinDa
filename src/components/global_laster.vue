<template>
<div>
  <Row>
    <Col :xs="0" :sm="24" :md="24" align="center">
      <p>&copy;Copyright 2016北京信达科技有限公司 京ICP备 16011621号</p>
    </Col>
  </Row>
  <Row>
    <Col :xs="24" :sm="0" :md="0" align="center" class="foot-posi">
     <div @click="toHome"  class="colposi">
       <Icon type="android-home" size="30" ></Icon></br>
       <span>首页</span>    
     </div>
     <div @click="toStorList"  class="colposi">
        <Icon type="bag" size="30"></Icon></br>   
        <span>店铺</span>
     </div>
      <div @click="toShoppingcar"  class="colposi">
        <Icon type="ios-cart-outline" size="30"></Icon></Icon></br>
        <span>购物车</span>
      </div>
     <div @click="toMember"  class="colposi">
      <Icon type="ios-person-outline" size="30"></Icon></br>
      <span>我的</span>
     </div>
    </Col>
  </Row>
</div>
</template>

<script>
export default {
  name: 'top',
  methods:{
    toHome(){
       this.$router.push({
          path: "/HOME",
          query: {
           
          }
        })
    },
    toStorList(){
       this.$router.push({
          path: "/Store_list",
          query: {
           
          }
        })
    },
    toShoppingcar(){
       this.$router.push({
          path: "/shopping_car",
          query: {
           
          }
        })
    },
    toMember(){
       this.$router.push({
          path: "/Member",
          query: {
           
          }
        })
    },
  }
}
</script>


<style scoped lang="less">

    .foot-posi{
      position:fixed;
      bottom:0;
    }
    .colposi{
      background: rgba(255,255,255,.7);
      width:25%;
      height: 50px;
      margin-top:50px;  
      float:left;
      display:inline-block;
      cursor:pointer;  
    
    
  }
</style>