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
      <div class="content_left_box">
          <div class="warning_div" v-show="msg?true:false" :class="status<0?'falid_div':'success_div'">{{msg}}</div>
          <input type="number" placeholder="请输入手机号" class="mobile" v-model="userNumber" @input="mobile_oninput" :class="{blue:blue==true}"><br>
          <div class="yanzheng">
            <input type="text" placeholder="请输入验证码" class="verif" v-model="imgCode" maxlength="4">
            <span class="verif1"><img :src="code_url" alt=""  @click="change_code"></span><br>
          </div>
          <div class="yanzheng">
            <input type="text" placeholder="请输入验证码" class="verif" v-model="mobile_code">
            <span class="verif1" @click="click_getCode">点击获取</span><br>
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
          <input type="text" placeholder="设置6-20位含数字、字母密码" class="mobile" v-model="userpassword" @input="userpassword_oniput" :class="{bluee:bluee==true}">
          <div class="warning_div"></div>
          <button class="denglu" @click="now_zhuce" :disabled="status>0?false:true" :class="{success_change:status==1}" id="makesure">立即注册</button>
          <br>
          <span>注册即同意遵守</span>《服务协议》
      </div>
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
import {mapActions} from "vuex"
export default {
  name: 'enroll',
  data(){
    return{
        msg: '',//错误提示信息
        status:-999,//判断信息的status，以决定提示信息的颜色属性
        imgCode:'',//验证码的输入信息
        userNumber:'',//手机号码的输入信息
        mobile_code:'',//手机验证码输入信息
        userpassword:'',//密码设置
        code_url:'/xinda-api/ajaxAuthcode',
        blue:false,
        bluee:false
    }
  },
  created(){
  },
  methods:{
    ...mapActions(["setusername"]),
    userpassword_oniput(){
      let a = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      if(a.test(this.userpassword)){
        this.bluee = false
      }else{
        this.bluee = true
      }
    },
    mobile_oninput(){
      let a = /^1[3|4|5|7|8][0-9]{9}$/;
      if(a.test(this.userNumber)){
        this.blue=false
      }else{
        this.blue=true
      }
    },
    change_code(){ 
      this.code_url = '/xinda-api/ajaxAuthcode?'+Math.random(); 
    },
    click_getCode(){
       //发送短信接口
      let _this = this;
      this.ajax.post('/xinda-api/register/sendsms',this.qs.stringify({
        //数据传输
        cellphone: this.userNumber,
        smsType:1,
        imgCode:this.imgCode
      })).then(function(data){//数据返回成功的回调函数
        _this.msg = data.data.msg;
        _this.status = data.data.status;
        if(data.data.status==-1){
          _this.change_code()
        }
      },function(err){//数据返回 失败 的回调函数
        _this.msg="网络连接超时"
      })
    },//click_getCode 方法结束
    now_zhuce(){
      let _this = this;
      //注册验证接口
      this.ajax.post("/xinda-api/register/valid-sms",this.qs.stringify({
        //数据传输
        cellphone:this.userNumber,
        smsType:1,
        validCode:this.mobile_code
      })).then(function(res){//数据返回成功的回调函数
          // console.log(res)
          _this.msg = res.data.msg;
          _this.status = res.data.status;
          //注册提交验证
          if(res.data.status == 1){//验证注册通过，通过 发送后台数据
              _this.ajax.post("/xinda-api/register/register",_this.qs.stringify({
                //数据传输
                cellphone: _this.userNumber,
                smsType:1,
                validCode:_this.mobile_code,
                password:_this.userpassword,
                regionId:110010	
              })).then(function(res){//数据返回 成功 的回调函数
                  _this.msg = res.data.msg;
                  if(res.data.status == 1){
                    setTimeout(function() {
                      _this.$router.push({name:"Register"});
                    }, 500);
                    _this.setusername(_this.userNumber);
                  }
              },function(err){//数据返回 失败 的回调函数
                _this.msg="网络连接超时"
              })
           }//if 判断结束
      },function(err){//数据返回 失败 的回调函数
        _this.msg="网络连接超时"
      })
    }//now_zhuce 方法结束
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
    height: 420px;
     margin-top: 55px;
  }
    .veri{
        height: 34px;
        border: 1px solid #cbcbcb;
        border-radius: 3px;
        margin: 10px 0;
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
      &>span{cursor: pointer;}
      color: #2693d4;
      .content_left_box{
        width: 289px;
        .mg;
      }
      .warning_div{
          line-height: 36px;
          text-align: center;
          font-size: 16px;
          width: 283px;
          &.success_div{
            color: #0f0;
            border: 1px solid #0f0;
          }
          &.falid_div{
            color: #f00;
            border: 1px solid #f00;
          }
        }
       .mobile{
        width: 281px;
       .veri;
          -moz-appearance:textfield;
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button{
          -webkit-appearance: none !important;
          margin: 0; 
        }
         &.blue{
          border-color: #f00;
        }
        &.bluee{
          border-color: #f00;
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
         cursor: pointer;
         img{
           width: 100%;
           height: 100%;
         }
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
