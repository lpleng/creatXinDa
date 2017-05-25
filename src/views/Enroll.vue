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
    <!--------------------------这是注册页面-->
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
      <div class="change">
        <select>
          <option>省</option>
          <option>上海</option>
        </select>
        <select>
          <option>市</option>
          <option>济南</option>
        </select>
        <select>
          <option>区</option>
          <option>临港</option>
        </select>
      </div>
      <input type="text" placeholder="设置密码" id="mobile">
      <div class="denglu">立即注册</div>
      <p>注册即同意遵守</p><span>《服务协议》</span>
    </div>


<!--------------------------这是注册页面结束部分-->
    <div class="content_right">
        <p>已有账号？</p>
       <a :href="'#/Register'" :class="'fast'">{{'立即登录>>'}}</a>
        <br>
        <img src="/static/images/登录_03.jpg">
     </div> 
  </div>   
 </div>
</template>
<script>
// import qs from 'qs'
export default {
  name: 'enroll',
  created(){
    this.ajax.post('http://115.182.107.203:8088/xinda/xinda-api/register/sendsms',this.qs.stringify({cellphone: 12345678901,smsType:1,imgCode:'gb4n'})).then(function(data){
      console.log(data);
    })
  }
}
</script>
<style scoped lang="less">
// --------------------------这是公共样式
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
 .content{
    overflow: hidden;
    .logo_nei;
    height: 500px;
    margin-bottom: 100px;
 // --------------------这是中间的注册栏部分
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
       .change{
          width: 281px;
          .veri;
          border: none;
          select{
            width: 78px;
            height: 34px;
            &:nth-child(2){
              margin-left: 19px;
              margin-right: 19px;
            }
          }
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
