<template>
  <div>
      <transition-group name="slide">
      <div class="confirm" v-show="show_confirm" :key="1">
        <p>信息提示 <span @click="close_confirm">&times;</span></p>
        <div class="confirm_cont" v-show="confirm_choose == 2">
            您还没有登录，是否立即登录？
        </div>
        <div class="confirm_cont" v-show="confirm_choose == 1">
            您确定要退出吗？
        </div>
        <div class="click" v-show="confirm_choose == 2">
            <div class="button" @click="go(1)">确认</div>
            <div class="button" @click="go(2)">取消</div>
        </div>
        <div class="click" v-show="confirm_choose == 1">
            <div class="button" @click="out(1)">确认</div>
            <div class="button" @click="out(2)">取消</div>
        </div>
      </div>
      </transition-group>
      <div class="empty_box">
        <div class="toper" id="toper">
            <div class="toper_content">
                <div class="toper_left" id="toper_left">
                    <span id="user_name" @click="toMember()">{{getusername}}</span>
                    欢迎来到信达! 
                    <span v-if="getusername==''?true:false">
                        <a href="#/Register">登录</a> 
                        <a href="#/Enroll">快速注册</a>
                    </span>
                    <span class="exit" v-show="getusername==''?false:true" @click="reback()">【退出】</span>
                </div>
                <div class="toper_right" >
                    <div class="toper_right_left" @click="top_car_click">
                        购物车<span class="car_number">{{getCartNum}}</span>件
                    </div>
                    <div class="toper_right_middle" v-if="getusername==''?false:true"><a href="#/member">
                        我的订单
                    </a></div>
                    <a href="#/join_us" class="toper_right_right">服务商入口</a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'global_toper',
  created(){
    this.setCartNum(); 
    this.setusername();
  },
  data(){
    return {
        usernamestatus:0,
        show_confirm: false,
        confirm_choose:-1
    }
  },
  computed:{
      ...mapGetters(['getCartNum','getusername'])
  },
  methods:{
      ...mapActions(['setCartNum','setusername','change_mengban']),
      reback(){//退出登录
          this.change_mengban(true)
          this.show_confirm = true;
          this.confirm_choose = 1;
      },
      out(value){
          if(value == 2){
              this.show_confirm = false;
              this.change_mengban(false)
          }else{
            this.show_confirm = false;
            this.change_mengban(false)
            let _this = this
            this.ajax.post("/xinda-api/sso/logout").then(function(res){
                _this.setusername();
                _this.setCartNum();
                _this.$router.push({path:"/"})
            })
          }
      },
      go(value){
          this.show_confirm = false;
          this.change_mengban(false)
          if(value == 1){
            this.$router.push({name:"Register"})
          }
      },
      close_confirm(){
          this.show_confirm = false;
          this.change_mengban(false)
      },
      top_car_click(){
        let _this = this;
        this.ajax.post("/xinda-api/sso/login-info").then(function(res){
            if(res.data.status == 0){
                 _this.confirm_choose = 2;
                _this.show_confirm = true;
                _this.change_mengban(true)
            }else{
                _this.$router.push({name:"shopping_car"})
            }
        })
      },
      //跳转到会员中心页面
      toMember(){
            this.$router.push({name:"Member"})
      }
    }
}
</script>

<style scoped lang="less">
.g_w{
    width: 1200px;
    margin: 0 auto;
}
div{box-sizing: border-box;}
.empty_box{
    height: 35px;
}
.slide-enter,.slide-leave-active{
    height: 0;
}
.slide-enter-active,.slide-leave-active{
    transition: all 1s; 
}
.confirm{
    width: 400px;
    height: 200px;
    background: gray;
    border: 2px solid #ccc;
    position: fixed;
    z-index: 999;
    top: 30%;
    left: 50%;
    margin-left: -200px;
    border-radius: 20px;
    p{
        margin: 0;
        height: 24px;
        font-size: 16px;
        line-height: 24px;
        background: #ccc;
        border-radius: 20px 20px 0 0;
        text-align: center;
        span{
            display: block;
            width: 20px;
            height: 24px;
            float: right;
            font-size: 20px;
            cursor: pointer;
            padding-right: 5px;
            &:hover{color: red;}
        }
    }
    .confirm_cont{
        width: 300px;
        height: 60px;
        background: #fff;
        margin: 30px auto 25px;
        border-radius: 20px;
        text-align: center;
        line-height: 60px;
    }
    .click{
        display: flex;
        align-items: center;
        width: 100%;
        height: 60px;
        .button{
            width: 100px;
            height: 30px;
            background: #fff;
            text-align: center;
            line-height: 30px;
            margin: 0 auto;
            border-radius: 20px;
            cursor: pointer;
            background: linear-gradient(to top, #fff,#999,#fff);
            &:hover{
                color: #2693d4;
            }
        }
    }
}
.toper{
    height: 35px;
    width: 100%;
    background: #f2f2f2;
    position: fixed;
    z-index: 10;
    top: 0;
   &_content{
        .g_w;
       height: 35px;
       line-height: 35px;
       a{
           color: #2693d4;
           margin: 0 13px;
           vertical-align: middle;
        }
    }
    &_left{
        float:left;
        
        #user_name{
            padding: 0 10px;
            color: #2693d4; 
            cursor: pointer;
        }
        .exit{cursor: pointer;}

    }
    &_right{
        float: right;
        height: 35px;
         .car_number{
            color: #2693d4; 
            padding: 0 5px;
        }
        div{
           margin: 0 10px;
        }
        &_left{
            float: left;
            cursor: pointer;
            padding-left:25px;
            background:url("/static/icon/buy_car.png")no-repeat 0 8px;
        }
        &_middle{
            float:left;
            padding-left:25px;
            background:url("/static/images/my_order_logo.png")no-repeat 0 4px;
            a{
                color: #000;
                margin: 0;
            }
        }
        &_right{
            float: right;
        }
    }
}
</style>