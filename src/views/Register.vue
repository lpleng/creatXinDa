<template>
  <div>
    <Row>
      <Alert type="success" v-show="registerSuccess" class="registerclass" show-icon>
          登录成功
          <span slot="desc">祝您购物愉快</span>
      </Alert>
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
      <p>登录</p>
      </Col>
    </Row>
    <Row>
      <Col :xs="24" :sm="0" :md="0" type="flex" justify="center">
      <div id="content_left">
        <div class="content_left_box">
          <input type="number" placeholder="请输入手机号" class="mobile" v-model="userNumber">
          <br>
          <input type="password" placeholder="设置6-20位含数字、字母密码" class="mobile" v-model="userpassword" @keyup.13="loginNow">
          <br>
          <div class="yanzheng">
            <input type="text" placeholder="请输入验证码" class="verif" v-model="imgCode">
            <span class="verif1">
              <img :src="imgCodeUrl" alt="点击刷新" title="尝试刷新" @click="change_code">
            </span>
            <br>
          </div>
          <!--<p>忘记密码？</p>-->
          <a :href="'#/Password'">{{'忘记密码？'}}</a>
          <button class="denglu success_change" @click="loginNow">立即登录</button>
          <p class="warning_p" :class="status<0?'falid_p':'success_p'" v-show="msg?true:false">{{msg}}</p>
        </div>
      </div>
      </Col>
    </Row>
    <Row>
      <Col :xs="24" :sm="0" :md="0" type="flex" justfiy="center" class="new_foot">
      <div class="foot">
        <span>还没有信达账号？</span>
        <a href="#/Enroll">立即注册</a>
      </div>
      </Col>
    </Row>
    <!--------------------------这是登陆页面-->
    <Row>
      <Col :xs="0" :sm="24" :md="24">
      <div class="content">
        <Row>
          <Col :xs="0" :sm="12" :md="12" type="flex" justify="center">
          <div id="content_left">
            <div class="content_left_box">
              <input type="number" placeholder="请输入手机号" class="mobile" v-model="userNumber">
              <br>
              <input type="password" placeholder="设置6-20位含数字、字母密码" class="mobile" v-model="userpassword" @keyup.13="loginNow">
              <br>
              <div class="yanzheng">
                <input type="text" placeholder="请输入验证码" class="verif" v-model="imgCode">
                <span class="verif1">
                  <img :src="imgCodeUrl" alt="点击刷新" title="尝试刷新" @click="change_code">
                </span>
                <br>
              </div>
              <!--<p>忘记密码？</p>-->
              <a :href="'#/Password'">{{'忘记密码？'}}</a>
              <button class="denglu success_change" @click="loginNow">立即登录</button>
              <!--<p class="warning_p" :class="status<0?'falid_p':'success_p'" v-show="msg?true:false">{{msg}}</p>-->
            </div>
          </div>
          </Col>
          <Col :xs="0" :sm="12" :md="12" class="new_content_left">
          <div class="content_right">
            <p>还没有账号？</p>
            <a :href="'#/Enroll'" :class="'fast'">{{'立即注册>>'}}</a>
            <br>
            <img src="/static/images/登录_03.jpg">
          </div>
          </Col>
        </Row>
      </div>
      </Col>
    </Row>
    <!--------------------------这是登陆页面结束部分-->
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'register',
  data() {
    return {
      msg: '',
      status: -14,
      userNumber: '',//登录页用户手机号码
      userpassword: '',//登录页用户密码输入
      imgCode: '',//图片验证码
      imgCodeUrl: '/xinda-api/ajaxAuthcode',
      registerSuccess: false
    }
  },
  created() {
  },
  computed: {
    ...mapGetters(["getusername"]),
  },
  methods: {
    ...mapActions(["setusername", "setCartNum"]),
    error (value) {
        this.$Message.error({
          content: value,
          duration: 1
        });
    },
    text_phone(value) {
      return /^1[3|4|5|7|8][0-9]{9}$/.test(value);
    },
    text_pwd(value) {
      return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(value);
    },
    change_code() {
      this.imgCodeUrl = '/xinda-api/ajaxAuthcode?' + Math.random() //随机数
    },
    loginNow() {//验证登录
      let _this = this;
      if (this.text_phone(this.userNumber) && this.userNumber!="") {
        if (this.text_pwd(this.userpassword) && this.userpassword!="") {
          this.ajax.post("/xinda-api/sso/login", this.qs.stringify({
            loginId: this.userNumber,
            password: this.md5(this.userpassword),
            imgCode: this.imgCode
          })).then(function (res) {
            _this.status = res.data.status;
            if (res.data.status == 1) {//登录成功
              _this.setusername();
              _this.setCartNum();
              _this.registerSuccess = true;
              setTimeout(function () {
                _this.registerSuccess = false;
                _this.$router.push({ name: "Home", params: { 'username': _this.userNumber } })
              }, 1000);
            } else {
              _this.change_code()
              _this.error (res.data.msg)
            }
          })
        } else {
          _this.error ("密码格式不正确")
          _this.change_code()
        }
      } else {
        _this.error ("手机号码格式不正确")
        _this.change_code()
      }
    }
  }
}



</script>
<style scoped lang="less">
// --------------------------这是公共样式
.registerclass{
    position: fixed;
    top: 50%;
    left: 50%;
    font-size: 0.4rem;
    width: 230px;
    height: 80px;
    border: 1px solid #19be6b;
    margin-top: -40px;
    margin-left: -115px; 
}
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
  height: 381px;
  margin-top: 55px;
}

.veri {
  height: 34px;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
  margin: 10px 0;
} // ----------------这是公共样式结束部分
// --------------------这是最上面的logo栏
.logo {
  width: 100%;
  height: 97px;
  margin: 5% 0;
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
  line-height: 50px;
  p {
    font-weight: 700;
    margin-left: 50%;
  }
} // --------------------这是最上面的logo栏结束部分
.content {
  overflow: hidden;
  .logo_nei;
  height: 435px;
  margin-bottom: 100px; // --------------------这是中间的登陆栏部分
}

#content_left {
  .content_l;
  margin-left: 10%;
  width: 80%;

  .fl;
  .content_left_box {
    width: 285px;
    .mg
  }
  p {
    color: red;
    font-size: 16px;
    text-align: center;
    margin-top: 20px;
    width: 279px;
    line-height: 40px;
    &.success_p {
      color: #2963d4;
      border: 1px solid #2963d4;
    }
    &.falid_p {
      color: #f00;
      border: 1px solid #f00;
    }
  }

  color: #2693d4;
  .mobile {
    width: 281px;
    .veri;
    &:first-child {
      margin-top: 54px!important;
    }
    -moz-appearance:textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0;
    }
  }
  .yanzheng {
    width: 284px;
    height: 53px;
    margin-top: 23px;
    .verif {
      width: 172px;
      height: 34px;
      .fl
    }
    .verif1 {
      display: block;
      width: 85px;
      height: 34px;
      margin-left: 20px;
      img {
        width: 100%;
        height: 100%;
        cursor: pointer;
      }
      .fl;
      .word
    }
  }
  a {
    display: block;
    width: 425px;
    color: #2693d4;
    width: 100px;
    float: right;
    margin-bottom: 20px;
  }
  .denglu {
    display: block;
    outline: none;
    .veri;
    .txl;
    line-height: 34px;
    width: 281px;
    .word;
    margin-top: 20px;
    &.success_change {
      cursor: pointer;
      background: #2693d4;
      color: #fff;
    }
  }
} //----------------------------- 这是右边的图片并注册部分
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
  .fast {
    color: #2693d4;
    &:hover {
      color: red;
    }
  }
}

// }
.new_foot {
  background: #4d4d4d;
  height: 78px;
  margin-bottom: 70px;;
  .foot {
    width: 80%;
    height: 35px;
    margin: 30px auto;
    color: #fff;
    span {
      float: left
    }
    a {
      display: inline-block;
      float: right;
      color: #fff;
      background: #2693d4;
      border: 1px solid #2693d4;
    }
  }
}
</style>
