<template>
  <div class="all">
    <div class="content">
      <ul>
        <li class="first">关于我们</li>
        <li>联系我们：content@xinkeher.com</li>
        <li>公司地址：北京市朝阳区大望路soho现代城</li>
        <li>官方客服电话：010-83421842</li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'main_bottom'
}
</script>

<style scoped lang="less">
.all{
  background: #f8f8f8;
  height: 200px;
  font-size: 14px;
  .content{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 10px 24px;
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