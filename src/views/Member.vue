<template>
<div>
    <div class="whole">
      <Row>
        <Col :sx="24" :md="4">
        <div class="left_side">
            <p>首页/公司工商</p>
            <div class="l_content">
              <div class="con_top">
                  <img src="./images/member.png">
                  <p>{{memberinfo_ajax.name}}</p>
              </div>
              <Row>
                <Col>
                <div class="con_content">
                  <Row justify="center" class="code-row-bg" gutter="flex">
                    <Col :xs="24" :sm="16" :md="16"> <router-link to="/member" active-class="active" exact ><div><img src="/static/membercenter/order.png" alt=""><span>我的订单</span></div></router-link></Col>
                    <Col :xs="0" :sm="0" :md="24"><router-link to="/member/Member_userrevew" active-class="active"><div class="userrevew"><img src="/static/membercenter/pingjia.png" alt=""><span>用户评价</span></div></router-link></Col>
                    <Col :xs="24" :sm="16" :md="16"><router-link to="/member/Member_settings" active-class="active"><div><img src="/static/membercenter/shezhi.png" alt=""><span>账户设置</span></div></router-link></Col>
                  </Row>
                </div>
                </Col>
              </Row>
            </div>
        </div>
        </Col>
        <router-view> </router-view>
      </Row>
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
      memberinfo_ajax:[],
      memberpic:"http://115.182.107.203:8088/xinda/pic",
    }
  },
  created(){
    this.memberinfo()
    //获取订单列表
   
  },
  methods: {
    components:{
        Member_center,
        Member_userrevew,
        Member_settings
    },
    memberinfo(){
      let _this = this;
      this.ajax.post("/xinda-api/member/info").then(function(res){
        _this.memberinfo_ajax = res.data.data
        // console.log(res.data)
      })
    },
   
    

  },
}
</script>


<style scoped lang=less>
.whole{
  overflow: hidden;
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
            text-align: center;
            a{
              display: block;
              
            }
             .active{
                background:#e9e9e9!important;
              }
            div{
                width: 240px;
                height: 51px;
                margin: 0 auto;
                cursor: pointer;
                line-height: 50px;
                /*padding: 0 0 0 70px;*/
              img{
                vertical-align: middle;
              }
               span{
                  font-size:16px;
                  vertical-align: middle;
                  padding-left:10px;
                }
              
            }
          }
      }
    }
}

</style>