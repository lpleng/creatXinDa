<template>
<div>
  <Row>
    <Col :xs="0" :sm="24" :md="24" >
      <p>&copy;Copyright 2016北京信达科技有限公司 京ICP备 16011621号</p>
    </Col>
  </Row>
  <div class="all_bottom">
    <Row>
    <Col :xs="6" :sm="0" :md="0" align="middle">
    <Icon type="android-home" size="30" ></Icon></br>
     <span>首页</span>    
    </Col>
     <Col :xs="6" :sm="0" :md="0" align="middle">  
        <Icon type="bag" size="30"></Icon></br>   
        <span>店铺</span>
    </Col>
     <Col :xs="6" :sm="0" :md="0" align="middle">
    <Icon type="ios-cart-outline" size="30"></Icon></Icon></br>
       <span>购物车</span>
    </Col>
     <Col :xs="6" :sm="0" :md="0" align="middle">
     <Icon type="ios-person-outline" size="30"></Icon></br>
       <span>我的</span>
    </Col>
  </Row>
  </div>
  </div>
</template>

<script>
export default {
  name: 'top'
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

  span {
    display:block;
    cursor:pointer;
  }
  
}
</style>