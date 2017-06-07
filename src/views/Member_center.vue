<template>
    <div>
        <transition name="fade">
        <div class="confirm" v-show="show_confirm">
            <p><span @click="close_confirm">&times;</span></p>
            <div class="confirm_cont">
                您确定要删除此宝贝吗？
            </div>
            <div class="click">
                <div class="button" @click="delete_sure">确认</div>
                <div class="button" @click="cancle_confirm">取消</div>
            </div>
        </div>
        </transition>
        <!--会员中心右侧订单部分-->
        <div class="right_side">
            <div class="r_top">
                <p>我的订单</p>
            </div>
            <div class="r_ordernum">
              订单号：<input class="order_ser" type="text" placeholder="请输入订单号搜索" v-model="businessNumber" >
              <input class="serc" type="button" value="搜索" @click="businesslist()">
            </div>
            <div class="r_time">
              创建时间：<input type="text" v-model="stratTime"><input type="text"  v-model="endTime">
            </div>
            <ul>
                <li class="item1">商品名称</li>
                <li class="item2">单价</li>
                <li class="item3">数量</li>
                <li class="item4">总金额</li>
                <li class="item5">订单状态</li>
                <li class="item6">订单操作</li>
            </ul>
            <div class="r_ordertime" v-for="(businessinfo,index) in businesslist_ajax">
              <table border="1px solid #f7f7f7 " cellspacing="0" cellpadding="0">
                  <thead>
                      <tr><td colspan="4"><span class="order_sp">订单:<span>{{businessinfo.businessNo}}</span></span><span class="time_sp"> 时间:<span>{{businessinfo.createTime}}</span></span></td></tr>
                  </thead>
                  <tbody>
                      <tr v-for="(serviceinfo,serviceindex) in businessinfo.serviceList">
                          <td class="t_d1">
                            <img src="s" alt=""><p>{{serviceinfo.providerName}}<br>{{serviceinfo.serviceName}}</p>
                            <span class="t_sp">{{serviceinfo.totalPrice}}</span>
                            <span class="t_sp2">{{serviceinfo.buyNum}}</span>
                          </td>
                          <td class="t_d2">{{serviceinfo.unitPrice}}</td>
                          <td class="t_d3">{{businessinfo.status==1?"等待买家付款":"已付款"}}</td>
                          <td class="t_d4" :rowspan="businessinfo.serviceList.length" v-if='serviceindex == 0'>
                            <p  class="t_d4_p1" @click="servicepay(index)" v-if="businessinfo.status==1" style="cursor: pointer;">付款</p>
                            <p  class="t_d4_p1" @click="servicepay(index)" v-else style="color:#ccc;border-color:#ccc">已支付</p>
                            <p  class="t_d4_p2" @click="removelist(index)" v-if="businessinfo.status==1">删除订单</p>
                          </td>
                      </tr>
                  </tbody>
              </table>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'Member_center',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      stratTime:"",
      endTime:"",
      businessNumber:"",
      businesslist_ajax:[],
      show_confirm:false
    }
  },
   created(){
       this.businesslist();
  },
  methods:{
    ...mapActions(['change_mengban']),
     //获取业务订单列表
    businesslist(){
      let that =this;
      this.ajax.post("/xinda-api/business-order/grid",this.qs.stringify({
        businessNo:this.businessNumber,
        stratTime:this.stratTime,
        endTime:this.endTime
      })).then(function(res){
        that.businesslist_ajax=res.data.data
       
        that.businesslist_ajax.forEach(function(value,index){
          let bn = value.businessNo;
          that.ajax.post("/xinda-api/service-order/grid",that.qs.stringify(
            {businessNo:bn,
             stratTime:that.stratTime,
             endTime:that.endTime
            }
          )).then(function(res){
            // value.businessNo = bn+' ';
            Vue.set(value,'serviceList',res.data.data);
             console.log(res.data.data)
            // value.serviceList = res.data.data;
          })
        })
      })
    },
    //删除订单
    removelist(index){
      this.show_confirm = true;
      this.change_mengban(true)
      this.nowindex = index;
  },
   cancle_confirm(){
        this.show_confirm = false;
        this.change_mengban(false)
    },
    delete_sure(){//确认删除 点击确认
        this.show_confirm = false;
        this.change_mengban(false)
        let index = this.nowindex;
        let _this= this
        this.ajax.post("/xinda-api/ business-order/del",_this.qs.stringify({
          id:this.businesslist_ajax[index].id
        })).then(function(res){
          if(res.data.status==1){
          _this.businesslist_ajax.splice(index,1)
          } 
        })
    },
    close_confirm(){
      this.cancle_confirm();
    },
    //付款
    servicepay(index){
       this.$router.push({path:"/Order_info",query:{order_num:this.businesslist_ajax[index].businessNo}})
    }
    //获取服务订单列表
    // servicelist(){
    //   let that = this;
      
    //   this.ajax.post("/xinda-api/service-order/grid",this.qs.stringify(
    //    { "businessNo":"S1706050109044338040"})).then(function(res){
    //     console.log("服务订单",res)
    //   })
    // }
    // memeberview(){
    //    let that =this;
    //   this.ajax.post("/xinda-api/service/judge/submit",this.qs.stringify(
    //   {
    //     id:"93d5f0e774ea4718b1576a292256feb3",
    //     type:1,
    //     score:2	,
    //     content:"呵呵",
    //     tags:""
    //     }
    //   )).then(function(res){
    //     console.log("提交评价",res)
    //   })
    // },
    // dingdanmingxi(){
    //   let _this = this;
    //   console.log(this.businesslist_ajax)
    //   this.ajax.post("/xinda-api/business-order/detail",this.qs.stringify({
    //      businessNo:this.businesslist_ajax.businessNo
    //   })).then(function(res){
    //     console.log("明细",res)
    //   })
    // }
  }
}
</script>

<style scoped lang =less>
.confirm{
    width: 340px;
    height: 140px;
    background: #fff;
    padding: 0px 7px 0px 7px ;
    border: 2px solid #ccc;
    position: fixed;
    overflow: hidden;
    z-index: 999;
    top: 30%;
    left: 50%;
    margin-left: -200px;
    p{
        height: 30px;
        border-bottom: 1px dotted #ccc;
        span{
            display: block;
            width: 30px;
            height: 30px;
            float: right;
            font-size: 30px;
            cursor: pointer;
            text-align: center;
            color:#ccc;
            &:hover{color: #000;}
        }
    }
    .confirm_cont{
        height: 45px;
        font-size: 17px;
        background: #fff;
        text-indent: 30.5px;
        line-height: 45px;
    }
    .click{
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;
        .button{
            width: 100px;
            height: 30px;
            background: #fff;
            text-align: center;
            line-height: 30px;
            margin: 0 auto;
            cursor: pointer;
            &:first-child{
                background:#2693d4;
                color: #fff;
                &:hover{text-decoration: underline;}
            }
            &:last-child{
                border:1px solid #ccc;
                &:hover{color:red;}
            }
        }
    }
}
.confirm.fade-enter{
    height: 0;
}
.confirm.fade-enter-active{
    transition: height 0.4s; 
}
    .right_side{
        width:934px;
        margin-left:20px;
        margin-top:30px;
        float:left;
        .r_top{
          width:934px;
          height:30px;
          border-bottom:1px solid #e9e9e9;
          p{
            width:112px;
            height:28px;
            font-size:14px;
            line-height: 30px;
            margin-left:40px;
            color:#2693d4;
            text-align: center;
            border-bottom:1px solid #2693d4;
          }
        }
        .r_ordernum{
          width:934px;
          height:23px;
          margin-top:20px;
          font-size:16px;

          .order_ser{           
            width:263px;
            height:23px;
            margin-left:26px;
          }
          .serc{
            cursor:pointer;
            width:70px;
            height:25px;
            border-radius: 5px;
            background: #fff;
            color:#2693d4;
            border:1px solid #2693d4;
            margin-left:20px;
          }
        }
        .r_time{
          width:934px;
          height:23px;
          margin-top:10px;
          font-size:16px;
          input{
            width:112px;
            height:23px;
            margin-left:10px;
          }

        }
        ul{
          width:934px;
          height:35px;
          margin-top:10px;
          background: #f7f7f7;
          margin-top:20px;
          li{
            float:left;
            color:#000;
            font-weight:bold;
            line-height: 35px;
          }
          .item1{
            margin-left:40px;
          }
          .item2{
            margin-left:270px;
          }
          .item3{
            margin-left:80px;
          }
          .item4{
            margin-left:80px;
          }
          .item5{
            margin-left:80px;
          }
          .item6{
            margin-left:80px;
          }
        }
        /*table*/
        .r_ordertime{
          table{
            width:936px;
            border:1px solid #f7f7f7;
            margin-top:20px;
          }
          thead{
            background: #f7f7f7;
            tr{
              height:40px;
            }
          }
          .order_sp{
              margin-left:10px;
          }


          tbody{          
          .t_d1{
            width:550px;
            height:70px;
            position:relative;
              img{
                float:left;
                width:48px;
                height: 48px;
                background:#e8e8e8;
                margin-top:10px;
                margin-left:10px;
              }
              p{
                float:left;
                margin-left:10px;
                margin-top:12px;

              }
              .t_sp{
                position:absolute;
                left:375px;
                line-height: 70px;
              }
              .t_sp2{
                 position:absolute;
                 right:65px;
                 line-height: 70px;
              }

          }
          .t_d2{
            width:120px;
            text-align: center;
          }
          .t_d3{
            width:140px;
            text-align: center;
          }
          .t_d4{
            text-align: center;
            .t_d4_p1{
              width:54px;
              height:24px;
              border:1px solid #2693d4;
              border-radius: 5px;
              margin:0 auto;
              
              line-height: 24px;
            }
            .t_d4_p2{
              color:red;
              margin-top:10px;
              cursor: pointer;
            }
          }
          }
        }
    }


</style>