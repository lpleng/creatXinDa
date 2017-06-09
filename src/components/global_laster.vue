<template>
  <Row>
    <Col :xs="0" :sm="24" :md="24">
      <p>&copy;Copyright 2016北京信达科技有限公司 京ICP备 16011621号</p>
    </Col>
  </Row>
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
</style>