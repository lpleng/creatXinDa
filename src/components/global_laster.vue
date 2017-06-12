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
     <span>首页</span>
    </Col>
     <Col :xs="6" :sm="0" :md="0" align="middle">       
        <span>店铺</span>
    </Col>
     <Col :xs="6" :sm="0" :md="0" align="middle">
       <span>购物车</span>
    </Col>
     <Col :xs="6" :sm="0" :md="0" align="middle">
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


<style scoped>
p{
    color: #000;
    background: #ccc;
    line-height: 45px;
    text-align: center;
}
.all_bottom{
  width: 100%;
  background:#fff;
  height: 50px;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  
}
</style>