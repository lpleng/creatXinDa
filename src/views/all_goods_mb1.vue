<template>
    <Row>
        <Col span="8" class="left">
            财税服务
        </Col>
        <Col span="16" class="right">
            财税服务
        </Col>
    </Row>
</template>
<script>
export default {
  name:"all_goods_mb",
  data(){
      return{
          active:[true,false,false,false]
      }
  }
}
</script>
<style scoped lang="less">
.left{
    // position: fixed;
    // top: 0;
    // left: 0;
    line-height: 78px;
    font-size: 24px;
    text-align: center;
}
.right{
    // position: absolute;
    // top: 0;
    // right: 0;
    line-height: 78px;
    
}
</style>


