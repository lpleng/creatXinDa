<template>
<div>
  <Row>
    <Col :xs="0" :sm="24" :md="24" >
      <p>&copy;Copyright 2016北京信达科技有限公司 京ICP备 16011621号</p>
    </Col>
  <!--</Row>-->
  <div class="all_bottom">
    <!--<Row>-->
    <Col :xs="6" :sm="0" :md="0" align="middle">
    <div @click="toHome">
    <Icon type="android-home" size="30" ></Icon></br>
     <span>首页</span>    
     </div>
    </Col>
     <Col :xs="6" :sm="0" :md="0" align="middle">  
     <div @click="toStorList">
        <Icon type="bag" size="30"></Icon></br>   
        <span>店铺</span>
        </div>
    </Col>
     <Col :xs="6" :sm="0" :md="0" align="middle">
      <div @click="toShoppingcar">
      <Icon type="ios-cart-outline" size="30"></Icon></Icon></br>
       <span>购物车</span>
      </div>
    </Col>
     <Col :xs="6" :sm="0" :md="0" align="middle">
     <div @click="toMember">
     <Icon type="ios-person-outline" size="30"></Icon></br>
       <span>我的</span>
       </div>
    </Col>
      </div>
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
p{
    color: #000;
    background: rgba(255,255,255,.7);
    line-height: 45px;
    text-align: center;
}
.all_bottom{
  width: 100%;
  background:#fff;
  height: 50px;
  margin-top:50px;
  position: fixed;
  bottom: 0;
  div {
    display:block;
    cursor:pointer;
  }
  
}
</style>