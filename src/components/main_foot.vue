<template>
  <Row class="all" type="flex" justify="center">
    <Col class="content" :xs="0" :sm="24" :md="18">
      <ul>
        <li class="first">关于我们</li>
        <li>联系我们：content@xinkeher.com</li>
        <li>公司地址：北京市朝阳区大望路soho现代城</li>
        <li>官方客服电话：010-83421842</li>
      </ul>
    </Col>
  </Row>
</template>

<script>
export default {
  name: 'main_bottom'
}
</script>

<style scoped lang="less">
.all{
  background: #f8f8f8;
  font-size: 14px;
  .content{
    height: 100%;
    padding: 10px 24px;
    height: 200px;
    ul{
      float: left;
      li{
        &.first{
          line-height: 70px; 
        }
        line-height: 26px;
      }
    }
  }
}
</style>