<template>
  <div>
   <div class="logo">
    <div class="logo_nei">
      <div class="logo_left">
        <img src="/static/images/logo.png"><span>信达</span>
      </div>
      <p>欢迎登录</p>
    </div>
  </div>
   <!--------------------------这是修改密码页面-->
 <div class="content"> 
    <div id="content_left">
      <input type="text" placeholder="请输入手机号" id="mobile" ><br>
      <div class="yanzheng">
        <input type="text" placeholder="请输入验证码" class="verif">
        <span class="verif1">123</span><br>
      </div>
      <div class="yanzheng">
        <input type="text" placeholder="请输入验证码" class="verif">
        <span class="verif1">点击获取</span><br>
      </div>
      <input type="text" placeholder="设置密码" id="mobile"><br>
      <input type="text" placeholder="请重新设置密码" id="mobile">
      <div class="denglu">确认修改</div>
    </div>
<!--------------------------这是修改密码页面结束部分-->
    <div class="content_right">
        <p>已有账号？</p>
        <a :href="'#/Register'" :class="'fast'">{{'返回登录>>'}}</a>
        <br>
        <img src="/static/images/登录_03.jpg">
     </div> 
  </div>   
</div>
 </div> 
</template>

<script>
export default {
  name: 'password'
}
</script>

<style scoped lang="less">
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
    .veri{
       height: 34px;
        border: 1px solid #cbcbcb;
        border-radius: 3px;
        margin-left: 148px;
        margin-top: 23px;
  }
  // ----------------这是公共样式结束部分
  // --------------------这是最上面的logo栏
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
  .content{
    overflow: hidden;
    .logo_nei;
    height: 450px;
    margin-bottom: 100px;
    #content_left{
     .content_l;
     .fl;
      border-right: 1px solid #dadada;
      color: #2693d4;
       #mobile{
        width: 281px;
       .veri;
        &:first-child{
           margin-top: 54px!important;
        }
       }
        .verif{
         width: 172px;
          .veri;.fl;
       }
       .verif1{
         .txl;
         line-height: 30px;
         display: inline-block;
         width: 98px;
         .veri;
         .fl;
         margin-left: 10px;
       }
       .denglu{
         .veri;.txl;
         line-height: 30px;
          width: 281px;
       }
       p{
         color: #000;
         .fl;
          margin-left: 185px;
       }
    }
 .content_right{
      .content_l;
      .txl;
      .fl;
      line-height: 50px;
      p,a{
        font-size: 17px;
      }
      p{
        color: #6b6b6b;
      }
      div{
        color: #2693d4;
        &:hover{
          color: red;
        }
      }
      .fast{
        color: #2693d4;
         &:hover{
          color: red;
        }
      }
        } 
  }














</style>   