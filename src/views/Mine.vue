// 微信端我的
<template>
  <div class="minebg">
    <Modal v-model="exitOut" @on-ok="out">
        <p>您确定要退出吗？</p>
    </Modal>
    <Row type="flex" justify="center" style="text-align:center;" >
        <Col :xs="24" :sm="0" :md="0" style="margin-top:.65rem">
            <div class="minhead"><Icon type="ios-person-outline" size="75" style=""></Icon></div>
        </Col>
        <Col :xs="24" :sm="0" :md="0">
            <div v-if="memberinfo_ajax.status==0">
                <Row type="flex" justify="center">
                    <Col :span="4" class="nologin" pull="1"><router-link to="Enroll" >注册</router-link></Col>
                    <Col :span="4" class="nologin" push="1"><router-link to="Register" >登录</router-link></Col>                    
                </Row>
            </div>
            <div v-if="memberinfo_ajax.status==1">{{memberinfo_ajax.data.name}}</div>
        </Col>
        <Col :xs="21" :sm="0" :md="0" class="minelist">           
           <router-link to="myPay">
               <img src="/static/membercenter/order.png" alt="">
               <span>我的订单</span>
               <Icon type="chevron-right"></Icon>
            </router-link>
        </Col>
        <Col :xs="21" :sm="0" :md="0" class="minelist">            
            <router-link to="Mine_setting">
                <img src="/static/membercenter/pingjia.png" alt="">
                <span>账户设置</span>
                <Icon type="chevron-right"></Icon>
            </router-link>
        </Col>
        <Col :xs="21" ><Button v-if="memberinfo_ajax.status==1" type="primary" class="outinfo" @click="exitOut=true">退出登录</Button></Col>
    </Row>
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
      exitOut:false
    }
  },
  created() {
    this.memberinfo();
  },
  methods: {
    ...mapActions(['setCartNum', 'setusername', 'change_mengban']),
     error (value) {
        this.$Message.error({
        content: value,
        duration: 1
        });
    },
    success (value) {
        this.$Message.success({
        content: value,
        duration: 1
        });
    },
    memberinfo() {
      let _this = this;
      this.ajax.post("/xinda-api/sso/login-info").then(function (res) {
        _this.memberinfo_ajax = res.data
      })
    },
    toReg(){
        this.$route.push({ path: "/Register",query: {
           
          }})
    },
    toEnroll(){
        this.$route.push({ path: "/Enroll",query: {
           
          }})
    },
    out() {//退出登录
        let _this = this
        this.ajax.post("/xinda-api/sso/logout").then(function (res) {
            _this.success("操作成功，马上退出，请稍后。。。")
            setTimeout(function() {
                _this.setusername();
                _this.setCartNum();
                _this.$router.push({ path: "/" })
            }, 500);
        })
    },
  },computed:{
      ...mapGetters(["show_mengban","limitVister"])
  },
  components: {
    Member_center,
    Member_userrevew,
    Member_settings
  }
}
</script>

<style scoped lang=less>
    .minebg{
        background:#f6f6f6;
        /*height:25.3rem; */
        a{
            color:#fff;
            width:100%;
        }
        
        .minhead{
            width:75px;
            height:75px;
            background:#fff;
            border-radius:50%;
            margin:0 auto;
        }
    }
    .nologin{
        margin-top:10px;
        background:#4eb5ba;
        height: 30px;
        line-height: 30px;
        color:#fff;
        border-radius:5px;
    }
    .minelist{
        background:#e9e9e9;
        height:30px;
        margin-top:15px;
        line-height: 30px;
        overflow: hidden;
        position: relative;
        a{
            display: block;
            color:#a09cab;
            float:left;
        }
        img{
            margin:5px 15px;
            /*vertical-align: middle;*/
            float: left;
        }
        span{
            float:left;
        }
        i{
            position:absolute;
            top:8px;
            right:15px;
        }
    }
    .outinfo{
        width:100%;
        margin:20px 0 85%;
    }
    .reandenbg{
        height:30px;
    }
</style>