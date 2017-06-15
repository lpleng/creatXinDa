<template>
  <div id='Root'>
    <div class="whole">
      <div class="left_side" v-if='hiddenLeft'>
        <p>首页/公司工商</p>
        <div class="l_content">
          <div class="con_top" style='text-align:center;'>
            <img src="./images/member.png">
            <p>{{memberinfo_ajax.name}}</p>
            <div id='xs_show' style='overflow:hidden;' v-if='!hadLogin'>
              <!--这里是微信端的两个未登录时的按钮-->
              <a href="#/Enroll" style='margin-right:16px;float:left;width:60px;height:25px;cursor:pointer;background:#4eb5ba;color:#fff;border-radius:3px;font-weight:600;line-height:25px;position:relative;'>注册</a>
              <a href="#/Register" style='float:left;width:60px;height:25px;cursor:pointer;background:#4eb5ba;color:#fff;border-radius:3px;font-weight:600;line-height:25px;position:relative;'>登录</a>
            </div>
  
          </div>
          <div class="con_content">
            <router-link id='myBill' to="/member" active-class="active" exact>
              <div @click='clickMyBill()'>
                <img src="/static/membercenter/order.png" alt="">
                <span>我的订单</span>
                <Icon class='hiddenIcon' type="ios-arrow-right" style='color:#ccc;float:right;margin:5px 15px;font-size:25px;'></Icon>
              </div>
            </router-link>
            <router-link id='hidden' to="/member/Member_userrevew" active-class="active">
              <div class="userrevew">
                <img src="/static/membercenter/pingjia.png" alt="">
                <span>用户评价</span>
              </div>
            </router-link>
            <router-link id='setAccount' @click='clickSetAcc()' to="/member/Member_settings" active-class="active">
              <div @click='clickMyBill()'>
                <img src="/static/membercenter/shezhi.png" alt="">
                <span @click='clickSetAcc'>账户设置</span>
                <Icon class='hiddenIcon' type="ios-arrow-right" style='color:#ccc;float:right;margin:5px 15px;font-size:25px;'></Icon>
              </div>
            </router-link>
          </div>
          <a v-if='hadButton' id='logOut' @click='loginOut' style='border-radius:4px;font-family:"黑体";line-height:40px;text-align:center;cursor:pointer;display:block;margin:auto;width:281px;height:40px;background:#169bd5;color:#fff;margin-top:21px;'>退出登录</a>
        </div>
      </div>
      <router-view :showWeChat='!hiddenLeft'> </router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Member_center from './Member_center';
import Member_userrevew from './Member_userrevew';
import Member_settings from './Member_settings';
import store from '@/store/index.js';
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      memberinfo_ajax: [],
      memberpic: "http://115.182.107.203:8088/xinda/pic",
      hadLogin: false,//判断是否登录，已登录为true，未登录为false
      hadButton: false,//判断是否添加按钮
      hiddenLeft: true//隐藏member微信端
    }
  },
  created() {
    this.memberinfo();
    if (store.getters.getusername) {
      this.hadLogin = true;
      if (window.innerWidth < 769) {
        this.hadButton = true;
      }
    } else {
      this.hadLogin = false;
    };
    //获取订单列表
  },
  methods: {
    ...mapActions(['setCartNum', 'setusername', 'change_mengban']),
    components: {
      Member_center,
      Member_userrevew,
      Member_settings
    },
    memberinfo() {
      let _this = this;
      this.ajax.post("/xinda-api/member/info").then(function (res) {
        _this.memberinfo_ajax = res.data.data
      })
    },
    loginOut() {
      let _this = this
      this.ajax.post("/xinda-api/sso/logout").then(function (res) {
        _this.setusername();
        _this.setCartNum();
        _this.$router.push({ path: "/" })
      })
    },
    clickMyBill() {//点击切换我的订单
      if (window.innerWidth <= 768) {
        this.hiddenLeft = !this.hiddenLeft;
        console.log(this.hiddenLeft);
      };
    },
    clickSetAcc() {//点击切换账户设置
      if (window.innerWidth <= 768) {
        this.hiddenLeft = !this.hiddenLeft;
      };
    }
  },
  computed: {
    ...mapGetters(['getCartNum', 'getusername', 'show_mengban'])
  }
}
</script>


<style scoped lang=less>
.whole {
  overflow: hidden;
  width: 1200px;
  margin: 10px auto;
  .left_side {
    width: 242px;
    height: 553px;
    float: left;
    .l_content {
      width: 240px;
      height: 526px;
      margin-top: 10px;
      #logOut {
        display: none;
      }
      .con_top {
        width: 238px;
        height: 141px;
        background: #e9e9e9;
        text-align: center;
        font-size: 16px;
        #xs_show {
          display: none;
        }
        img {
          margin-top: 10px;
        }
      }
      .con_content {
        width: 238px;
        height: 372px;
        background: #f7f7f7;
        margin-top: 10px;
        text-align: center;
        .hiddenIcon {
          display: none;
        }
        a {
          display: block;
        }
        .active {
          background: #e9e9e9!important;
        }
        div {
          width: 240px;
          height: 51px;
          margin: 0 auto;
          cursor: pointer;
          line-height: 50px;
          /*padding: 0 0 0 70px;*/
          img {
            vertical-align: middle;
          }
          span {
            font-size: 16px;
            vertical-align: middle;
            padding-left: 10px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #Root {
    position: relative;
  }
  .whole {
    &>div {
      position:absolute;
      top:0;
      width:100%;
    }
    width: 100%;
    margin: 0;
    background: #f7f7f7;
    padding-top: 16%;
    .left_side {
      width: 100%;
      &>p {
        display: none;
      }
      .l_content {
        margin: 0;
        width: 100%;
        .con_top {
          width: 100%;
          background: #f7f7f7;
          height: auto;
          #xs_show {
            display: inline-block;
          }
        }
        .con_content {
          width: 100%;
          margin: 0;
          height: auto;
          .hiddenIcon {
            display: inline;
          }
        }
        #hidden {
          display: none;
        }
        #myBill,
        #setAccount {
          width: 281px;
          display: block;
          margin: auto;
          height: 35px;
          margin-top: 11px;
          div {
            display: inline-block;
            height: 100%;
            width: 100%;
            background: #e9e9e9;
            img,
            span {
              float: left;
            }
            img {
              margin: 8px 0 0 15px;
            }
            span {
              height: 100%;
              line-height: 40px;
              color: #aaa;
            }
          }
        }
      }
    }
  }
}
</style>