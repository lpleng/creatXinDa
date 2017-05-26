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
   <!--------------------------这是登陆页面-->
  <div class="content"> 
    <div id="content_left">
      <input type="text" placeholder="请输入手机号" id="mobile" ><br>
      <input type="text" placeholder="请输入密码" id="mobile"><br>
      <div class="yanzheng">
        <input type="text" placeholder="请输入验证码" class="verif">
        <span class="verif1" @click="getAutoCode"><img :src="autoCode" alt="点击刷新"></span><br>
      </div>
      <!--<p>忘记密码？</p>-->
      <a :href="'#/Password'">{{'忘记密码？'}}</a>
      <div class="denglu" @click="loginNow">立即登录</div>
      <p class="warning_p" :class="logmessage.status==-1?'falid_p':'success_p'" v-show="show_warning">{{logmessage.msg}}</p>
    </div>
<!--------------------------这是登陆页面结束部分-->
    <div class="content_right">
        <p>还没有账号？</p>
        <a :href="'#/Enroll'" :class="'fast'">{{'立即注册>>'}}</a>
        <br>
        <img src="/static/images/登录_03.jpg">
     </div> 
  </div>   
 </div>
</template>
<script>

export default {
  name: 'register',
  data() {
    return {
      msg: '',
      logmessage:[],
      show_warning:false,
      autoCode:''
    }
  },
  created(){
    this.getAutoCode()
  },
  methods:{
    loginNow(){
      let _this = this;
      this.ajax.post("/xinda-api/sso/login",this.qs.stringify({loginId: 12345678901,password:"46f94c8de14fb36680850768ff1b7f2a",imgCode:"gb4n"})).then(function (res) {
        _this.logmessage = res.data;
        _this.show_warning = true;
        if(res.data.status == 1){
          setTimeout(function() {
            _this.$router.push({path:"/home"})
          }, 500);
        }
        console.log(res)
      })
    },
    getAutoCode(){
      let _this = this;
      this.ajax.post("/xinda-api/ajaxAuthcode").then(function(res){
          _this.autoCode = res.config.url;
          console.log(res)
      })
    }
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
    height: 435px;
    margin-bottom: 100px;
 // --------------------这是中间的登陆栏部分
    #content_left{
     .content_l;
     .fl;
     p{
        color: red;
        font-size: 16px;
        text-align: center;
        margin: 20px 0 0 148px;
        width: 279px;
        line-height: 40px;
        &.success_p{
          color: #0f0;
          border: 1px solid #0f0;
        }
        &.falid_p{
          color: #f00;
          border: 1px solid #f00;
        }
     }
      border-right: 1px solid #dadada;
      color: #2693d4;
      #mobile{
        width: 281px;
        height: 34px;
        border: 1px solid #cbcbcb;
        border-radius: 3px;
        margin-left: 148px;
        margin-top: 23px;
        &:first-child{
           margin-top: 54px!important;
        }
       }
       .yanzheng{
         width: 284px;
         height: 53px;
         margin-left: 148px;
          margin-top: 23px;
         .verif{
          width: 172px;
          height: 34px;
           .fl
        }
        .verif1{
        display: block;
        width: 85px;
        height: 34px;
        margin-left: 20px;
        img{width: 100%;height: 100%;cursor: pointer;}
         .fl;
        .word
      }
       }
     a{
       display: block;
        width: 425px;
        text-align: right;
        color: #2693d4; 
        opacity:.9;
      }
      .denglu{
        width: 281px;
        height: 34px;
        border: 1px solid #2693d4;
        border-radius: 3px;
         margin-left: 148px;
        .word;
         margin-top: 20px;
      }
    }
    //----------------------------- 这是右边的图片并注册部分
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
      .fast{
        color: #2693d4;
        &:hover{
          color: red;
        }
      }
    }  
  }   
</style>
