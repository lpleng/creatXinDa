<template>
  <div>
     <div class="toper" id="toper">
        <div class="toper_content">
            <div class="toper_left" id="toper_left">
                <span id="user_name"></span>
                欢迎来到信达! 
                <span v-if="!islogin">
                    <a href="#/Register" target="_blank">登录</a> 
                    <a href="#/Enroll" target="_blank">快速注册</a>
                </span>
                <span v-if="!islogin" class="exit">【退出】</span>
            </div>
            <div class="toper_right">
                <div class="toper_right_left">
                    购物车<span class="car_number">0</span>件
                </div>
                <div class="toper_right_middle" v-if="!islogin"><a href="/user_center">
                    我的订单
                </a></div>
                <a href="#/join_us" class="toper_right_right">服务商入口</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'global_toper',
  created(){
    if(true){
        this.islogin = false;
    }
  },
  data(){//data:function(){return {}}
      return {
        //   islogin:true
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
.toper{
    height: 35px;
    background: #f2f2f2;
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
            padding-left:25px;
            background:url("/static/static/icon/buy_car.png")no-repeat 0 8px;
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