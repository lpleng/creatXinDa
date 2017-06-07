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
      <div class="cont_left_box">
        <div class="pwd_warning" v-show='msg!=""' :class="{success:status==1}">{{msg}}</div>
        <!--手机号码输入-->
        <input type="number" placeholder="请输入手机号" class="mobile" v-model="userNumber"><br>
        <div class="yanzheng">
          <!--密码输入-->
          <input type="text" placeholder="请输入验证码" class="verif" v-model="imgCode">
          <span class="verif1"><img :src="imgCodeUrl" alt="点击刷新" @click="change_code"></span><br>
        </div>
        <!--短信验证码输入-->
        <div class="yanzheng">
          <input type="text" placeholder="请输入验证码" class="verif" v-model="mobileCode">
          <button class="click_gain" @click="clickCode" :disabled="time_count>0" :class="{have_clicked:time_count>=0}">点击获取<span v-show="time_count>=0">({{time_count}})</span></button><br>
        </div>
        <!--重置密码-->
        <input type="password" placeholder="设置6-20位含数字、字母密码" class="mobile" v-model="new_pwd"><br>
        <input type="password" placeholder="请再次输入密码" class="mobile" v-model="again_new_pwd" @keyup.13="makeSureChange">
        <button class="denglu" @click="makeSureChange" :disabled="status>0?false:true" :class="{success_change:status==1}" id="makesure">确认修改</button>
      </div>
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
  name: 'password',
  data(){
    return{
      msg:'',//显示请求返回的数据
      time_count:-1,
      userNumber:'',
      imgCode:'',
      mobileCode:'',
      new_pwd:'',//密码
      again_new_pwd:'',//再一次输入 密码
      status:-1,
      imgCodeUrl :'/xinda-api/ajaxAuthcode',
    }
  },
  methods:{
    text_phone(value){
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)
    },
    text_pwd(value){
      return /^1[3|4|5|7|8][0-9]{9}$/.test(value)
    },
    //  userpassword_oniput(){
    //   let a = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
    //   if(a.test(this.new_pwd)||this.new_pwd==''){
    //     this.bluee = false
    //   }else{
    //     this.bluee = true
    //   }
    // },
    // mobile_oninput(){
    //   let a = /^1[3|4|5|7|8][0-9]{9}$/;
    //   if(a.test(this.userNumber)||this.userNumber==''){
    //     this.blue=false
    //   }else{
    //     this.blue=true
    //   }
    // },
    //计时器
    setinterval(){
      this.time_count = 10;
      let _this = this
      let stat_time = setInterval(function(){
        _this.time_count--;
        if(_this.time_count < 0) {
           clearInterval(stat_time);
          };
      },1000)
    },
    change_code(){
      this.imgCodeUrl = "/xinda-api/ajaxAuthcode?"+Math.random()
    },
    //获取手机验证码
    clickCode(){
      let _this = this;
      this.ajax.post("/xinda-api/register/sendsms",this.qs.stringify({
        cellphone: this.userNumber,
        smsType:2,
        imgCode:this.imgCode	
      })).then(function (res) {
        console.log(res)
        if(res.data.status == 1){
           _this.setinterval();
        }else{
        _this.change_code()
      }
        _this.msg = res.data.msg;
        _this.status = res.data.status;
      },function(err){
        _this.msg = "验证码获取失败";
        _this.status = -1;
      })
    },//获取手机验证码方法结束
    makeSureChange(){//确认修改点击事件
      let _this = this;
      //判断两次输入密码是否一致
      if(this.text_pwd(this.userNumber)){
        if(this.text_phone(this.new_pwd)){
              if(this.new_pwd == this.again_new_pwd){
            this.ajax.post("/xinda-api/register/findpas",this.qs.stringify({
              cellphone: this.userNumber,
              smsType:2,
              validCode:this.mobileCode,
              password: this.md5(this.again_new_pwd)	
            })).then(function(res){
              _this.msg = res.data.msg;
              _this.status = res.data.status;
              setTimeout(function() {
                _this.$router.push({name:"Register"})
              }, 500);
            },function(err){
              _this.msg = err.data.msg;
              _this.status = 2;
            })
          }else{
            _this.msg = "两次密码输入不一致，请重新输入";
            _this.status = 2;
          }
        }else{
          this.msg = "密码格式不正确"
        }
      }else{
        this.msg = "手机号码格式不正确"
      }




      
    }//makeSureChange 结束
  }
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
    // height: 381px;
     margin-top: 55px;
  }
    .veri{
        height: 34px;
        border: 1px solid #cbcbcb;
        border-radius: 3px;
        margin: 10px 0;
  }
  //  ----------------这是公共样式结束部分
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
        span{
          float: left;
          margin: 8px 10px;
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
      .cont_left_box{
        width: 285px;
        margin: 0 auto;
      }
      .pwd_warning{
        text-align: center;
        width: 285px;
        line-height: 36px;
        border: 1px solid red;
        margin-bottom: 10px;
        color: red;
        &.success{
          border-color: #0f0;
          color: #0f0;
        }
      }
       .mobile{
        width: 281px;
       .veri;
        &:first-child{
           margin-top: 54px!important;
        }
         -moz-appearance:textfield;
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button{
          -webkit-appearance: none !important;
          margin: 0; 
        }
       }
       .click_gain{
          width: 96px;
          height: 36px;
          margin: 10px 0 10px 10px;
          border-radius: 3px;
          outline: none;
          border: none;
          line-height: 34px;
          background: #2693d4;
          color: #fff;
          cursor: pointer;
          &.have_clicked{
            background: buttonface;
            color: #ccc;
            cursor: auto;
          }
       }
        .verif{
           width: 172px;
           .veri;.fl;
       }
       .verif1{
         img{width: 100%;height: 100%;}
         .txl;
         line-height: 30px;
         display: inline-block;
         width: 98px;
         .veri;
         .fl;
         margin-left: 10px;
       }
       .denglu{
         display: block;
         outline: none;
         &.success_btn{background: #2693d9}
         .veri;.txl;
         line-height: 34px;
          width: 281px;
          &.success_change{
             cursor: pointer;
            background: #2693d4;
            color: #fff;
          }
       }
       p{
         .fl;
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