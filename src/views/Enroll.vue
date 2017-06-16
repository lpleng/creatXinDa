<template>
  <div>
    <Row>
      <Col :xs="0" :sm="24" :md="24">
      <div class="logo">
        <div class="logo_nei">
          <div class="logo_left">
            <img src="/static/images/logo.png">
            <span>信达</span>
          </div>
          <p>欢迎登录</p>
        </div>
      </div>
      </Col>
      <Col :xs="24" :sm="0" :md="0" class="new_logo">
      <div class="new_logo_nei">
        <a href="#/Register">
          <</a>
            <span>注册</span>
      </div>
      </Col>
    </Row>
    <Row>
      <Col :xs="24" :sm="0" :md="0" type="flex" justify="center">
      <div id="content_left">
        <div class="content_left_box">
          <div class="warning_div" v-show="msg?true:false" :class="status<0?'falid_div':'success_div'">{{msg}}</div>
          <input type="number" placeholder="请输入手机号" class="mobile" v-model="userNumber">
          <br>
          <div class="yanzheng">
            <input type="text" placeholder="请输入验证码" class="verif" v-model="imgCode" maxlength="4">
            <span class="verif1">
              <img :src="code_url" alt="" @click="change_code">
            </span>
            <br>
          </div>
          <div class="yanzheng">
            <input type="text" placeholder="请输入验证码" class="verif" v-model="mobile_code">
            <span class="verif1" @click="click_getCode">点击获取</span>
            <br>
          </div>
          <div class="change">
            <threeLinkage hs="big" myStyle='margin-left:-10px;'></threeLinkage>
          </div>
          <input type="password" placeholder="设置6-20位含数字、字母密码" class="mobile" v-model="userpassword">
          <div class="warning_div"></div>
          <button class="denglu" @click="now_zhuce" :disabled="status>0?false:true" :class="{success_change:status==1}" id="makesure">立即注册</button>
          <br>
          <span>注册即同意遵守</span>《服务协议》
        </div>
      </div>
      </Col>
    </Row>
    <!--------------------------这是注册页面-->
    <Row>
      <Col :xs="0" :sm="24" :md="24" :lg="24">
      <div class="content">
        <Row>
          <Col :xs="20" :sm="12" :md="12" type="flex" justify="center">
          <div id="content_left">
            <div class="content_left_box">
              <div class="warning_div" v-show="msg?true:false" :class="status<0?'falid_div':'success_div'">{{msg}}</div>
              <input type="number" placeholder="请输入手机号" class="mobile" v-model="userNumber">
              <br>
              <div class="yanzheng">
                <input type="text" placeholder="请输入验证码" class="verif" v-model="imgCode" maxlength="4">
                <span class="verif1">
                  <img :src="code_url" alt="" @click="change_code">
                </span>
                <br>
              </div>
              <div class="yanzheng">
                <input type="text" placeholder="请输入验证码" class="verif" v-model="mobile_code">
                <span class="verif1" @click="click_getCode">点击获取</span>
                <br>
              </div>
              <div class="change">
                <threeLinkage hs="big" myStyle='margin-left:-10px;'></threeLinkage>
              </div>
              <input type="password" placeholder="设置6-20位含数字、字母密码" class="mobile" v-model="userpassword">
              <div class="warning_div"></div>
              <button class="denglu" @click="now_zhuce" :disabled="status>0?false:true" :class="{success_change:status==1}" id="makesure">立即注册</button>
              <br>
              <span>注册即同意遵守</span>《服务协议》
            </div>
          </div>
          </Col>
          <Col :xs="0" :sm="12" :md="12" type="flex" justify="center">
          <div class="content_right">
            <p>已有账号？</p>
            <a :href="'#/Register'" :class="'fast'">{{'立即登录>>'}}</a>
            <br>
            <img src="/static/images/登录_03.jpg">
          </div>
          </Col>
        </Row>
      </div>
      </Col>
    </Row>
    <!--------------------------这是注册页面结束部分-->
  </div>
</template>
<script>
// import qs from 'qs'
import { mapActions } from "vuex"
import threeLinkage from './ProvinceCityAreaLinkage.vue'

export default {
  name: 'enroll',
  components: {
    threeLinkage
  },
  data() {
    return {
      msg: '',//错误提示信息
      status: -999,//判断信息的status，以决定提示信息的颜色属性
      imgCode: '',//验证码的输入信息
      userNumber: '',//手机号码的输入信息
      mobile_code: '',//手机验证码输入信息
      userpassword: '',//密码设置
      code_url: '/xinda-api/ajaxAuthcode',
    }
  },
  created() {
  },
  methods: {
    ...mapActions(["setusername"]),
    error (value) {
        this.$Message.error({
          content: value,
          duration: 1
        });
    },
    success (value) {
        this.$Message.success(value);
    },
    text_phone(value) {
      return /^1[3|4|5|7|8][0-9]{9}$/.test(value)
    },
    text_pwd(value) {
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value)
    },
    change_code() {
      this.code_url = '/xinda-api/ajaxAuthcode?' + Math.random();
    },
    click_getCode() {
      //发送短信接口
      let _this = this;
      if (this.text_phone(this.userNumber) && this.userNumber!="") {
        if (this.text_pwd(this.userpassword)&&this.userpassword!="") {
            this.ajax.post('/xinda-api/register/sendsms', this.qs.stringify({
              //数据传输
              cellphone: this.userNumber,
              smsType: 1,
              imgCode: this.imgCode
            })).then(function (data) {//数据返回成功的回调函数
              if(data.data.status == 1){
                _this.success (data.data.msg)
              }else{
                _this.error (data.data.msg)
              }
              _this.status = data.data.status;
              if (data.data.status == -1) {
                _this.change_code()
              }
            }, function (err) {//数据返回 失败 的回调函数
              _this.error ("网络连接超时")
            })
        }else{
          _this.error ("密码格式不正确")
          _this.change_code()
        }
      }else{
        this.error ("手机号码格式不正确")
        _this.change_code()
      }
    },//click_getCode 方法结束
    now_zhuce() {
      let _this = this;
      if (this.text_phone(this.userNumber) && this.userNumber!="") {
        if (this.text_pwd(this.userpassword)&&this.userpassword!="") {
          //注册验证接口
          this.ajax.post("/xinda-api/register/valid-sms", this.qs.stringify({
            //数据传输
            cellphone: this.userNumber,
            smsType: 1,
            validCode: this.mobile_code
          })).then(function (res) {//数据返回成功的回调函数
            // console.log(res)
            // _this.msg = res.data.msg;
            _this.status = res.data.status;
            //注册提交验证
            if (res.data.status == 1) {//验证注册通过，通过 发送后台数据
              _this.success (res.data.msg)
              _this.ajax.post("/xinda-api/register/register", _this.qs.stringify({
                //数据传输
                cellphone: _this.userNumber,
                smsType: 1,
                validCode: _this.mobile_code,
                password: _this.userpassword,
                regionId: 110010
              })).then(function (res) {//数据返回 成功 的回调函数
                _this.msg = res.data.msg;
                if (res.data.status == 1) {
                  setTimeout(function () {
                    _this.$router.push({ name: "Register" });
                  }, 500);
                  _this.setusername(_this.userNumber);
                }
              }, function (err) {//数据返回 失败 的回调函数
                _this.msg = "网络连接超时"
              })
            }else{
              _this.error (res.data.msg)
            }//if 判断结束
          }, function (err) {//数据返回 失败 的回调函数
            _this.error ("网络连接超时")
          })
        } else {
          this.error ("密码格式不正确")
          this.change_code()
        }
      } else {
         this.error ("手机号码格式不正确")
         this.change_code()
      }
    }//now_zhuce 方法结束
  }
}
</script>
<style scoped lang="less">
// --------------------------这是公共样式
.txl {
  text-align: center;
}

.mg {
  margin: 0 auto;
}

.fl {
  float: left;
}

.logo_nei {
  width: 1200px;
  height: 97px;
  .mg;
}

.word {
  text-align: center;
  font-size: 16px;
  line-height: 34px;
}

.content_l {
  
  height: 420px;
  margin-top: 55px;
}

.veri {
  height: 34px;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
  margin: 10px 0;
}




/*// ----------------这是公共样式结束部分
  // --------------------这是最上面的logo栏*/

.logo {
  width: 100%;
  height: 97px;
  margin: 5% 5%;
  .logo_left,
  p {
    .fl;
    margin: 20px 10px 20px 20px;
  }
  .logo_left {
    width: 136px;
    height: 56px;
    font-size: 30px;
    font-weight: 800;
    img {
      .fl;
    }
    span {
      float: left;
      margin: 8px 10px;
    }
  }
  p {
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

.new_logo {
  height: 50px;
  margin: 10px auto;
  background: #e5e5e5;
  vertical-align: middle;
  a {
    display: block;
    font-size: 30px;
    color: #fff;
    margin-left: 5%;
    float: left
  }
  span {
    font-weight: 700;
    margin-left: 35%;
    float: left;
    line-height: 50px;
  }
} // --------------------这是最上面的logo栏结束部分
.content {
  overflow: hidden;
  .logo_nei;
  height: 500px;
  margin-bottom: 100px; // --------------------这是中间的注册栏部分
}

#content_left {
  .content_l;
  width: 100%;
  .fl;
  &>span {
    cursor: pointer;
  }
  color: #2693d4;
  .content_left_box {
    width: 289px;
    .mg;
  }
  .warning_div {
    line-height: 36px;
    text-align: center;
    font-size: 16px;
    width: 283px;
    &.success_div {
      color: #0b64d6;
      border: 1px solid #0b64d6;
    }
    &.falid_div {
      color: #f00;
      border: 1px solid #f00;
    }
  }
  .mobile {
    width: 281px;
    .veri;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0;
    }
  }
  .verif {
    width: 172px;
    .veri;
    .fl;
  }
  .change {
    width: 281px;
    .veri;
    border: none;
    select {
      width: 78px;
      height: 34px;
      &:nth-child(2) {
        margin-left: 19px;
        margin-right: 19px;
      }
    }
  }
  .verif1 {
    cursor: pointer;
    img {
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
  .denglu {
    display: block;
    outline: none;
    .veri;
    .txl;
    line-height: 34px;
    width: 281px;
    &.success_change {
      cursor: pointer;
      background: #2693d4;
      color: #fff;
    }
  }
  p {
    color: #000;
    .fl;
    margin-left: 185px;
  }
}

.content_right {
  .content_l;
  width: 578px;
  .txl;
  .fl;
  border-left: 1px solid #dadada;
  line-height: 50px;
  p,
  a {
    font-size: 17px;
  }
  p {
    color: #6b6b6b;
  }
  div {
    color: #2693d4;
    &:hover {
      color: red;
    }
  }
  .fast {
    color: #2693d4;
    &:hover {
      color: red;
    }
  }
}

// }
</style>
