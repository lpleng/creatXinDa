<template>
  <div>
    <div class="logo">
    <div class="logo_nei">
      <div class="logo_left">
        <img src="../../images/logo.png"><span>信达</span>
      </div>
      <p>欢迎登录</p>
    </div>
  </div>
    <!--------------------------这是注册页面-->
  </div>
</template>

<script>
export default {
  name: 'enroll'
}
</script>
<style scoped lang="less">
/*--------------------------这是公共样式*/
  .txl{
    text-align: center;
  }
  .mg{
    margin: 0 auto;
  }
  .fl{
    float: left;
  }
  .logo_nei{
    width: 1200px;
    height: 97px;
    .mg;
  }
  .word{
     text-align: center;
     font-size:16px;
     line-height: 34px;
  }
  .content_l{
    width: 578px;
    height: 381px;
     margin-top: 55px;
  }
  /*// ----------------这是公共样式结束部分
  // --------------------这是最上面的logo栏*/
  .logo{
    width: 100%;
    height: 97px;
      .logo_left,p{
      .fl;
      margin: 20px 10px 20px 20px;
      }
      .logo_left{
        width: 136px;
        height: 56px;
        font-size: 30px;
        font-weight: 800;
        img{
          .fl;
        }
      }
      p{
         width: 123px;
         height: 47px;
         border-left: 1px solid #b4b4b4;
          font-size: 17px;
          line-height: 47px;
          .txl;
          .fl;
          color: #797979;
       }
  }
  // --------------------这是最上面的logo栏结束部分
</style>
