<template>
<div>
    <div class="whole">
        <div class="left_side">
            <p>首页/公司工商</p>
            <div class="l_content">
              <div class="con_top">
                  <img src="/static/membercenter/huiyuan.png">
                  <p>12345678901</p>
              </div>
              <div class="con_content">
                  <a href="#/member"><div><img src="/static/membercenter/order.png" alt=""><span>我的订单</span></div></a>
                  <a href="#/member/Member_userrevew"><div class="userrevew"><img src="/static/membercenter/pingjia.png" alt=""><span>用户评价</span></div></a>
                  <a href="#/member/Member_settings"><div><img src="/static/membercenter/shezhi.png" alt=""><span>账户设置</span></div></a>
              </div>
            </div>
        </div>
        <router-view> </router-view>
    </div>


</div>
</template>
<script>
import Member_center from './Member_center';
import Member_userrevew from './Member_userrevew'
import Member_settings from './Member_settings'
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
      components:{
        Member_center,
        Member_userrevew,
        Member_settings
    },
    
  },
}
</script>


<style scoped lang=less>


.whole{
  width:1200px;
  height:651px;
  margin:10px auto;
    .left_side{
      width:242px;
      height:553px;
      float:left;
      .l_content{
          width:240px;
          height:526px;
          margin-top:10px;
          .con_top{
            width: 238px;
            height:141px;
            background: #e9e9e9;
            text-align: center;
            font-size:16px;
            img{
              margin-top:10px;
            }
          }
          .con_content{
            width:238px;
            height:372px;
            background: #f7f7f7;
            margin-top:10px;
            div{
              width:240px;
              height:51px;
              margin:0 auto;
              cursor: pointer;
              img{
                margin-left:70px;
                margin-top:14px;
                vertical-align: middle;
              }
               span{
                  font-size:16px;
                  display: inline-block;
                  vertical-align: middle;
                  padding-left:10px;
                }
              
            }
          }
      }
    }
}

</style>