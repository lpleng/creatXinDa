<template>
  <div>
     <div class="empty_box">
        <div class="toper" id="toper">
            <div class="toper_content">
                <div class="toper_left" id="toper_left">
                    <span id="user_name">{{username}}</span>
                    欢迎来到信达! 
                    <span v-if="usernamestatus==0">
                        <a href="#/Register" target="_blank">登录</a> 
                        <a href="#/Enroll" target="_blank">快速注册</a>
                    </span>
                    <span class="exit" v-show="usernamestatus==1" @click="reback()">【退出】</span>
                </div>
                <div class="toper_right" >
                    <div class="toper_right_left" @click="$router.push({path:'/shopping_car'})">
                        购物车<span class="car_number">{{getCartNum}}</span>件
                    </div>
                    <div class="toper_right_middle" v-if="!islogin"><a href="/user_center">
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
    if(true){
        this.islogin = false
    };
    this.getdata();
    this.usersname();
    
  },
  data(){//data:function(){return {}}
      return {
        username:"",
        usernamestatus:0
      }
  },
  computed:{
      ...mapGetters(['getCartNum'])
  },
  methods:{
      ...mapActions(['setCartNum']),
      //
      getdata(){
          let _this=this
          this.ajax.post("/xinda-api/cart/cart-num").then(function(res){
              _this.setCartNum(res.data.data.cartNum)
          })
      },
      usersname(){
          let _this = this
          this.ajax.post("/xinda-api/sso/login-info").then(function(res){
              if(res.data.status==1){
                   _this.username = res.data.data.name
              }
             
            //   console.log(res.data.data .name)
              console.log(res.data.data)
              console.log(res.data)
              _this.usernamestatus = res.data.status
          })

      },
      reback(){
          let _this = this
          this.ajax.post("/xinda-api/sso/logout").then(function(res){
              console.log(res)
              _this.usernamestatus=0;
              _this.username="";
             _this.setCartNum(0)
          })
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
.toper{
    height: 35px;
    width: 100%;
    background: #f2f2f2;
    position: fixed;
    z-index: 999;
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