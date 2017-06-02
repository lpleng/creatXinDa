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
      <div class="content_left_box">
        <input type="text" placeholder="请输入手机号" id="mobile" v-model="userNumber"><br>
        <input type="text" placeholder="请输入密码" id="mobile" v-model="userpassword"><br>
        <div class="yanzheng">
          <input type="text" placeholder="请输入验证码" class="verif" v-model="imgCode">
          <span class="verif1"><img :src="imgCodeUrl" alt="点击刷新" title="尝试刷新"></span><br>
        </div>
        <!--<p>忘记密码？</p>-->
        <a :href="'#/Password'">{{'忘记密码？'}}</a>
        <button class="denglu success_change"  @click="loginNow">立即登录</button>
        <p class="warning_p" :class="status<0?'falid_p':'success_p'" v-show="msg?true:false">{{msg}}</p>
      </div>
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
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'register',
  data() {
    return {
      msg: '',
      status:-14,
      userNumber:'',//登录页用户手机号码
      userpassword:'',//登录页用户密码输入
      imgCode:'',//图片验证码
      imgCodeUrl:'/xinda-api/ajaxAuthcode',
    }
  },
  created(){
  },
  computed:{
    ...mapGetters(["getusername"]),
  },
  methods:{
    ...mapActions(["setusername","setCartNum"]),
    loginNow(){//验证登录
      let _this = this;
      this.ajax.post("/xinda-api/sso/login",this.qs.stringify({
        loginId: this.userNumber,
        password:this.md5(this.userpassword),
        imgCode:this.imgCode
      })).then(function (res) {
        _this.status = res.data.status;
        _this.msg = res.data.msg;
        if(res.data.status == 1){//登录成功
          _this.setusername();
          _this.setCartNum();
          setTimeout(function() {
            _this.$router.push({name:"Home",params:{'username':_this.userNumber}})
          }, 500);
        }
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
  .veri{
        height: 34px;
        border: 1px solid #cbcbcb;
        border-radius: 3px;
        margin: 10px 0;
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
     .content_left_box{
       width: 285px;
       .mg
     }
     p{
        color: red;
        font-size: 16px;
        text-align: center;
        margin-top: 20px;
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
        margin-top: 23px;
        &:first-child{
           margin-top: 54px!important;
        }
       }
       .yanzheng{
         width: 284px;
         height: 53px;
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
        color: #2693d4; 
        width: 100px;
        float: right;
        margin-bottom: 20px;
      }
      .denglu{
        display: block;
         outline: none;
         .veri;.txl;
         line-height: 34px;
          width: 281px;
        .word;
         margin-top: 20px;
           &.success_change{
             cursor: pointer;
             background: #2693d4;
             color: #fff;
           }
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
